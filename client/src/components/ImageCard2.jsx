

const ImageCard2 = (props) => {
    const { image, title, desc } = props;
    return (
        <div className="relative  mx-auto w-full mt-5 md:mt-0 text-center">
            <img src={image} alt={image} className="w-fit md:mx-0 mx-auto" />
            {/* <div className="absolute"> */}
            <div >
                <p className="md:text-2xl mt-6 text-lg capitalize text-light font-sans111 font-semibold"> {title} </p>
                <p className="capitalize font-normal font-sans111 md:text-base text-sm text-grayC text-opacity-80"> {desc} </p>

            </div>
        </div>
    )
}

export default ImageCard2