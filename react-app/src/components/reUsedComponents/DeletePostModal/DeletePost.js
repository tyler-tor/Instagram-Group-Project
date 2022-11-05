import { useDispatch } from "react-redux";
import { deletePost } from "../../../store/post";

const DeletePost = ({ onClose, postId }) => {
  const dispatch = useDispatch();

  const handleYes = async (e) => {
    e.preventDefault();
    // console.log('DELETE POST', postId.postId);
    const del = await dispatch(deletePost(postId.postId)).then(() => {
      //!commented this out because it seemed it was causing a memory leak.
      //!model still closes even though it is commented out.
      // onClose()
    });
    // console.log('TESTING!!!');
  };

  const handleNo = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <div className="delete-post-container">
        <div>Are you sure you want to delete the post?</div>
        <div className="delete-post-button-container">
          <button onClick={handleYes}>YES</button>
          <button onClick={handleNo}>NO</button>
        </div>
      </div>
    </>
  );
};

export default DeletePost;
