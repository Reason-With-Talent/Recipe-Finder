import House from "../assets/IMG/House_01.svg"
import Vector from "../assets/IMG/Vector.svg"
import Network from "../assets/IMG/Network.svg"
import Vector1 from "../assets/IMG/Vector(1).svg"
import User from "../assets/IMG/User_02.svg"
const Footer = () => {
    return (
        <>
            <section className="md:hidden px-[10px] mb-[20px]">
                <hr className="mt-[30px]"></hr>
                <div className="flex justify-between mt-[30px]">
                    <img src={House} />
                    <img src={Vector} />
                    <img src={Network} />
                    <img src={Vector1} />
                    <img src={User} />
                </div>
            </section>
        </>
    )
}
export default Footer;