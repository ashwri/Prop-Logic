import React from 'react';

//TODO: Change the buttons to PropRule Component and pass the rule name as a prop
//TODO: Will receive an onClickHandler method from Questions, pass it to PropRule

const options = () => {
    return(
        <div>
            <button> Identity </button>
            <button> Universal Bound </button>
            <button> Idempotent </button>
            <button> Commutative </button>
            <button> Associative </button>
            <button> Absorption </button>
            <button> Distributive </button>
            <button> Negation </button>
            <button> XOR </button>
            <button> Conditional </button>
            <button> Contrapositive </button>
            <button> Double Negation </button>

        </div>
    )
}

export default options;