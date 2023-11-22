import ButtonTitle from "../AllButtons/ButtonTitle";
import ContentBox from "../Content-box";
import Image from "next/image";

const Content = () => {
    return (
        <div className="z-20 mt-[70px] flex justify-between items-center">
            <ContentBox
                icon={ "/images/Frame.svg"}
                title={"دعوت از سخنران"}
                subTitle={"نیازمند دعوت از سخنران هستید ؟"}
                desc={"اگر نیاز دارید برای مناسب یا برنامه خود سخنرانی برای مراسم خود دعوت کنید در فرآیندی ساده و کوتاه سخنران مورد نظرتان را دعوت کنید"}
                btnTitle={"دعوت از سخنران"}
            />
            <ContentBox
                icon={"/images/Frame reg.svg"}
                title={"عضویت سخنران"}
                subTitle={"می خواهید عضو سخنرانان شمع شوید ؟"}
                desc={"اگر سخنران هستید و تمایل دارید در لیست سخنرانان سامانه شمع قرار بگیرید، در فرآیندی ساده و کوتاه فرم های عضویت را پر نمایید و از مزایای این سامانه استفاده کنید"}
                btnTitle={"عضویت سخنران"}
            />
        </div>
    );
}

export default Content;