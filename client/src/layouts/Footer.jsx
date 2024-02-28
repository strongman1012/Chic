import facebookIcon from '../assets/facebook-logo-button.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/vimeo-social-logo.svg';
import combineIcon from '../assets/Combined.svg';

const Footer = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto md:flex  justify-around pt-[58px] pb-[51px] p-6 '>
        <div className='md:w-[423px] w-full'>
          <p className="uppercase font-extrabold  text-md font-cursive_head">Chic Aesthetics London™</p>
          <p className="mt-5 capitalize  md:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut fugiat nulla pariat</p>
        </div>
        <div className='mt-11   flex'>
          <img src={facebookIcon} alt="facebookIcon" className='mr-[27px]' />
          <img src={twitterIcon} alt="twitterIcon" className='mr-[27px]' />
          <img src={instagramIcon} alt="instagramIconn" className='mr-[27px]' />
          <img src={combineIcon} alt="combineIcon" className='mr-[27px]' />
        </div>
      </div>
    </>
  )
};

export default Footer;
