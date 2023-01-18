import { getSaludo } from '../../base-pruebas/template-string'

describe('Pruebas en template-string', () => {
  test('getSaludo debe de retornar "Hola Sergio" ', () => {
    const name = 'Sergio'
    const message = getSaludo(name)
    expect(message).toBe(`Hola ${name}`)
  })
})
