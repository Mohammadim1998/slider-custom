import ButtonTitle from "../AllButtons/ButtonTitle";

const ContentBox = ({ icon, title, subTitle, desc, btnTitle }) => {
    return (
        <div className="w-[545px] h-[391px] text-center p-[40px_50px] rounded-[25px]"
            style={{ border: '2px solid #F2F2F2' }}>
            <div className="icon flex justify-end mb-[15px]">
                <img src={icon} />
            </div>
            <h1 className="title mb-[5px] text-right text-[24px] text-[#1D266C]"
                style={{ fontWeight: "800" }}>{title}</h1>

            <h3 className="subTitle mb-[20px] text-right text-[20px] text-[#1D266C]"
                style={{ fontWeight: "400" }}>{subTitle}</h3>

            <p className="desc line-clamp-2 mb-[40px] text-right text-[14px] text-[#1D266C]"
                style={{ fontWeight: "300", lineHeight: "26px" }}>{desc} </p>

            <div className="flex justify-end">
                <ButtonTitle btnTitle={btnTitle} />
            </div>
        </div>
    );
}

export default ContentBox;