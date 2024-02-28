import { useRef } from 'react';
import ImageCard from "./ImageCard";
import carouselImage1 from '../assets/Pthoto.svg';
import Slider from 'react-slick';
import arrowLeftLight from '../assets/arrow-leftLight.svg';
import arrowLeftBlack from '../assets/arrow-leftBlack.svg';
import arrowRightLight from '../assets/arrow-rightLight.svg';
import arrowRightBlack from '../assets/arrow-rightBlack.svg';

const SliderImage = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        speed: 250,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    rows: 3,
                },
            },
        ],
    };
    const data = [
        {
            img: carouselImage1,
            title: "Smart Home App",
            desc: "Make a promo landing page for a startup in the smart home equipment industry. "
        },
        {
            img: carouselImage1,
            title: "Car Rental App",
            desc: "Create a concept of a mobile app for a startup in the luxury car rental space."
        },
        {
            img: carouselImage1,
            title: "Car Rental App",
            desc: "Design a concept of a B2C investment and mobile app following the provided Brand Style Guide."
        },
        {
            img: carouselImage1,
            title: "Car Rental App",
            desc: "Design a concept of a B2C investment and mobile app following the provided Brand Style Guide."
        },
        {
            img: carouselImage1,
            title: "Car Rental App",
            desc: "Design a concept of a B2C investment and mobile app following the provided Brand Style Guide."
        },
        {
            img: carouselImage1,
            title: "Car Rental App",
            desc: "Design a concept of a B2C investment and mobile app following the provided Brand Style Guide."
        },
        
    ]
    const toPrev = () => {
        sliderRef && sliderRef.current.slickPrev();
    }
    const toNext = () => {
        sliderRef && sliderRef.current.slickNext();
    }

    return (
        <div className="w-full relative">
            <div onClick={toPrev} className="group cursor-pointer hidden md:absolute z-50 md:top-[208px] transform -translate-y-1/2 md:left-0 md:flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans">
                <img src={arrowLeftLight} alt="arrowLeftLight"  className="group-hover:hidden" />
                <img src={arrowLeftBlack} alt="arrowLeftBlack"  className="hidden group-hover:block" />
            </div>
            <div onClick={toNext} className="cursor-pointer hidden z-50 group md:absolute md:top-[208px] transform -translate-y-1/2 md:right-0 md:flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans">
                <img src={arrowRightLight} alt="arrowRightLight"  className=" group-hover:hidden" />
                <img src={arrowRightBlack} alt="arrowRightBlack"  className=" hidden group-hover:block" />
            </div>
            <div className="max-w-7xl mx-auto">
                <Slider ref={sliderRef} {...settings}>
                    {
                        data.map((item, index) => (
                            <div className="mr-3" key={index}>
                                <ImageCard image={item.img} title={item.title} desc={item.desc} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className='gap-5 flex justify-center mt-11'>
                <div onClick={toPrev} className='md:hidden group w-12  cursor-pointer flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans'>
                    <img src={arrowLeftLight} alt="arrowLeftLight"  className="group-hover:hidden" />
                    <img src={arrowLeftBlack} alt="arrowLeftBlack"  className="hidden group-hover:block" />
                </div>
                <div onClick={toNext} className='md:hidden group w-12 cursor-pointer flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans'>
                    <img src={arrowRightLight} alt="arrowRightLight"  className="group-hover:hidden " />
                    <img src={arrowRightBlack} alt="arrowRightBlack"  className="hidden group-hover:block" />
                </div>
            </div>
            
        </div>
    )
}

export default SliderImage;