import { getUser, getUsuarioActivo } from '../../base-pruebas/funciones'

describe('Pruebas en funciones', () => {
  test('getUser debe de retornar un objeto ', () => {
    const testUser = {
      uid: '123ABC',
      username: 'El_Leo012'
    }
    const user = getUser()

    expect(testUser).toEqual(user)
  })

  test('getUser debe de retornar un objeto ', () => {
    const name = 'Sergio01'
    const testUser = {
      uid: '123DFE',
      username: name
    }
    const user = getUsuarioActivo(name)

    expect(testUser).toEqual(user)
  })
})
