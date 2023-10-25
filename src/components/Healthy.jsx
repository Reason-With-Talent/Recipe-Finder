import Salad from "../assets/IMG/Salad.svg"
import Rating from "../assets/IMG/Rating.svg"
import Salad1 from "../assets/IMG/Salad (1).svg"
const Healthy = () => {
    return (
        <>
            <section className="flex justify-between md:px-[100px] px-[10px] md:mt-[50px] mt-[20px]">
                <div>
                    <h4 className="text-[#181A20] text-[20px] font-semibold">Healthy Recipes</h4>
                    <p className="text-[#F6B100] text-[15px] font-medium">with features</p>
                </div>
                <span className="md:mt-[12px] mt-[25px] text-[#9F9F9F] text-[15px] font-normal">See all</span>
            </section>
            <section className="md:px-[100px] px-[10px] pt-[50px] flex justify-between mb-[40px]">
                <span className="grid md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-[180px] pr-[20px]">
                    <img src={Salad} className="ml-[10px]" />
                    <h5 className="text-[18px] font-semibold text-left ml-[10px]">Keto Salad</h5>
                    <div className="flex justify-between mb-[20px]">
                        <h6 className="text-[#9F9F9F] font-normal text-[14px] ml-[10px]">Beans & Fruits</h6>
                        <img src={Rating} className="md:w-[none] w-[20%]" />
                    </div>
                </span>
                <span className="md:hidden grid md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-[180px] pr-[20px]">
                    <img src={Salad1} className="ml-[10px]" />
                    <h5 className="text-[18px] font-semibold text-left ml-[10px]">Sewers Salad</h5>
                    <div className="flex justify-between mb-[20px]">
                        <h6 className="text-[#9F9F9F] font-normal text-[14px] ml-[10px]">Chicken & dal</h6>
                        <img src={Rating} className="md:w-[none] w-[20%]" />
                    </div>
                </span>
                <span className="md:grid hidden md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-[180px] pr-[20px]">
                    <img src={Salad} className="ml-[10px]" />
                    <h5 className="text-[18px] font-semibold text-left ml-[10px]">Keto Salad</h5>
                    <div className="flex justify-between mb-[20px]">
                        <h6 className="text-[#9F9F9F] font-normal text-[14px] ml-[10px]">Beans & Fruits</h6>
                        <img src={Rating} className="md:w-[none] w-[20%]" />
                    </div>
                </span>
                <span className="md:grid hidden md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-[180px] pr-[20px]">
                    <img src={Salad} className="ml-[10px]" />
                    <h5 className="text-[18px] font-semibold text-left ml-[10px]">Keto Salad</h5>
                    <div className="flex justify-between mb-[20px]">
                        <h6 className="text-[#9F9F9F] font-normal text-[14px] ml-[10px]">Beans & Fruits</h6>
                        <img src={Rating} className="md:w-[none] w-[20%]" />
                    </div>
                </span>
                <span className="md:grid hidden md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-[180px] pr-[20px]">
                    <img src={Salad} className="ml-[10px]" />
                    <h5 className="text-[18px] font-semibold text-left ml-[10px]">Keto Salad</h5>
                    <div className="flex justify-between mb-[20px]">
                        <h6 className="text-[#9F9F9F] font-normal text-[14px] ml-[10px]">Beans & Fruits</h6>
                        <img src={Rating} className="md:w-[none] w-[20%]" />
                    </div>
                </span>
                <span className="md:grid hidden md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-[180px] pr-[20px]">
                    <img src={Salad} className="ml-[10px]" />
                    <h5 className="text-[18px] font-semibold text-left ml-[10px]">Keto Salad</h5>
                    <div className="flex justify-between mb-[20px]">
                        <h6 className="text-[#9F9F9F] font-normal text-[14px] ml-[10px]">Beans & Fruits</h6>
                        <img src={Rating} className="md:w-[none] w-[20%]" />
                    </div>
                </span>
            </section>
        </>
    )
}
export default Healthy;