import React, {Component} from "react";


class CustomInputPrice extends Component {
    
    onChangeHandler = (event) => {
        
        const { showPricePrompt, unshowPricePrompt } = this.props;
        
        const regExp = /^\d+$/;
        const value = event.target.value;
        
        if (value > 1000 || value < 1 || !value.match(regExp)) {
            showPricePrompt();
        } else {
            unshowPricePrompt();
        }
        
        if (!value.length) {
            unshowPricePrompt();
        }
    };
    
    render() {
        
        const isPricePrompt = this.props.isPricePrompt;
        
        let prompt = isPricePrompt ? <div className="form__prompt-span">Пожалуйста, введите сумму от 1 до 1000 руб</div> : null;
        
        
        return (
            <div className="form__input-wrapper">
                {prompt}
                <input
                    placeholder="от 1 до 1000 руб"
                    onChange={this.onChangeHandler}/>
            </div>
        )
    }
}

export default CustomInputPrice;