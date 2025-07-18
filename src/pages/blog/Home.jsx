import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog, setStatus } from "../../../store/blogSlice";
import STATUSES from "../../../globals/status/statuses";

const Home = () => {
  const dispatch = useDispatch();

  const { status, blog: blogs } = useSelector((state) => state.blog);

  // Fetch blogs on component mount
  useEffect(() => {
    console.log("Fetching blogs...");
    dispatch(fetchBlog());
  }, [dispatch]);

  // Reset status after success
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      dispatch(setStatus(null));
    }
  }, [status, dispatch]);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-2 mt-5 px-4">
        {(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => <Card key={blog._id} blog={blog} />)
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </Layout>
  );
};

export default Home;
