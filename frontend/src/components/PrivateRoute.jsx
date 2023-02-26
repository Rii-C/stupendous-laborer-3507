
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) => {
    
    const token=useSelector(store=>store.authReducer.token)
    console.log(token)

   
    if(token===null){
      return <Navigate to="/login" />
    }
    return children;
  };
  
  export default PrivateRoute;
  