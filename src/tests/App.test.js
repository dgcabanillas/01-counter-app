import React from 'react';
//import { render } from '@testing-library/react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import App from '../App';

describe('Pruebas en <App />', () => {
    /*
    // -- Ahora usaremos Enzyme
    test('Debe de mostrar el mensaje "Hola, Soy Diego', () => {
        const saludo = "Hola, Soy Diego";
        const { getByText } = render( <App saludo={saludo} /> );
        expect( getByText(saludo) ).toBeInTheDocument();
    });
    */

    test('Debe de mostrar <App /> de manera correcta', () => {
        const saludo = "Hola, Soy Diego";
        const wrapper = shallow( <App saludo={saludo} /> );
        expect( wrapper ).toMatchSnapshot();
    });
    test('Debe mostrar el subtitulo  enviado por props', () => {
        const saludo = 'Hola, Soy Diego';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <App 
                saludo={saludo} 
                subtitulo={subtitulo}
            /> 
        );
        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subtitulo );
    })

});