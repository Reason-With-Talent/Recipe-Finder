import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"
import logo from "../assets/IMG/Logo (20).svg"
import { useState } from "react";
const Header = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        if (open) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }

    };
    return (
        <>
            <header className="flex md:justify-between bg-[#f6b100] py-4 md:px-[100px] px-5 items-center">
                {open ? <AiOutlineMenu onClick={handleOpen} className="md:hidden text-[20px]" /> :
                    <div className="relative">
                        <FaTimes onClick={handleOpen} className="md:hidden" />
                        <div className="flex flex-col bg-[#f6b100] absolute w-[100px] h-[200px] rounded-lg">
                            <span className="text-[#FFFFFF] p-[10px] font-medium text-[15px]">Home</span>
                            <span className="text-[#FFFFFF] p-[10px] font-medium text-[15px]">About</span>
                            <span className="text-[#FFFFFF] p-[10px] font-medium text-[15px]">Contact</span>
                            <span className="text-[#FFFFFF] p-[10px] font-medium text-[15px]">FAQ</span>
                        </div>

                    </div>
                }
                <div className="w-fit self-center md:self-start m-auto md:m-0">
                    <img src={logo} className="img-fluid w-[200px]" />
                </div>
                <div className="hidden md:flex gap-10 text-white text-xl">
                    <AiOutlineSearch />
                    <AiOutlineHeart className="text-white" />
                    <AiOutlineUser />
                </div>
            </header>
            <div className="md:hidden flex bg-[#f6b100] py-3 px-5 items-center">
                <div className="flex items-center ps-5 gap-5 w-full bg-white rounded h-[50px]">
                    <AiOutlineSearch className="text-[#9f9f9f] text-[25px]" />
                    <input placeholder="Search recipes" className="w-full text-[#9f9f9f] outline-none" />
                </div>
            </div>
        </>
    )
}
export default Header;