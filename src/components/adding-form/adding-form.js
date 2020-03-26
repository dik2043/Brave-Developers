import React, { Component } from "react";

import "./adding-form.css"


class AddingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { newOperatorCreated } = this.props;
        if (this.state) {
            newOperatorCreated(this.state.value);
            this.setState({value: ''})
        }
    }
    
    render() {
        const disableAdding = !this.state.value;
        
        return (
            <form className="adding-form form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input disabled={disableAdding} className="adding-form__submit" type="submit" value="Добавить оператора" />
            </form>
        );
    }
}

export default AddingForm;