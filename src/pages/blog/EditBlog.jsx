import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { editBlog, setStatus } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import STATUSES from "../../../globals/status/statuses";

const EditBlog = () => {
  const {id}=useParams()
  const { status } = useSelector((state) => state.blog);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEditBlog = (data) => {
    dispatch(editBlog(id,data));
  };
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate("/blog/edit/:id");
      dispatch(setStatus(null));
    }
  },[status, navigate,dispatch]);
  return (
    <Layout>
      <Form type="Edit" onSubmit={handleEditBlog} />
    </Layout>
  );
};

export default EditBlog;
