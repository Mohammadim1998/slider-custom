const ListOfSpeakersBox = ({ icon, speakerTitle, speaker }) => {
    return (          
            <div className="w-[200px] h-[200px] bg-white rounded-[25px] p-[34px_43px] flex flex-col items-center"
                style={{ border: "2px solid #F2F2F2" }}>
                <img className="w-[40px] h-[40px] icon mb-[20px]" src={icon} alt="" />

                <div className="relative">
                    <button className="speakerTitle bg-[#BF9A66] p-[5px_10px] rounded-[8px] text-[16px] text-white"
                        style={{ fontWeight: "600" }}>{speakerTitle}</button>

                    <img className="absolute top-[-29px] left-[50%] translate-x-[-50%] w-[25px] h-[48px]" src="/images/Subtract.svg" alt="" />
                </div>
                <h4 className="mt-2 speaker text-[14px] text-[#9C9C9C]"
                    style={{ fontWeight: "700" }}>{speaker}</h4>
            </div>
    );
}

export default ListOfSpeakersBox;