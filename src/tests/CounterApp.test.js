import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('Debe mostrar el componente <CounterApp /> de manera correcta', () => {
        const value = wrapper.find('h2').text();
        expect( wrapper ).toMatchSnapshot();
        expect( value ).toBe( "0" );
    });

    test('Debe mostrar el componente <CounterApp /> de manera correcta con parametro', () => {
        wrapper = shallow( <CounterApp value = { 100 } /> );
        const counterText = wrapper.find('h2').text();
        expect( wrapper ).toMatchSnapshot();
        expect( counterText ).toBe( "100" );
    });

    test('Debe decrementar con el boton -1 btn[0]', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect( counterText ).toBe("-1"); 
    });

    test('Debe de incrementar con el boton +1 btn[2]', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect( counterText ).toBe("1"); 
    });

    test('Debe de resetear el valor a 0 con el boton reset btn[1]', () => {
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect( counterText ).toBe("0"); 
    });

    test('Debe de resetear el valor al valor por defecto con el boton reset btn[1]', () => {
        wrapper = shallow( <CounterApp value={200} /> );
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect( counterText ).toBe("200"); 
    });

});