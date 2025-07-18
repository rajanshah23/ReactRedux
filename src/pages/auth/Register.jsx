import Form from "./components/form/Form";
import { register, setStatus } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../../globals/status/statuses";
import { useEffect } from "react";

const Register = () => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    dispatch(register(data));
  };

  //  handle navigation based on status update
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate("/login");
      dispatch(setStatus(null)); //yekchoti status succcess vayepaxi and navigate vayepaxi  tyo status lai hamley default null setgardeyem
    }
  }, [status, navigate, dispatch]);
  return <Form type="Register" onSubmit={handleRegister} />;
};

export default Register;
