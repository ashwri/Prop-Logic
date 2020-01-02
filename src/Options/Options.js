import React from 'react';
import PropRule from '../PropRule/PropRule'

//TODO: Change the buttons to PropRule Component and pass the rule name as a prop
//TODO: Will receive an onClickHandler method from Questions, pass it to PropRule

const options = () => {
    return(
        <div>
            <PropRule rule = "Identity"/>
            <PropRule rule = "Universal Bound"/>
            <PropRule rule = "Idempotent"/>
            <PropRule rule = "Commutative"/>
            <PropRule rule = "Associative"/>
            <PropRule rule = "Commutative"/>
            <PropRule rule = "Associative"/>
            <PropRule rule = "Absorption"/>
            <PropRule rule = "Distributive"/>
            <PropRule rule = "Negation"/>
            <PropRule rule = "XOR"/>
            <PropRule rule = "Conditional"/>
            <PropRule rule = "Contrapositive"/>
            <PropRule rule = "Double Negation"/>
        </div>
    )
}

export default options;