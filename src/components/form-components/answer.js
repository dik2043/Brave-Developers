import React from "react";


const Answer = ({ answerConfirm }) => {
    const className = answerConfirm.type === "success" ? "answer success" : "answer failure";
    
    return <div className={className}>{answerConfirm.message}</div>
};

export default Answer;