import Image from "next/image";
import headerStyle from "./header.module.css";

const Header = () => {
    return (
        <div>
            <header className="relative flex justify-between items-center mt-[30px]">
                <div className="z-50 absolute top-[-30px] left-[50%] translate-x-[-50%]">
                    <Image
                        src="/images/logo.png"
                        width={153.727}
                        height={181}
                    />
                </div>

                <div className="header-left flex justify-center items-center gap-[14px]">
                    <button className="bg-[#BF9A66] hover:bg-[#bf9a66d2] transition-all duration-500 rounded-[10px] text-[#fff] p-[13px_40px_15px_40px] text-[14px] "
                        style={{ fontWeight: "700" }}>ثبت نام
                    </button>

                    <button className="bg-[#fff] hover:bg-[#eeeaeaf3] transition-all duration-500 rounded-[10px] text-[#1D266C] p-[13px_40px_15px_40px] text-[14px] "
                        style={{ border: `1.5px solid #1D266C`, fontWeight: "700" }}>ورود
                    </button>
                </div>


                <div className="header-right">
                    <ul className={`lists flex flex-row-reverse gap-[40px] justify-center items-center text-[#1D266C] text-[14px] ${headerStyle.lists}`}
                        style={{ fontWeight: "500" }}>
                        <li className=""><a href="#">لیست سخنرانان</a></li>
                        <li className=""><a href="#">راهنمای کاربران</a></li>
                        <li className=""><a href="#">سوالات متداول</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;