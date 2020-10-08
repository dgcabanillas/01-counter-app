import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => setCounter( counter + 1 );
    const handleReset = () => setCounter( value );
    const handleSubtract = () => setCounter( counter - 1 );

    return (  
        <Fragment>
            <h1> CounterApp </h1>
            <h2>{ counter }</h2>
            <button onClick={ handleSubtract }> - </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleAdd }> + </button>
        </Fragment>
    );
}
 
CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: 0
}
export default CounterApp;