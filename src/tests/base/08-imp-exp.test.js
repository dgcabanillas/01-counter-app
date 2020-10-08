import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('Debe devolver el heroe correcto segun indice', () => {
        const testId = 2;
        const heroe = getHeroeById( testId );
        const heroeData = heroes.find( h => h.id === testId  );

        expect( heroe ).toEqual( heroeData );
    });
    test('Debe retornar undefined si heroe no existe', () => {
        const testId = 10;
        const heroe = getHeroeById( testId );
        expect( heroe ).toBe( undefined );
    });
    test('Debe devolver un arreglo con los heroes de DC ( toEqual )', () => {
        const owner = 'DC';
        const DCHeroesExpect = heroes.filter( h => h.owner === owner );
        const DCHeroes = getHeroesByOwner( owner );
        expect( DCHeroes ).toEqual( DCHeroesExpect );
    });
    test('Debe devolver un arreglo con los heroes de Marvel ( toBe, length )', () => {
        const owner = 'Marvel';
        const MarvelHeroesExpect = heroes.filter( h => h.owner === owner );
        const MarvelHeroes = getHeroesByOwner( owner );
        expect( MarvelHeroes ).toEqual( MarvelHeroesExpect );
        expect( MarvelHeroes.length ).toBe( 2 );
    });
});
