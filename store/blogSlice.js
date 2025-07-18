import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../globals/status/statuses";
import api from "../src/services/api";

const blogSlice = createSlice({
  name: "blog", //Slice  ko name
  initialState: {
    //state ho yo
    blog: [],
    token: null,
   singleBlog: null,
    status: null,
  },
  reducers: {
    //yo vane ko hamro reducer which acts as helping hand
    setBlog(state, action) {
      state.blog = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setSingleBlog(state, action) {
      state.singleBlog = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setBlog,  setSingleBlog,setToken, setStatus } = blogSlice.actions;
export default blogSlice.reducer;

export function addBlog(data) {
  return async function addBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await api.post(`blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
       "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      console.log("Response status:", response.status);
      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await api.get(`blog`);
      console.log("API response:", response.data);
      if (response.status === 200 && response.data.data.length > 0) {
        dispatch(setBlog(response.data.data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

 export function fetchSingleBlog(id) {
  return async function fetchSingleBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await api.get(`blog/${id}`);
      console.log("Single blog fetched:", response.data);
      if (response.status === 200 && response.data) {
        dispatch(setSingleBlog(response.data.data)); // Adjust if needed
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Fetch single blog error:", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function deleteBlog(id) {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      
      const response = await api.delete(`blog/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`,
        }});

      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function editBlog(id, data) {
  return async function editBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    console.log("Edit Blog ID:", id);
    try {
      const response = await api.patch(`blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` ,
        },
      });

      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Edit Blog Error:", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
