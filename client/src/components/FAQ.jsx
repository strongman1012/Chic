import AddIcon from '../assets/services/add.svg';
import XIcon from '../assets/services/x.svg';

const FAQ = (props) => {
    const { no, title, content, activeClass } = props;
    return (
        <div className="w-full md:p-8 px-6 py-4 border-[1px] border-grayC border-opacity-50">
            <div className="w-full flex relative text-grayC text-opacity-80 capitalize font-sans111 font-semibold md:text-2xl text-lg">
                
                <div className="md:mr-[26px] mr-[14px]">
                    <span> {no}. </span>
                </div>
                <div className='mr-3'>
                    <span > {title} </span>
                </div>
                <div className='absolute top-0 right-0 w-fit  '>
                     <img src={AddIcon} alt="addIcon" className='mx-auto'  />  
                     <img src={XIcon} alt="XIcon" className='hidden' />  
                </div>
            </div>
        </div>
    )
}

export default FAQ