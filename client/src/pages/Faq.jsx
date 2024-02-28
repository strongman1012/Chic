import React, { useState } from 'react';
import ImageCard1 from "../components/ImageCard1"
import Imagemobile from '../assets/services/mobile.svg';
import Imagebezier from '../assets/services/bezier.svg';
import Imagecircle from '../assets/services/code-circle.svg';
import Imagegraph from '../assets/services/graph.svg';
import ImageGroup from '../assets/services/Group.svg';
import Imagemonitor from '../assets/services/monitor.svg';
import SliderImage2 from '../components/SliderImage2';
import mobileImage1 from '../assets/services/mobile1.svg';
import mobileImage2 from '../assets/services/mobile2.svg';
import ImageCard2 from "../components/ImageCard2";
import FAQ from "../components/FAQ";

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState(false);
    const data = [
        {
            img: Imagemobile,
            title: "app design",
        },
        {
            img: Imagemonitor,
            title: "web design",
        },
        {
            img: ImageGroup,
            title: "branding",
        },

        {
            img: Imagebezier,
            title: "illuastration",
        },
        {
            img: Imagecircle,
            title: "develop",
        },
        {
            img: Imagegraph,
            title: "data analize",
        }

    ]
    const data1 = [
        {
            img: mobileImage1,
            title: "clear & transparent",
            desc: "We pay attention to the user's behavior & their interaction with the app."
        },
        {
            img: mobileImage2,
            title: "User-friendly",
            desc: "we pay a lot of attention to the visual solution so that it is also attractive "
        }
    ]
    const data2 = [
        {
            // activeClass:activeFaq,
            title: "What separates OverpoweredStudio from other design agencies?",
            content: "We get this question a lot.. There are many competent agencies in Egypt alone and even more globally. It is hard to be different when the standard is so high. So how do we stand out? First and foremost, it is the quality of the work we deliver. We create easy to use, right looking digital products and interfaces which represent your brand in the best way possible. It's our designers who make your project a reality. We always assign a multidisciplinary team of senior designers, developers, UX researchers, and other specialists led by one of our design directors and overseen by a co-founder Finally, unlike most traditional user experience design companies, we combine creativity and product design/development capabilities under one roof and on the same project."
        },
        {
            title: "What kind of designs are made by you?",
            content: "We get this question a lot.. There are many competent agencies in Egypt alone and even more globally. It is hard to be different when the standard is so high. So how do we stand out? First and foremost, it is the quality of the work we deliver. We create easy to use, right looking digital products and interfaces which represent your brand in the best way possible. It's our designers who make your project a reality. We always assign a multidisciplinary team of senior designers, developers, UX researchers, and other specialists led by one of our design directors and overseen by a co-founder Finally, unlike most traditional user experience design companies, we combine creativity and product design/development capabilities under one roof and on the same project."
        }
    ]
    return (
        <div className='bg-pink'>
            <section className='max-w-[800px]  mx-auto w-full px-[20px] py-[20px]'>
                <h1 className='w-full text-[26px] sm:text-[36px] mt-[50px] text-center md:text-start'>Frequently asked questions</h1>
                <div className="text-[20px] leading-[50px] text-justify	">
                    <p className="font-bold text-[26px] mt-[60px]">Do fillers hurt?</p>
                    <p>
                        Prior to treatment you are numbed with hospital grade numbing cream and also injected with filler that contains lidocaine for extra comfort. Most people feel a slight pressure and slight scratching sensation at most. If you are sensitive to pain you can get EMLA numbing cream from the Pharmacy and apply this in a very thick layer 15 minutes prior to your appointment. Paracetamol can also be taken 30 minutes before your appointment.
                    </p>
                    <p className="font-bold text-[26px] mt-[60px]">How much filler do I need?</p>
                    <p>
                        It depends because it is so personalised to your features and desired result. However 1ml is recommended for first time fillers to build that initial layer and then another session a month later to build up that volume in the lips. Most clients find that they need 2-3 layers before the filler builds up leaving you with a fuller look. If going for a very subtle enhancement I would recommend 0.5ml over 2-3 sessions.
                    </p>
                    <p className="font-bold text-[26px] mt-[60px]">How long do fillers last?</p>
                    <p>
                        You can expect to see results lasting anything from 9 months to a year and a half. When first getting filler a minimum of two- three sessions is recommended to build a nice level of filler. Sunbeds, exercise and having a fast metabolism are all known to break down filler quicker which may mean having top ups more regularly. Once you have reached your desired volume you can maintain with a top up every 6-12 months if necessary.
                    </p>
                    <p className="font-bold text-[26px] mt-[60px]">Can filler be removed?</p>
                    <p>
                        The beauty of the hyaluronic acid dermal fillers is that there’s a product called hyaluronidase, which is an enzyme that can quickly be injected to immediately dissolve the dermal filler. Its a quick process and the product starts to immediately break down the filler.
                    </p>
                    <p className="font-bold text-[26px] mt-[60px]">What is the recovery time for dermal fillers?</p>
                    <p>
                        Every patient's recovery time is different after any procedure. Typically lip swelling after filler will significantly decrease after 2-3 days but for some patients it may last as long as 5-7 days. Any swelling or bruising should be completely gone by two weeks. We recommend that you increase your water in-take before and after injection. Immediately after your treatment you may notice needle marks, tenderness and asymmetry, these issues are common and will settle in a few days to weeks.
                    </p>
                    <p className="font-bold text-[26px] mt-[60px]">How long does tear troph filler last?</p>
                    <p>
                        On average, it can last for up to 12 months, however this depends on the individual's lifestyle, age and skin type. Redensity II attracts less water than most Hyaluronic Acid gel and is done via cannula technique to prevent trauma and bruising , so minimal swelling is present after treatment. Tear troph cannot be booked as part of a contour package.
                    </p>
                    <p className="font-bold text-[26px] mt-[60px]">What is Aqualyx?</p>
                    <p>
                        Aqualyx is a safe, fat dissolving injection treatment that reduces fat cells in the treated area. It produces long lasting results and can be used to treat small ,exercise resistant pockets of fat around the chin , chest , back, love handles ,abdomen , thighs , knees and ankles. 3-5 sessions are recommend and results can usually be seen by the second/third sessions.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Faq