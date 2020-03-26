

const getOperator = (state, action) => {
    const { operators } = state;
    return operators.find((operator) => operator.id === action.payload)
};

const reducer = (state, action) => {
    console.log(action);
    
    if (state === undefined) {
        return {
            ...state,
            operators: [],
            loading: true,
            selectedOperator: [],
            isHomePage: true,
            isPricePrompt: true,
            isTelPrompt: true,
            loadingConfirm: false,
            answerConfirm: false
        };
    }
    
    switch (action.type) {
        
        case "FETCH_OPERATORS_REQUEST":
            return {
                ...state,
                operators: state.operators,
                loading: true
            };
        
        case "FETCH_OPERATORS_SUCCESS":
            return {
                ...state,
                operators: action.payload,
                loading: false
            };
        
        case "FETCH_OPERATORS_FAILURE":
            return {
            };
        
        case "NEW_OPERATOR_CREATED":
            const id = Math.floor(Math.random() * 1000);
            return {
                ...state,
                operators: [
                    ...state.operators,
                    {
                        id: id,
                        title: action.payload,
                    }
                ]
            };
        
        case "OPERATOR_SELECTED_FROM_LIST":
            return {
                ...state,
                selectedOperatorId: action.payload,
                selectedOperator: getOperator(state, action),
                isHomePage: false
            };
            
        
        case "HOME_BUTTON_PRESSED":
            return {
                ...state,
                selectedOperatorId: undefined,
                selectedOperator: [],
                isHomePage: true,
                isPricePrompt: true,
                isTelPrompt: true,
                answerConfirm: false
            };
            
        
        case "SHOW_PRICE_PROMPT_AND_DISABLE_BUTTON":
            return {
                ...state,
                isPricePrompt: true
            };
        
        case "UNSHOW_PRICE_PROMPT":
            return {
                ...state,
                isPricePrompt: false
            };
            
        
        case "SHOW_TEL_PROMPT_AND_DISABLE_BUTTON":
            return {
                ...state,
                isTelPrompt: true
            };
        
        case "UNSHOW_TEL_PROMPT":
            return {
                ...state,
                isTelPrompt: false
            };
            
        
        case "FETCH_CONFIRM_REQUEST":
            return {
                ...state,
                loadingConfirm: true,
                answerConfirm: false
            };
        
        case "FETCH_CONFIRM_SUCCESS":
            return {
                ...state,
                loadingConfirm: false,
                answerConfirm: action.payload
            };
        
        case "FETCH_CONFIRM_FAILURE":
            return {
                ...state,
                loadingConfirm: false,
                answerConfirm: action.payload
            };
            
        
        default:
            return {
                ...state
            }
    }
};


export default reducer;