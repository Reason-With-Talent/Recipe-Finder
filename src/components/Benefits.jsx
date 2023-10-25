import Mung from "../assets/IMG/Mung.svg"
import Rating2 from "../assets/IMG/Rating (2).svg"
import Check from "../assets/IMG/CheckCircle.svg"
import Pasta from "../assets/IMG/Pasta.svg"
import Tuna from "../assets/IMG/Tuna.svg"
import Caser from "../assets/IMG/Caser.svg"
import Rating3 from "../assets/IMG/Rating (3).svg"
import Rating4 from "../assets/IMG/Rating (4).svg"
import Rating5 from "../assets/IMG/Rating (5).svg"
import Chef from "../assets/IMG/Chef.svg"
import Like from "../assets/IMG/like.svg"
const Benefits = () => {
    return (
        <>
            <section className="md:px-[100px] px-[10px] mb-[50px]">
                <img src={Chef} className="md:hidden mb-[30px]" />
                <div className="flex justify-between mb-[20px]">
                    <h4 className="text-[#F6B100] text-[16px] font-medium">With benefit</h4>
                    <span className="text-[#9F9F9F] text-[15px] font-normal">See all</span>
                </div>
                <div className="md:flex justify-between">
                    <div>
                        <div className="flex shadow-2xl md:w-[530px] w-[400px] md:py-[15px] py-[10px] rounded-2xl justify-between mb-[30px]">
                            <img src={Mung} className="w-[30%] pl-[10px]" />
                            <div className="md:pr-[20px]  md:mt-[15px] mt-[5px]">
                                <h5 className="text-[#181A20] text-[16px] font-semibold">Mung bean Salad</h5>
                                <span className="flex">
                                    <img src={Check} />
                                    <h6 className="text-[#F6B100] text-[14px] md:text-[16px] ml-[5px]">Reduce Chronic Disease Risk</h6>
                                </span>
                            </div>
                            <img src={Rating2} className="w-[10%] mr-[10px] md:mr-[20px]" />
                        </div>
                        <div className="flex shadow-2xl md:w-[530px] w-[400px] md:py-[15px] py-[10px] rounded-2xl  justify-between mb-[30px]">
                            <img src={Pasta} className="w-[30%] pl-[10px]" />
                            <div className="md:pr-[20px]  md:mt-[15px] mt-[5px]">
                                <h5 className="text-[#181A20] text-[16px] font-semibold">Pasta Salad</h5>
                                <span className="flex">
                                    <img src={Check} />
                                    <h6 className="text-[#F6B100] text-[14px] md:text-[16px] ml-[5px]">Protects against cancer</h6>
                                </span>
                            </div>
                            <img src={Rating3} className="w-[10%] mr-[10px] md:mr-[20px]" />
                        </div>
                        <div className="flex shadow-2xl md:w-[530px] w-[400px] md:py-[15px] py-[10px] rounded-2xl  justify-between mb-[30px]">
                            <img src={Tuna} className="w-[30%] pl-[10px]" />
                            <div className="md:pr-[20px]  md:mt-[15px] mt-[5px]">
                                <h5 className="text-[#181A20] text-[16px] font-semibold">Tuna Salad</h5>
                                <span className="flex">
                                    <img src={Check} />
                                    <h6 className="text-[#F6B100] text-[14px] md:text-[16px] ml-[5px]">Helps with Blood Pressure</h6>
                                </span>
                            </div>
                            <img src={Rating4} className="w-[10%] mr-[10px] md:mr-[20px]" />
                        </div>
                        <div className="flex shadow-2xl md:w-[530px] w-[400px] md:py-[15px] py-[10px] rounded-2xl  justify-between mb-[30px]">
                            <img src={Mung} className="w-[30%] pl-[10px]" />
                            <div className="md:pr-[20px]  md:mt-[15px] mt-[5px]">
                                <h5 className="text-[#181A20] text-[16px] font-semibold">Mung bean Salad</h5>
                                <span className="flex">
                                    <img src={Check} />
                                    <h6 className="text-[#F6B100] text-[14px] md:text-[16px] ml-[5px]">Reduce Chronic Disease Risk</h6>
                                </span>
                            </div>
                            <img src={Rating2} className="w-[10%] mr-[10px] md:mr-[20px]" />
                        </div>
                        <div className="flex shadow-2xl md:w-[530px] w-[400px] md:py-[15px] py-[10px] rounded-2xl  justify-between mb-[30px]">
                            <img src={Caser} className="w-[30%] pl-[10px]" />
                            <div className="md:pr-[20px]  md:mt-[15px] mt-[5px]">
                                <h5 className="text-[#181A20] text-[16px] font-semibold">Caser Salad</h5>
                                <span className="flex">
                                    <img src={Check} />
                                    <h6 className="text-[#F6B100] text-[14px] md:text-[16px] ml-[5px]">Boosts Immunity System</h6>
                                </span>
                            </div>
                            <img src={Rating5} className="w-[10%] mr-[10px] md:mr-[20px]" />
                        </div>

                    </div>
                    <div>
                        <img src={Chef} className="hidden md:grid" />
                        <div className="bg-[url('assets/IMG/Pick.svg')] md:bg-cover bg-no-repeat bg-center w-[100%] rounded-2xl md:h-[370px] h-[300px] mt-[30px]">
                         <span>
                            <button>Start Cook</button>
                         </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Benefits;