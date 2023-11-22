"use client";
import { useState } from "react";
//import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
//import { RxDotFilled } from "react-icons/rx";
import "../../custom-styles/custom.css";
import ImageSlider from "./ImageSlider.module.css";
import RightBox from "../RightBox";
import Titledetail from "../TitleDetail";

const ImageSlide = () => {
    const slides = [
        {
            url: "/images/slider/home-slide1.jpg",
            title: "دعوت از سخنران",
            titleDetail: "اگر نیاز دارید برای مناسبت یا برنامه خود برای مراسم خود دعوت کنید در فرآیندی ساده و کوتاه سخنران مورد نظرتان را دعوت کنید",
            btnTitle: "دعوت از سخنران",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 13.1467V18.8667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 11.24V20.76" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 9.33334V22.6667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 11.24V20.76" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24 13.1467V18.8667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.63616 2.66666 2.66663 8.63619 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            url: "/images/slider/home-slide2.jpg",
            title: "ظرفیت های تبلیغی",
            titleDetail: "کانال ویژه اعلام ظرفیت‌های تبلیغی در شهرستان‌های کشور اداره‌ اعزام مبلغان و گروه‌های تبلیغ عمومی دفتر تبلیغات اسلامی با همکاری نهادهای فرهنگی کشوری و ",
            btnTitle: "ثبت ظرفیت تبلیغی",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12.2133 14.4933C12.08 14.48 11.92 14.48 11.7733 14.4933C8.59996 14.3867 6.07996 11.7867 6.07996 8.58666C6.07996 5.31999 8.71996 2.66666 12 2.66666C15.2666 2.66666 17.92 5.31999 17.92 8.58666C17.9066 11.7867 15.3866 14.3867 12.2133 14.4933Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.88 5.33334C24.4667 5.33334 26.5467 7.42668 26.5467 10C26.5467 12.52 24.5467 14.5733 22.0533 14.6667C21.9467 14.6533 21.8267 14.6533 21.7067 14.6667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.54671 19.4133C2.32004 21.5733 2.32004 25.0933 5.54671 27.24C9.21338 29.6933 15.2267 29.6933 18.8934 27.24C22.12 25.08 22.12 21.56 18.8934 19.4133C15.24 16.9733 9.22671 16.9733 5.54671 19.4133Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.4534 26.6667C25.4134 26.4667 26.32 26.08 27.0667 25.5067C29.1467 23.9467 29.1467 21.3733 27.0667 19.8133C26.3334 19.2533 25.44 18.88 24.4934 18.6667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            url: "/images/slider/home-slide3.jpg",
            title: "دعوت از اساتید",
            titleDetail: "موضوع سخنرانی حتما متناسب با مخاطبین باشد و از ارائه موضوعات ناقص و شبه ساز جدا خودداری شود",
            btnTitle: "ثبت سخنران",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 13.1467V18.8667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 11.24V20.76" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 9.33334V22.6667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 11.24V20.76" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24 13.1467V18.8667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.63616 2.66666 2.66663 8.63619 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleHandler, setToggleHandler] = useState(false);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const clickArrow = () => {
        setToggleHandler(prev => !prev)
    }
    /* const goToSlide = (slideIndex) => {
         setCurrentIndex(slideIndex);
     }*/



    return (
        <div className="max-w-[1140px] h-[570px] w-full rounded-[15px] m-auto mt-5 relative">
            <div className="relative w-[1140px] h-full rounded-[15px] bg-center bg-cover duration-500"
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }} >

                <div className={`absolute cursor-pointer transition-all duration-1000 ${toggleHandler ? (ImageSlider.handleBoxActive) : (ImageSlider.handleBox)} w-[1140px] flex justify-between items-center`}>
                    <div className="left-box flex justify-center items-center text-white ml-[48px] text-[18px]"
                        style={{ fontWeight: "500" }}>
                        {/*Left Arrow */}
                        <div
                            onClick={prevSlide}
                            className="rounded-full cursor-pointer">
                            قبلی
                        </div>
                        <span className=" mx-3 w-[2px] h-[30px] bg-white"></span>
                        {/*Right Arrow */}
                        <div
                            onClick={nextSlide}
                            className="rounded-full cursor-pointer">
                            بعدی
                        </div>
                    </div>
                    <RightBox toggleHandler={toggleHandler} title={slides[currentIndex].title} clickArrow={clickArrow} icon={slides[currentIndex].icon} />
                </div>

                <div className={`absolute rounded-[0_0_15px_15px] ${toggleHandler ? ('bg-transparent') : (ImageSlider.bgCustom1)} bottom-0 left-0 right-0 w-[1140px] h-[96px]`}>
                </div>

                {toggleHandler
                    ? (<Titledetail titleDetail={slides[currentIndex].titleDetail} btnTitle={slides[currentIndex].btnTitle} toggleHandler={toggleHandler} />)
                    : (null)}

            </div>
            {/* <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className="text-2xl cursor-pointer"
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>*/}
        </div>
    );
}

export default ImageSlide;