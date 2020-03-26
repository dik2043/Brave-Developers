import React from "react";


const CustomButton = ({ isButtonDisabled, fetchSubmitForm }) => {
    return (
        <button
            onClick={fetchSubmitForm()}
            disabled={isButtonDisabled}
            className="item__btn">
            Оплатить
        </button>
    )
};

export default CustomButton;