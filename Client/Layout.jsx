import Header from "./Header"
import { Outlet } from "react-router"
export default function Layout(){
    return(
        <div className="p-4 flex-col h-100  ">
            <Header/>
            <Outlet/>
        </div>
    )
}