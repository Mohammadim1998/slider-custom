import ListOfSpeakersBox from "../ListOfSpeakersBox";

const ListOfSpeakers = () => {
    return (
        <>
            <div className="flex flex-col gap-[5px] m-[100px_40px]">
                <h1 className="text-[30px] text-[#1D266C] text-center"
                    style={{ fontWeight: "700" }}>لیست موضوعی <span className="text[30px]" style={{ fontWeight: "400" }}>سخنرانان</span></h1>
                <h3 className="text-center"
                    style={{ color: "rgba(29 ,38, 108, 0.38)" }}>دسته بندی سخنرانان بر اساس موضوع سخنرانی</h3>
            </div>
            <div className="flex flex-row-reverse justify-between items-center">
                <ListOfSpeakersBox
                    icon={"/images/users1.svg"}
                    speakerTitle={"علوم انسانی"}
                    speaker={"25 سخنران"}
                />
                <ListOfSpeakersBox
                    icon={"/images/chart-histogram1.svg"}
                    speakerTitle={"علوم مالی"}
                    speaker={"53 سخنران"}
                />
                <ListOfSpeakersBox
                    icon={"/images/flag1.svg"}
                    speakerTitle={"بین الملل"}
                    speaker={"55 سخنران"}
                />
                <ListOfSpeakersBox
                    icon={"/images/palette1.svg"}
                    speakerTitle={"هنر و تجربه"}
                    speaker={"42 سخنران"}
                />
                <ListOfSpeakersBox
                    icon={"/images/chart-pie1.svg"}
                    speakerTitle={"اقتصاد"}
                    speaker={"87 سخنران"}
                />
            </div>
        </>
    );
}

export default ListOfSpeakers;