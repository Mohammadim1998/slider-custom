const ButtonTitle = ({ btnTitle }) => {
    return (
        <button className="z-0 w-[197px] h-[50px] flex justify-center items-center p-[13px_34px_15px_34px] rounded-[10px] text-white bg-[#BF9A66] text-[14px]"
            style={{ fontWeight: "700" }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-[10px]" width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M6 1L2 5L6 9" stroke="white" stroke-width="2" stroke-linecap="round" />
                <path d="M2 5H12" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>
            {btnTitle}
        </button>
    );
}

export default ButtonTitle;