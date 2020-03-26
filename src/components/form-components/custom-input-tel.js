import React, {Component} from "react";
import InputMask from "react-input-mask";


class CustomInputTel extends Component {
    
    onChangeHandler = (event) => {
        
        const { showTelPrompt, unshowTelPrompt } = this.props;
        
        const regExp = /_/;
        const value = event.target.value;
        
        if (value.match(regExp)) {
            showTelPrompt();
        } else {
            unshowTelPrompt();
        }
        
        if (!value.length) {
            showTelPrompt();
        }
    };
    
    render() {
        
        const isTelPrompt = this.props.isTelPrompt;
        
        let prompt = isTelPrompt ? <div className="form__prompt-span">Пожалуйста, введите номер телефона</div> : null;
        
        
        return (
            <div className="form__input-wrapper">
                {prompt}
                <InputMask
                    mask="+\7 999 999 99 99"
                    placeholder="номер телефона"
                    onChange={this.onChangeHandler}/>
            </div>
        )
    }
}

export default CustomInputTel;