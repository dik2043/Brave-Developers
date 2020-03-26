import React from "react";

import './spinner.css';


const Spinner = () => {
    return (
        <section className="spinner">
            <div className="cssload-square">
                <div className="cssload-square-part cssload-square-green" />
                <div className="cssload-square-part cssload-square-pink" />
                <div className="cssload-square-blend" />
            </div>
        </section>
    )
};

export default Spinner;