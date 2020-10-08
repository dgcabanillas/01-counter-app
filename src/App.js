import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = ({ saludo, subtitulo }) => {
    return (  
        <Fragment>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </Fragment>
    );
}
 
App.propTypes = {
    saludo: PropTypes.string.isRequired
}
App.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default App;