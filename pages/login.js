import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../AuthProvider/Authprovider";

const login = () => {

    const { signIn, GoogleLogin } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginEmail, setLoginEmail] = useState('')

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginEmail(data.email)
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })


    }

    //Google Login     
    const handleGoogle = () => {
        GoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })
    }

    return (
        <div className="lg:px-96 lg:ml-28">

            <div class=" max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 sm:mt-5 lg:mt-10 m-0">
                <form onSubmit={handleSubmit(handleLogin)} class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">Login</h5>

                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"
                            {...register("email", { required: true })} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                        {errors.email && <span><small className='text-red-600'>email is required</small></span>}
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be 8 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.password && <span><small className='text-red-600'>{errors.password.message} </small></span>}
                    </div>
                    {

                        loginError && <span><small className='text-red-600'>{loginError}</small></span>

                    }
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                            </div>

                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>

                    </div>
                    <input type="submit" value="Login" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                    <p className="text-center">OR</p>
                    <button onClick={handleGoogle} className=" w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Continue With Google</button>

                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">

                        Not registered? <Link href="/signup" class="text-blue-700 hover:underline dark:text-blue-500">sign up here</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default login;