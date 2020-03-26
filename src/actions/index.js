

const operatorsLoaded = (newOperators) => {
    return {
        type: "FETCH_OPERATORS_SUCCESS",
        payload: newOperators
    }
};
const operatorsRequested = () => {
    return {
        type: "FETCH_OPERATORS_REQUEST"
    }
};


const fetchOperators = (mobileService, dispatch) => () => {
    dispatch(operatorsRequested());
    mobileService.getOperators()
        .then((data) => {
            dispatch(operatorsLoaded(data))
        })
};


const operatorSelected = (id) => {
    return {
        type: "OPERATOR_SELECTED_FROM_LIST",
        payload: id
    }
};

const newOperatorCreated = (name) => {
    return {
        type: "NEW_OPERATOR_CREATED",
        payload: name
    }
};


const homeButtonPressed = () => {
    return {
        type: "HOME_BUTTON_PRESSED"
    }
};


const showPricePrompt = () => {
    return {
        type: "SHOW_PRICE_PROMPT_AND_DISABLE_BUTTON"
    }
};

const unshowPricePrompt = () => {
    return {
        type: "UNSHOW_PRICE_PROMPT"
    }
};


const showTelPrompt = () => {
    return {
        type: "SHOW_TEL_PROMPT_AND_DISABLE_BUTTON"
    }
};

const unshowTelPrompt = () => {
    return {
        type: "UNSHOW_TEL_PROMPT"
    }
};



const fetchSubmitForm = (mobileService, dispatch) => () => {
    dispatch(submitForm());
    mobileService.getAnswer()
        .then((data) => dispatch(submitFormSuccess(data)))
        .catch((error) => dispatch(submitFormFailure(error)));
};

const submitForm = () => {
    return {
        type: "FETCH_CONFIRM_REQUEST"
    }
};

const submitFormSuccess = (message) => {
    return {
        type: "FETCH_CONFIRM_SUCCESS",
        payload: {
            type: 'success',
            message: message
        }
    }
};

const submitFormFailure = (message) => {
    return {
        type: "FETCH_CONFIRM_FAILURE",
        payload: message
    }
};

export {
    operatorsLoaded,
    operatorsRequested,
    fetchOperators,
    operatorSelected,
    homeButtonPressed,
    showPricePrompt,
    unshowPricePrompt,
    showTelPrompt,
    unshowTelPrompt,
    fetchSubmitForm,
    newOperatorCreated
}