import { Navbar } from "flowbite-react";
import Link from "next/link";
import { MdAddTask, MdTask } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handlelogOut = () => {
        logOut()
            .then(() => { })
            .then((error) => {
                // console.error(error);
            });
    }

    return (
        <>
            <Navbar className="container lg:mt-3 shadow-lg"
                fluid={true}
                rounded={true}>
                <Navbar.Brand href="/">
                    <img
                        src="https://cdn.dribbble.com/users/6569/screenshots/16482169/media/de475cb79969a810d45ba9b5d8cbf4a5.png?compress=1&resize=400x300&vertical=top"
                        className="mr-3 h-10 sm:h-9"
                        alt="Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-bold text-blue-900">
                        toDO's
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <li className="text-black text-lg flex rounded-md  p-2 ">
                        <div className="text-xl mr-2 mt-1">
                            <MdAddTask></MdAddTask>
                        </div>
                        <Link href="/">Add Task</Link></li>
                    <li className="text-black text-lg flex  p-2  rounded-md ">
                        <div className="text-xl mr-2 mt-1">
                            <MdTask></MdTask>
                        </div>
                        <Link href="/my_task">My Task</Link></li>
                    <li className="text-black text-lg flex  p-2 rounded-md ">
                        <div className="text-xl mr-2 mt-1">
                            <FaTasks></FaTasks>
                        </div>
                        <Link href="/completed_task">Completed Task</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li className="text-black text-lg flex rounded-md p-2 ">
                                    <div className="text-2xl mr-2">

                                    </div>
                                    <Link href="#" onClick={handlelogOut}>Logout</Link></li>
                            </>
                            :
                            <><li className="text-black text-lg flex rounded-md p-2 ">
                                <div className="text-2xl mr-2">

                                </div>
                                <Link href="/login">Login</Link></li>
                                <li className="text-black text-lg flex rounded-md  p-2">
                                    <div className="text-2xl mr-2">

                                    </div>
                                    <Link href="/signup">SignUp</Link></li></>


                    }

                    {
                        user?.photoURL ?
                            <><img class="w-10 h-10 rounded-full" src={user.photoURL} title={user?.displayName} alt="picture"></img></>
                            :
                            <><img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxPuR1UwKhFQLeI2FPp2pcwsU97I9VXpD4gvAeH1t-UmGMoU465igKtJfYTPCUqDN4oE&usqp=CAU" title={user?.displayName} alt="picture"></img>
                            </>
                    }



                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;