import { useRef } from 'react';
import ImageCard2 from "./ImageCard2";
import projectsImage1 from '../assets/services/projects1.svg';
import projectsImage2 from '../assets/services/projects2.svg';
import Slider from 'react-slick';
import arrowLeftLight from '../assets/arrow-leftLight.svg';
import arrowLeftBlack from '../assets/arrow-leftBlack.svg';
import arrowRightLight from '../assets/arrow-rightLight.svg';
import arrowRightBlack from '../assets/arrow-rightBlack.svg';
import Button from './Button';

const SliderImage = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 2,
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
                    rows: 2,
                },
            },
        ],
    };
    const data = [
        {
            img: projectsImage1,
            title: "Banking App ( light mode)",
            desc: "Design a concept of a B2C investment and bank mobile app following the provided Brand Style Guide. "
        },
        {
            img: projectsImage2,
            title: "Translate App ( light & dark)",
            desc: "Create a concept of a mobile app for a startup with a focus on the screens being as impressive in the presentation"
        },
        {
            img: projectsImage1,
            title: "Banking App ( light mode)",
            desc: "Design a concept of a B2C investment and bank mobile app following the provided Brand Style Guide. "
        },
        {
            img: projectsImage2,
            title: "Translate App ( light & dark)",
            desc: "Create a concept of a mobile app for a startup with a focus on the screens being as impressive in the presentation"
        },
        {
            img: projectsImage1,
            title: "Banking App ( light mode)",
            desc: "Design a concept of a B2C investment and bank mobile app following the provided Brand Style Guide. "
        },
        {
            img: projectsImage2,
            title: "Translate App ( light & dark)",
            desc: "Create a concept of a mobile app for a startup with a focus on the screens being as impressive in the presentation"
        },


    ]
    const toPrev = () => {
        sliderRef && sliderRef.current.slickPrev();
    }
    const toNext = () => {
        sliderRef && sliderRef.current.slickNext();
    }
    const onChangeContact = (e) => {
        console.log(e);
    }
    return (
        <>
            <div className="w-full relative items-center ">
                {/* <div id="arrow" className="absolute w-full  top-1/2 -translate-y-1/2 flex justify-between"> */}
                <div onClick={toPrev} className="group cursor-pointer hidden md:absolute top-1/2 z-50 transform -translate-y-1/2 md:left-0 md:flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans">
                    <img src={arrowLeftLight} alt="arrowLeftLight" className="group-hover:hidden" />
                    <img src={arrowLeftBlack} alt="arrowLeftBlack" className="hidden group-hover:block" />
                </div>
                <div onClick={toNext} className="cursor-pointer hidden z-50 group md:absolute top-1/2  transform -translate-y-1/2 md:right-0 md:flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans">
                    <img src={arrowRightLight} alt="arrowRightLight" className=" group-hover:hidden" />
                    <img src={arrowRightBlack} alt="arrowRightBlack" className=" hidden group-hover:block" />
                </div>


                {/* </div> */}


                <div className="max-w-7xl mx-auto px-3" >
                    <Slider ref={sliderRef} {...settings}>
                        {
                            data.map((item, index) => (
                                <div className="px-2" key={index}>
                                    <ImageCard2 image={item.img} title={item.title} desc={item.desc} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className='md:hidden gap-5 flex justify-center mt-11'>
                    <div onClick={toPrev} className='md:hidden group w-12  cursor-pointer flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans'>
                        <img src={arrowLeftLight} alt="arrowLeftLight" className="group-hover:hidden" />
                        <img src={arrowLeftBlack} alt="arrowLeftBlack" className="hidden group-hover:block" />
                    </div>
                    <div onClick={toNext} className='md:hidden group w-12 cursor-pointer flex items-center px-4 py-8 bg-dark hover:bg-sans active:bg-sans'>
                        <img src={arrowRightLight} alt="arrowRightLight" className="group-hover:hidden " />
                        <img src={arrowRightBlack} alt="arrowRightBlack" className="hidden group-hover:block" />
                    </div>
                </div>

                {/* <section>
                <div class="grid grid-cols-2 gap-4 max-w-7xl mx-auto  px-6">
                    {
                        data.map((item, index) => (
                            <div className="mr-3" key={index}>
                                <ImageCard2 image={item.img} title={item.title} desc={item.desc} />
                            </div>
                        ))
                    }
                </div>
            </section> */}
            </div>
            <div className='mt-12 flex justify-center px-3'>
                <Button
                    label="Contact Us"
                    textColor="black"
                    fontWeight="semibold"
                    onChange={onChangeContact}
                />
            </div>
        </>

    )
}

export default SliderImage;