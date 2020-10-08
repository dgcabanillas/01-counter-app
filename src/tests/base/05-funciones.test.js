import '@testing-library/jest-dom';
import { getUser, getActiveUser } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );
    });
    test('getActiveUser debe retornar un objeto con nickname dado en parametro', () => {
        const nick = "Diego";
        const userTest = {
            uid: 'ABC567',
            username: nick
        };
        const user = getActiveUser( nick );
        expect( user ).toEqual( userTest );
    });
})