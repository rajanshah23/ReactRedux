import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ blog }) => {
    console.log("🖼️ blog.imageUrl:", blog.imageUrl);
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
     
         <img
          className="w-full h-48 object-cover"
          src={blog.imageUrl || "/placeholder.jpg"}  
          alt={blog.title}
        />
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.title}</div>
          <p className="text-gray-700 text-base">{blog.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{blog.category}
          </span>
          <span className="inline-block text-sm text-gray-500">
            by {blog.userId?.username || "Unknown"}
          </span>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    userId: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};

export default Card;
