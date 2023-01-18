import { retornaArreglo } from '../../base-pruebas/deses-arr'

describe('Pruebas en deses', () => {
  test('debe de retornar un string y un numero ', () => {
    const [letters, numbers] = retornaArreglo()

    expect(letters).toBe('ABC')
    expect(numbers).toBe(123)

    expect(typeof letters).toBe('string')
  })
})
