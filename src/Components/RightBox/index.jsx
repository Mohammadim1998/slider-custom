"use client";

const RightBox = ({ title, toggleHandler, clickArrow, icon }) => {
    return (
        <div onClick={() => clickArrow()} className="right-box flex justify-center items-center mr-[48px]">

            <span className=" right-box-arrowSvg pr-[10px] text-white">
                {toggleHandler
                    ? (<svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[15px]" viewBox="0 0 12 16" fill="none">
                        <path d="M1 9.25L6 14.25L11 9.25" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <path d="M6 14.25L6 1.75" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>)
                    : (<svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[15px]" viewBox="0 0 12 16" fill="none">
                        <path d="M11 6.75L6 1.75L1 6.75" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <path d="M6 1.75L6 14.25" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>)}
            </span>
            <span className="right-box-title text-white text-[18px]"
                style={{ fontWeight: "600" }}>{title}</span>

            <span className="right-box-svg pl-[10px] w-[32px] h-[32px]">
                {icon}
            </span>
        </div>
    );
}

export default RightBox;