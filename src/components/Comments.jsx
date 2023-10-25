import Richard from "../assets/IMG/Avatar 3.svg"
import Chat from "../assets/IMG/Chat.svg"
import Heart from "../assets/IMG/Heart.svg"
import Mask from "../assets/IMG/Mask group.svg"
import Elipse from "../assets/IMG/Ellipse 1.svg"
const Comments = () => {
    return (
        <>
            <section className="md:px-[100px] px-[10px] mb-[40px]">
                <h2 className="text-[#181A20] text-[16px] font-semibold mb-[30px]">Comments (45)</h2>

                <div className="flex justify-between">
                    <div className="flex">
                        <img src={Richard} />
                        <h1 className="mt-[20px] pl-[20px] text-[#181A20] text-[18px] font-semibold">Richard Flynn</h1>
                    </div>
                    <img src={Chat} />
                </div>
                <h3 className="text-[#181A20] text-[16px] font-medium mt-[10px]">Loving this recipe! So many delicious recipes to choose from...</h3>
                <span className="flex mt-[10px]">
                    <img src={Heart} />
                    <p className="text-[#9F9F9F] text-[16px] font-normal ml-[10px]">65</p>
                    <p className="text-[#9F9F9F] text-[16px] font-normal ml-[15px]">1 month ago</p>
                </span>
                <hr className="mt-[20px]"></hr>

                <div className="md:grid hidden">
                    <div className="flex justify-between mt-[30px]">
                        <div className="flex">
                            <img src={Mask} />
                            <h1 className="mt-[20px] pl-[20px] text-[#181A20] text-[18px] font-semibold">Mitchell Oconnor</h1>
                        </div>
                        <img src={Chat} />
                    </div>
                    <h3 className="text-[#181A20] text-[16px] font-medium mt-[10px]">Loving this recipe! So many delicious recipes to choose from...</h3>
                    <span className="flex mt-[10px]">
                        <img src={Heart} />
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[10px]">65</p>
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[15px]">1 month ago</p>
                    </span>
                    <hr className="mt-[20px]"></hr>
                </div>

                <div className="grid md:hidden">
                    <div className="flex justify-between mt-[30px]">
                        <div className="flex">
                            <img src={Mask} />
                            <h1 className="mt-[20px] pl-[20px] text-[#181A20] text-[18px] font-semibold">Mitchell Oconnor</h1>
                        </div>
                        <img src={Chat} />
                    </div>
                    <h3 className="text-[#181A20] text-[16px] font-medium mt-[10px]">Step-by-step instructions and photos make it easy to follow along and cook amazing salad</h3>
                    <span className="flex mt-[10px]">
                        <img src={Heart} />
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[10px]">78</p>
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[15px]">2 month ago</p>
                    </span>
                    <hr className="mt-[20px]"></hr>
                </div>

                <div className="md:grid hidden">
                    <div className="flex justify-between mt-[30px]">
                        <div className="flex">
                            <img src={Elipse} />
                            <h1 className="mt-[20px] pl-[20px] text-[#181A20] text-[18px] font-semibold">Finnegan Ortega</h1>
                        </div>
                        <img src={Chat} />
                    </div>
                    <h3 className="text-[#181A20] text-[16px] font-medium mt-[10px]">Loving this recipe! So many delicious recipes to choose from...</h3>
                    <span className="flex mt-[10px]">
                        <img src={Heart} />
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[10px]">65</p>
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[15px]">1 month ago</p>
                    </span>
                </div>

                <div className=" grid md:hidden">
                    <div className="flex justify-between mt-[30px]">
                        <div className="flex">
                            <img src={Elipse} />
                            <h1 className="mt-[20px] pl-[20px] text-[#181A20] text-[18px] font-semibold">Finnegan Ortega</h1>
                        </div>
                        <img src={Chat} />
                    </div>
                    <h3 className="text-[#181A20] text-[16px] font-medium mt-[10px]">Makes salad planning a breeze. i can know the benefits based on recipes</h3>
                    <span className="flex mt-[10px]">
                        <img src={Heart} />
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[10px]">95</p>
                        <p className="text-[#9F9F9F] text-[16px] font-normal ml-[15px]">2 weeks ago</p>
                    </span>
                </div>

            </section>
        </>
    )
}
export default Comments;