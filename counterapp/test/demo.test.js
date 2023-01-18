describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba no debe fallar', () => {
    // Inicializacion
    const message1 = 'Hola Mundo'
    // Estimulo
    const message2 = message1.trim()
    // Obvservar el comportamiento... esperado
    // expect(message1).toBe(message2)
    expect(message1).toBe(message2)
  })
})
