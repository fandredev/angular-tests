import { UniqueIdService } from './unique-id.service';


describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null

  beforeEach(() => {
    service = new UniqueIdService()
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`,() => {
    const id = service.generateUniqueIdWithPrefix('app')
    expect(id.startsWith('app-')).toBeTrue()

    const x = true

    expect(true).toBeTrue() // true é igual a true. Metódo literal, apenas TRUE
    expect(x).toBe(x) // Qualquer condição que dê true no mesmo contexto de memória
    expect(true).toBeTruthy() // se der true, de boa
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should not generate duplicate IDS when called multiple times`,() => {
    const ids = new Set()
    for(let i = 0; i < 50; i++){
      ids.add(service.generateUniqueIdWithPrefix('app'))
    }
    expect(ids.size).toBe(50)
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
      should return the number of generatedIds when called`,() => {
    service.generateUniqueIdWithPrefix('app')
    service.generateUniqueIdWithPrefix('app')

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '','0','1']
      emptyValues.forEach(emptyValue =>
        expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value -> "${emptyValue}"`).toThrow()
      )
  })
})
