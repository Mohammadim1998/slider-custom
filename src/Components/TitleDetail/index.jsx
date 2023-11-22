import "../../custom-styles/custom.css";
import ButtonTitle from "../AllButtons/ButtonTitle";
import TitleDetail from "./titleDetail.module.css";;

const Titledetail = ({ titleDetail, btnTitle, toggleHandler }) => {
    console.log("toggleHandler ==>", toggleHandler);
    return (
        <div className={`absolute ${TitleDetail.bgCustom2} ${TitleDetail.anim2} bottom-0 left-0 w-[1140px] h-[140px] pr-12 pt-4`}>
            <div className={`flex flex-col justify-start items-end gap-5`}>
                <h2 className={`text-white  text-[18px] font-bold text-right`}
                    style={{ fontWeight: "500" }}
                >{titleDetail}
                </h2>
                <ButtonTitle btnTitle={btnTitle} />
            </div>
        </div>
    );
}

export default Titledetail;