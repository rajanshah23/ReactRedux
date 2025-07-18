import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { deleteBlog, fetchSingleBlog } from '../../../store/blogSlice';
import { useEffect } from 'react';

const SingleBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();  
  const blog = useSelector((state) => state.blog?.singleBlog);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlog(id));
    }
  }, [dispatch, id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      await dispatch(deleteBlog(id));  
      navigate("/");  
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete blog.");
    }
  };
  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-800 py-8 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://imgs.search.brave.com/0FDP6A6kUjg7NYrfsZk1wUKN_rOvuUL2p41IeDhHroY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/NzQ1MTkwL3Bob3Rv/L2Jsb2dnaW5nLWJs/b2ctY29uY2VwdHMt/aWRlYXMtd2l0aC13/b3JrdGFibGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXhS/MnZPbXRnLU42TG82/X0kyNjlTb001UFhF/VlJ4bGd2S3hYVUJN/ZU1DX0E9"
                  alt="Blog"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link to={`/blog/edit/${id}`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                  <button
                    onClick={handleDelete}
                    className="w-full bg-red-500 dark:bg-red-700 text-white py-2 px-4 rounded-full font-bold hover:bg-red-600 dark:hover:bg-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
               {blog?.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {blog?.subtitle || 'No subtitle available.'}
              </p>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                  <span className="text-gray-600 dark:text-gray-300">  {blog?.category || 'N/A'}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Published At:</span>
                  <span className="text-gray-600 dark:text-gray-300">  {' '}
                    {blog?.publishedAt?.split('T')[0] || 'N/A'}</span>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog?.description || 'No description available.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
