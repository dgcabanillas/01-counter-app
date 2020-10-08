describe('Pruebas en el archivo demo.test.js', () => {
    test('debe ser iguales las cadenas de texto', () => {
        const foo = "hola mundo";
        const bar = "hola mundo";
        expect( foo ).toBe( bar );
    });   
});


