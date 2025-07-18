 import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    const token=useSelector((state)=>state.auth.token)
    if(!token){
        return <Navigate to='/login' replace/>
    }
  return children
}

Protected.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Protected
