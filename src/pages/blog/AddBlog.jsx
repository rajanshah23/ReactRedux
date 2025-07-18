
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { addBlog } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../../globals/status/statuses";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setStatus } from "../../../store/blogSlice";


const AddBlog = () => {
  const { status } = useSelector((state) => state.blog);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCreateBlog = (data) => {
    dispatch(addBlog(data));
  };


  //  handle navigation based on status update
  useEffect(() => {
      console.log("Current status:", status);
    if (status === STATUSES.SUCCESS) {
      navigate("/");
      dispatch(setStatus(null))
    }  
  }, [status, navigate,dispatch]);
  return (
    <Layout>
      <Form type="Create" onSubmit={handleCreateBlog} />
    </Layout>
  );
};


export default AddBlog;
