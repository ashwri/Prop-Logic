import React from 'react';
import PropRule from '../PropRule/PropRule'

//TODO: Will receive an onClickHandler method from Questions, pass it to PropRule

const options = (props) => {
    return (
        <div>
            <PropRule
                rule="Identity"
                ruleSelection={props.choiceSelection}
                id="id"
            />
            <PropRule
                rule="Universal Bound"
                ruleSelection={props.choiceSelection}
                id="ub"
            />
            <PropRule
                rule="Idempotent"
                ruleSelection={props.choiceSelection}
                id="idem"
            />
            <PropRule
                rule="Commutative"
                ruleSelection={props.choiceSelection}
                id="comm"
            />
            <PropRule
                rule="Associative"
                ruleSelection={props.choiceSelection}
                id="ass"
            />
            <PropRule
                rule="Absorption"
                ruleSelection={props.choiceSelection}
                id="abs"
            />
            <PropRule
                rule="Distributive"
                ruleSelection={props.choiceSelection}
                id="dist"
            />
            <PropRule
                rule="Negation"
                ruleSelection={props.choiceSelection}
                id="neg"
            />
            <PropRule
                rule="XOR"
                ruleSelection={props.choiceSelection}
                id="xor"
            />
            <PropRule
                rule="Conditional"
                ruleSelection={props.choiceSelection}
                id="cond"
            />
            <PropRule
                rule="Contrapositive"
                ruleSelection={props.choiceSelection}
                id="contr"
            />
            <PropRule
                rule="Double Negation"
                ruleSelection={props.choiceSelection}
                id="dneg"
            />
        </div>
    )
}

export default options;