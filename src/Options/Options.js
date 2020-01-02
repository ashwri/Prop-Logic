import React from 'react';
import PropRule from '../PropRule/PropRule'

//TODO: Will receive an onClickHandler method from Questions, pass it to PropRule

const options = (props) => {
    return (
        <div>
            <PropRule
                rule="Identity"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Universal Bound"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Idempotent"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Commutative"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Associative"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Commutative"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Associative"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Absorption"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Distributive"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Negation"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="XOR"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Conditional"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Contrapositive"
                ruleSelection={props.choiceSelection}
            />
            <PropRule
                rule="Double Negation"
                ruleSelection={props.choiceSelection}
            />
        </div>
    )
}

export default options;