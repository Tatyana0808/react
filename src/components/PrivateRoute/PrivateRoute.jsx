import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function PrivateRoute(){
    const {userData} = useUser();
return userData ? <Outlet/> : <Navigate to={appRoutes.LOGIN}/>
}