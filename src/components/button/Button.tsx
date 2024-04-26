
import React from "react";
import cart from '../../assets/buttonCart.png';

interface ButtonProps {
    onButtonClick?: () => void;
    value: string;
    classname: string;
    
}

const Button: React.FC<ButtonProps> = ({ onButtonClick,value,classname }) => {
    return (
        <div className={classname} onClick={onButtonClick}>
            <img src={cart} alt="" />
            <p>{value}</p>
        </div>
    );
};

export default Button;
