import React, { useState } from "react";
import facebook from "../../assets/Images/logos_facebook.png";
import google from "../../assets/Images/google.png";
import ellipse from "../../assets/Images/Ellipse.png";
import Subtract from "../../assets/Images/Subtract.png";
import Polygon from "../../assets/Images/Polygon.png";
import Polygon2 from "../../assets/Images/Polygon2.png";
import Polygon3 from "../../assets/Images/Polygon3.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, email, password, confirmPassword)
        // // Validate form fields
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Make API call using Axios
        try {
            const response = await axios.post("http://localhost:5000/api/user/signup", {
                email,
                userName: username,
                password,
                confirm_password: confirmPassword
            })
            if (response.status == 200) {
                console.log(response.data)
                toast.success("User Created Successfully")
                navigate("/login")

            }

        } catch (error) {
            toast.error(error.message)
        }

    };

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-3 relative h-screen">
                {/* Left ellipse */}
                <div className="lg:col-span-1 hidden lg:block">
                    <img src={ellipse} alt="Ellipse" className="h-[550px] mt-10" />
                </div>
                {/* Form */}
                <div className="lg:col-span-1 flex justify-center items-center">
                    <div className="flex flex-col items-center px-5 lg:px-0">
                        <h1 className="font-bold text-4xl lg:text-[54px] leading-10 lg:leading-normal font-JKAbode">
                            Create Account
                        </h1>
                        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5 w-full lg:w-80 max-w-lg">
                            {/* // UserName // */}
                            <div className="flex items-center border-b border-[#DEDEDE] py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Username"
                                    aria-label="Username"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                />
                            </div>
                            {/* // Email // */}
                            <div className="flex items-center border-b border-[#DEDEDE] py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            {/* // Password // */}
                            <div className="flex items-center border-b border-[#DEDEDE] py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="password"
                                    placeholder="Password"
                                    aria-label="Password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            {/* // Confirm Password // */}
                            <div className="flex items-center border-b border-[#DEDEDE] py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="password"
                                    placeholder="Confirm Password"
                                    aria-label="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                                />
                            </div>

                            <button type="submit" className="bg-[#4044ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Sign up
                            </button>
                        </form>
                        <div className="text-center">
                            <p className="text-[#999999] my-2">Or continue with</p>
                            <div className="flex justify-center items-center gap-3">
                                <button>
                                    <img src={facebook} alt="Facebook logo" />
                                </button>
                                <button>
                                    <img src={google} alt="Google logo" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right ellipse */}
                <div className="lg:col-span-1 relative hidden lg:block">
                    <img src={Subtract} alt="Ellipse" className="h-[250px] absolute right-0" />
                    <img src={Polygon} alt="Polygon" className="h-[170px] absolute bottom-10 right-16" />
                    <img src={Polygon2} alt="Polygon" className="h-[150px] absolute bottom-0 right-0" />
                    <img src={Polygon3} alt="Polygon" className="h-[100px] absolute bottom-0 right-0" />
                </div>
            </section>
        </>
    );
};

export default SignUp;
