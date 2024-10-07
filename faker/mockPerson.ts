import { PERSON_TYPES, IPerson, TYPES } from '@fewo-monorepo/entities'
import { container } from '../inversify/container'
import { createPersonInstance } from '../creators/createPersonInstance'

export function mockPerson(personType: PERSON_TYPES){
    const person = container.get<IPerson>(TYPES.PersonFaker)

    return createPersonInstance(
        personType,
        person.name,
        person.id,
        person.address
    )
}