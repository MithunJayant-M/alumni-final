import { Fragment, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createBlog, getBlogs, addComment } from "../../actions/blogActions"; // Updated imports
import { useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader";

export default function UserMessage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const { loading, posts, error } = useSelector((state) => state.blogState || {});
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        if (!title || !content) {
            toast("Please fill in all fields.", {
                position: toast.POSITION.BOTTOM_CENTER,
                type: "warning",
            });
            return;
        }

        const newPost = { title, content };
        dispatch(createBlog(newPost)); // Dispatch action to create a blog directly
        setTitle("");
        setContent("");
        toast("Blog created successfully!", {
            type: "success",
            position: toast.POSITION.BOTTOM_CENTER,
        });

        navigate(`/myorders`); // Navigate to the user's blog page
    };

    const addCommentToPost = (postId, comment) => {
        if (!comment) return;
        dispatch(addComment(postId, { comment }));
    };

    useEffect(() => {
        dispatch(getBlogs());

        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: "error",
            });
        }
    }, [dispatch, error]);

    return (
        <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="col-12 col-md-10 col-lg-8">
                <h1 className="my-4">Blog Page</h1>
                <Fragment>
                    <Form onSubmit={submitHandler} className="mb-4">
                        <Form.Group controlId="blogTitle">
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter blog title"
                            />
                        </Form.Group>
                        <Form.Group controlId="blogContent">
                            <Form.Label>Blog Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write your blog here"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit Blog
                        </Button>
                    </Form>

                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="blog-list">
                            {Array.isArray(posts) && posts.length > 0 ? (
                                posts.map((post) => (
                                    <div key={post._id} className="blog-post card mb-3 p-3">
                                        <h2>{post.title}</h2>
                                        <p>{post.content}</p>
                                        <hr />
                                        <h5>Comments:</h5>
                                        <ul>
                                            {post.comments.map((comment, idx) => (
                                                <li key={idx}>{comment}</li>
                                            ))}
                                        </ul>
                                        <CommentForm
                                            onSubmit={(comment) => addCommentToPost(post._id, comment)}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>No posts available</p>
                            )}
                        </div>
                    )}
                </Fragment>
            </div>
        </div>
    );
}

function CommentForm({ onSubmit }) {
    const [comment, setComment] = useState("");

    const submitComment = (e) => {
        e.preventDefault();
        if (!comment) return;
        onSubmit(comment);
        setComment("");
    };

    return (
        <Form onSubmit={submitComment} className="mt-3">
            <Form.Group controlId="commentText">
                <Form.Control
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                />
            </Form.Group>
            <Button type="submit" className="mt-2">
                Submit Comment
            </Button>
        </Form>
    );
}
// import React from "react";
// import moment from "moment";
// import{MdCreate,MdDelete} from "react-icons/md";
// export default function UserMessage({
//     title,
//     date,
//     content,
//     tags,
//     onEdit,
//     onDelete,
//   }) {
//     return (
//       <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
//         <div className="flex items-center justify-between">
//           <div>
//             <h6 className="text-sm font-medium">{title}</h6>
//             <span className="text-xs text-slate-500">
//               {moment(date).format('Do MMM YYYY')}
//             </span>
//           </div>
//         </div>
//         <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
//         <div className="flex items-center justify-between mt-2">
//           <div className="text-xs text-slate-500">
//             {tags.map((item, index) => (
//               <span key={index}>#{item} </span>
//             ))}
//           </div>
//           <div className="flex items-center gap-2">
//             <MdCreate
//               className="icon-btn hover:text-green-600"
//               onClick={onEdit}
//             />
//             <MdDelete
//               className="icon-btn hover:text-red-500"
//               onClick={onDelete}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
  
