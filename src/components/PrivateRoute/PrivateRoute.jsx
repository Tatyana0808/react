import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function PrivateRoute(){
    const {user} = useUser();
return user ? <Outlet/> : <Navigate to={appRoutes.LOGIN}/>
}