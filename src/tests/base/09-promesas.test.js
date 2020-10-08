import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from '../../base/09-promesas';

describe('Pruebas con 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe Async', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            })

    });
    test('getHeroeByIdAsync debe retornar un error si heroe Async no existe', ( done ) => {

        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            })

    });
});