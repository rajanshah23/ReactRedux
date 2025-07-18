import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { login, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../../globals/status/statuses";
import { useEffect } from "react";

const Login = () => {
  const { status, user ,token} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    //  handle navigation based on status update
    if (status === STATUSES.SUCCESS) {
      navigate("/");
      localStorage.setItem("jwtToken",token)
      dispatch(setStatus(null));
    }  
  }, [status, navigate, dispatch]);
  return <Form type="Login" user={user} onSubmit={handleLogin} />;
};

export default Login;
