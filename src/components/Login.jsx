import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import LoginContext from "../context/LoginContext";
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

    const { values, handleChange, handleSubmit } = useContext(LoginContext);

	return (
        <div className="flex h-screen w-full justify-center items-center bg-slate-200">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form
                    method="post" 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                        Sign in
                    </h5>
                    <p className=" dark:text-white text-center">
                        Login to your account
                    </p>
                    <div>
                        <input
                            type="text"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            autoComplete="on"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                    </div>
        
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Sign In
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                        Not registered?{" "}
                        <a
                            href="#"
                            className="text-blue-700 hover:underline dark:text-blue-500">
                            Create account
                        </a>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
	);
};
