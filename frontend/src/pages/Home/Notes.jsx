import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import Toast from "../../components/ToastMessage/Toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { MdAdd, MdNoEncryption } from "react-icons/md";
import AddNotesImg from "../../images/notes.webp";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import "../../App.css";
import Sidebar from "../../components/admin/Sidebar";
import { useSelector } from "react-redux";

Modal.setAppElement("#root");

const Notes = () => {
  const { user } = useSelector(state => state.authState);
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });
  const [userInfo, setUserInfo] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [originalNotes, setOriginalNotes] = useState([]); // Stores full notes before search
  const [allNotes, setAllNotes] = useState([]);

  const navigate = useNavigate();

  // ✅ Fetch User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  // ✅ Fetch All Notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/get-all-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
        setOriginalNotes(response.data.notes); // Keep a backup of full notes list
      }
    } catch (error) {
      console.log("An unexpected error occurred", error);
    }
  };

  // ✅ Delete Note
  const deleteNote = async (data) => {
    const noteId = data._id;
    try {
      await axiosInstance.delete(`/api/v1/delete-note/${noteId}`);
      ShowToastMessage("Note Deleted successfully", "delete");
      getAllNotes();
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  // ✅ Search Notes (Fixed)
  const onSearchNote = async (query) => {
    if (!query.trim()) {
      setAllNotes(originalNotes); // Restore full notes list when search is cleared
      setIsSearch(false);
      return;
    }
  
    try {
      const response = await axiosInstance.get("/api/v1/search-notes", {
        params: { query },
      });
      if (response.data && response.data.notes) {
        // Ensure the response is stored as an array
        const notesArray = Array.isArray(response.data.notes) ? response.data.notes : [response.data.notes];
  
        if (!isSearch) setOriginalNotes(allNotes); // Save original notes before search
        setAllNotes(notesArray);
        setIsSearch(true);
      } else {
        setAllNotes([]); // Show empty state if no results
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  
  const updateIsPinned=async(noteData)=>{
    const noteId = noteData._id;
  try{
    const response = await axiosInstance.put('/api/v1/update-note-pinned/'+noteId,{
    isPinned: !noteData.isPinned,
    });
    if(response.data && response.data.note){
      ShowToastMessage("Note Updated successfully");
      getAllNotes();
    }
  }
    catch(error){
      console.log(error);
  }
  }
  const handleClearSearch=()=>{
    setIsSearch(false);
    getAllNotes();
  };

  // ✅ Show Toast Message
  const ShowToastMessage = (message, type) => {
    setShowToastMsg({ isShown: true, message, type });
  };

  // ✅ Close Toast Message
  const handleCloseToast = () => {
    setShowToastMsg({ isShown: false, message: "" });
  };

  // ✅ Handle Edit Note
  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, type: "edit", data: noteDetails });
  };

  // ✅ Fetch Data on Component Mount
  useEffect(() => {
    getAllNotes();
    getUserInfo();
  }, []);

  // ✅ Memoize Notes List for Performance Optimization
  const memoizedNotes = useMemo(() => {
    return allNotes.length > 0 ? (

      <div className="flex flex-col space-y-19 mt-8 max-w-3xl mx-auto">
        {allNotes.map((item) => (
          <NoteCard
            key={item._id}
            title={item.title}
            date={item.createdOn}
            content={item.content}
            tags={item.tags}
            isPinned={item.isPinned}
            // onEdit={() => handleEdit(item)}
            // onDelete={() => deleteNote(item)}
            // onPinNote={() => updateIsPinned(item)}
            onEdit={user?.role === 'admin' ? () => handleEdit(item) : undefined}
    onDelete={user?.role === 'admin' ? () => deleteNote(item) : undefined}
    onPinNote={user?.role === 'admin' ? () => updateIsPinned(item) : undefined}
          />
        ))}
        </div>
    
    ) : (
      <EmptyCard imgSrc={AddNotesImg} message={"No notes found! Try adding or searching."} />
    );
  }, [allNotes]);

  return (
    <>

      {/* ✅ Navbar with Search */}
      <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch}/>

      
      {/* ✅ Notes List / Empty State */}
      <div className="">{memoizedNotes}</div>

      {/* ✅ Floating Add Note Button */}
      <button className="floating-add-btn" 
  onClick={() => setOpenAddEditModal({ isShown: true, type: 'add', data: null })}
>
  <MdAdd className="icon" />
</button>



      {/* ✅ Add/Edit Note Modal */}
      <Modal
  isOpen={openAddEditModal.isShown}
  onRequestClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
  style={{
    overlay: { backgroundColor: "rgba(0,0,0,0.2)" }, // Dim background
    content: {
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      Height: "180%",
      width:"30%",
      padding: "30px",
      background:"none",
      border:"none",
    },
  }}
  contentLabel="Add/Edit Note"
>
  <AddEditNotes
    type={openAddEditModal.type}
    noteData={openAddEditModal.data}
    onClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
    getAllNotes={getAllNotes}
    ShowToastMessage={ShowToastMessage}
  />
</Modal>

{/* ✅ Toast Message */}
<Toast isShown={showToastMsg.isShown} message={showToastMsg.message} type={showToastMsg.type} onClose={handleCloseToast} />
    </>
  );
};

export default Notes;
