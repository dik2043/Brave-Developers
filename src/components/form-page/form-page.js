import React from "react";
import { connect } from "react-redux";

import compose from "../../utils";
import WithMobileService from "../hoc";
import Spinner from "../spinner";
import Answer from "../form-components/answer";

import { 
    homeButtonPressed,
    showPricePrompt,
    unshowPricePrompt,
    showTelPrompt,
    unshowTelPrompt,
    fetchSubmitForm
    
} from "../../actions";

import {
    CustomButton,
    CustomInputPrice,
    CustomInputTel
} from "../form-components"

import "./form-page.css";


const FormPage = (props) => {
    
    const { selectedOperator, homeButtonPressed, isPricePrompt, isTelPrompt, answerConfirm, loadingConfirm } = props;
    const isButtonDisabled = isPricePrompt || isTelPrompt;
    
    const answer = answerConfirm ? <Answer answerConfirm={answerConfirm} /> : null;    
    const button = loadingConfirm ? <Spinner /> : <CustomButton {...props} isButtonDisabled={isButtonDisabled} />;
    
    let content;
    if (selectedOperator.coverImage) {
        content = (
            <img src={selectedOperator.coverImage}
                 alt="operators-logo"/>
        )
    } else {
        content = <h3>{selectedOperator.title}</h3>
    }
    
    return (
        <div className="form__wrapper">
            <button 
                className="form__home-btn"
                onClick={homeButtonPressed} />
            <div className="item__wrapper">
                {content}
            </div>
            <form className="form">
                <CustomInputTel {...props}/>
                <CustomInputPrice {...props}/>
            </form>
            {answer}
            {button}
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        selectedOperator: state.selectedOperator,
        disableSubmitButton: state.disableSubmitButton,
        isPricePrompt: state.isPricePrompt,
        isTelPrompt: state.isTelPrompt,
        answerConfirm: state.answerConfirm,
        loadingConfirm: state.loadingConfirm
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    const { mobileService } = ownProps;
    return {
        homeButtonPressed: () => dispatch(homeButtonPressed()),
        showPricePrompt: () => dispatch(showPricePrompt()),
        unshowPricePrompt: () => dispatch(unshowPricePrompt()),
        showTelPrompt: () => dispatch(showTelPrompt()),
        unshowTelPrompt: () => dispatch(unshowTelPrompt()),
        fetchSubmitForm: () => fetchSubmitForm(mobileService, dispatch)
    }
};


export default compose(
    WithMobileService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FormPage);