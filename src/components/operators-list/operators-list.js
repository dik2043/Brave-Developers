import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import compose from "../../utils";     
import AddingForm from "../adding-form";
import { fetchOperators, operatorSelected, newOperatorCreated } from "../../actions";
import WithMobileService from "../hoc/with-mobile-service";
import OperatorItem from "../operators-item";
import Spinner from "../spinner";

import "./operators-list.css";


const OperatorList = ({ operators, onItemClick, newOperatorCreated }) => {
    
    return (
        <Fragment>
            <ul className="operator-list">
                {
                    operators.map((item) => {
                        return (
                            <li key={item.id}>
                                <OperatorItem 
                                    item={item}
                                    onItemClick={() => onItemClick(item.id)}/>
                            </li>
                        )
                    })
                }
            </ul>
            <AddingForm newOperatorCreated={newOperatorCreated}/>
        </Fragment>
    )
};


class OperatorListContainer extends Component {
    
    componentDidMount() {
        this.props.fetchOperators();
    }
    
    render() {
    
        const { list, loading, onOperatorSelected, newOperatorCreated } = this.props;
    
        if (loading) {
            return <Spinner/>
        }
        
        return (
            <OperatorList 
                operators={list}
                onItemClick={onOperatorSelected}
                newOperatorCreated={newOperatorCreated}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.operators,
        loading: state.loading,
        selectedOperatorId: state.selectedOperatorId
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    const { mobileService } = ownProps;
    
    return {
        fetchOperators: fetchOperators(mobileService, dispatch),
        onOperatorSelected: (id) => dispatch(operatorSelected(id)),
        newOperatorCreated: (name) => dispatch(newOperatorCreated(name))
    }
};


export default compose(
    WithMobileService(),
    connect(mapStateToProps, mapDispatchToProps)
)(OperatorListContainer)