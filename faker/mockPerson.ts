import { PERSON_TYPES, IPerson, createPersonInstance } from '@fewo-monorepo/entities'
import { container, TYPES } from '@fewo-monorepo/inversify'

export function mockPerson(personType: PERSON_TYPES){
    const person = container.get<IPerson>(TYPES.PersonFaker)

    return createPersonInstance(
        personType,
        person.name,
        person.id,
        person.address
    )
}