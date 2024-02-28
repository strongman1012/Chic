 
 
 const ImageCard = (props) =>{
  const {image, title, desc} = props;
  return(
    <div className="text-center mx-auto min-[1200px]:w-[400px] md:w-[300px] w-[340px]">
      <img src={image} alt = {image} className="w-full" />
      <p className="md:text-2xl mt-5 text-lg capitalize text-light font-sans111 font-semibold"> {title} </p>
      <p className="capitalize font-normal font-sans111 md:text-base text-sm text-grayC text-opacity-80"> {desc} </p>
    </div>
  )
 }

 export default ImageCard