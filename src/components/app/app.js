import React from "react";
import { connect } from "react-redux";

import OperatorList from "../operators-list";
import FormPage from "../form-page/form-page";

import "./app.css";


const App = ({ isHomePage }) => {
    
    if (isHomePage) {
        return <OperatorList />
    }
    
    return (
        <FormPage />
    )
};

const mapStateToProps = (state) => {
    return {
        isHomePage: state.isHomePage
    }
};

export default connect(mapStateToProps)(App);