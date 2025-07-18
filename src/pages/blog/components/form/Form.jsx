import { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="max-w-4xl mx-auto px-4 py-6 ">
            <div className="flex justify-between items-center ">
              <h1 className="font-bold text-blue-800 text-4xl italic">
                {type} Blog
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title*"
                name="title"
                value={data.title}
                onChange={handleChange}
                required
              />

              <input
                className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subtitle*"
                name="subtitle"
                value={data.subtitle}
                onChange={handleChange}
                required
              />

              <input
                className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                accept="image/*"
                name="image"
                onChange={handleChange}
              />

              <select
                className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
                name="category"
                value={data.category}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose Category*
                </option>
                <option value="Tech">Tech</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Education">Education</option>
          
              </select>

              <textarea
                className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline md:col-span-2"
                placeholder="Description*"
                name="description"
                value={data.description}
                onChange={handleChange}
                required
              ></textarea>

              <div className="my-2 w-full md:col-span-2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
