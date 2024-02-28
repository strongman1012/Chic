const Button = (props) => {
    const { label, variant = "secondary", fontWeight, textColor, size = 'normal', onChange } = props;

    const getStyle = (variant) => {
        switch (variant) {
            case 'primary':
                return 'bg-blue'
            case 'secondary':
                return 'bg-sans'
            default:
                break;
        }
    }

    const getSize = (size) => {
        switch (size) {
            case 'small':
                return 'px-[20px]';
            case 'normal':
                return 'px-[70px]';
            default:
                break;
        }
    }

    return (
        <button
            onClick={onChange}
            className={` ${getStyle(variant)} ${getSize(size)} font-${fontWeight}  text-${textColor} py-1 md:w-fit capitalize`}
        >
            {label}
        </button>

    )
};

export default Button;