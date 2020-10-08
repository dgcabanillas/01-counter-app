import { getImagen} from '../../base/11-async-await';

describe('Pruebas con 11-async-await y fetch', () => {
    test('Debe retornar la url con la imagen', async () => {
        const url = await getImagen();
        console.log( url );
        expect( url.includes('https://') ).toBe( true );
    });
});