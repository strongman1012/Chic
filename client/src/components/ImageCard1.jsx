
const ImageCard1 = (props) => {
    const {image, title} = props
    return(
        <div className="mt-5 group text-center md:py-8 py-6 md:px-10 px-7 border-[1px] border-grayC hover:bg-sans md:w-[190px] w-[160px]">
            <img src={image} alt={image} className="mx-auto "  />
            <p className="md:mt-5 mt-4 md:text-lg text-[15px] capitalize font-medium font-sans111 group-hover:text-black text-grayC text-opacity-80"> {title} </p>
        </div>
    )
}

export default ImageCard1;