import { Link } from "react-router-dom"

export default function LoginPage(){
    return(
        <div className="mt-4 grow flex justify-around items-center h-screen">
            <div className="grow mb-32">
            <h1 className="text-4xl text-center">Login</h1>
            <form className="max-w-md mx-auto ">
                <input type="email" placeholder="your@email.com" />
                <input type="password" placeholder="password" />
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet?<Link className="underline text-black"to={'/register'}>Register</Link> 
                </div>
            </form>
            </div>
        </div>
    )
}