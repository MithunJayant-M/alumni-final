import React,{useState} from 'react';
import TagInput from '../../components/Input/TagInput';
import { MdClose } from 'react-icons/md';
import axiosInstance from '../../utils/axiosInstance';
import '../../App.css';
const AddEditNotes = ({noteData,type,getAllNotes,onClose,ShowToastMessage}) => {
  const [title, setTitle] = useState(noteData?.title || '');
  const [content, setContent] = useState(noteData?.content || '');
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState('');

const addNewNote = async() => {
  try{
    const response = await axiosInstance.post('/api/v1/add-note',{
      title,
      content,
      tags,
    });
    if(response.data && response.data.note){
      ShowToastMessage("Note added successfully");
      getAllNotes();
      onClose();
    }
  }
    catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
      }
  }
};
const editNote = async() => {
  const noteId = noteData._id;
  try{
    const response = await axiosInstance.put('/api/v1/edit-note/'+noteId,{
      title,
      content,
      tags,
    });
    if(response.data && response.data.note){
      ShowToastMessage("Note Updated successfully");
      getAllNotes();
      onClose();
    }
  }
    catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
      }
  }
};


  const handleAddNote = () => {
    if(!title){
      setError('Title is required');
      return;
    }
    if(!content){
      setError('Content is required');
      return;
    }
    setError('');
    if(type==='edit'){
      editNote();
  }
  else{
    addNewNote();
  }};
  return (
    <div className="note-container">
    {/* Close Button */}
    <button className="close-btn" onClick={onClose}>
      <MdClose className="close-icon" />
    </button>
  
    {/* Title Input */}
    <div className="input-group">
      <label>Title</label>
      <input
        type="text"
        className="text-input"
        placeholder="Go to gym"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
    </div>
  
    {/* Content Input */}
    <div className="input-group">
      <label>Content</label>
      <textarea
        className="text-area"
        placeholder="Write something..."
        rows={6}
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />
    </div>
  
    {/* Tags Input */}
    <div className="input-group">
      <label>Tags</label>
      <TagInput tags={tags} setTags={setTags} />
    </div>
  
    {/* Error Message */}
    {error && <p className="error-text">{error}</p>}
  
    {/* Add/Update Button */}
    <button className="primary-btn" onClick={handleAddNote}>
      {type === "edit" ? "UPDATE" : "ADD"}
    </button>
  </div>
  
  )
}

export default AddEditNotes;