import { Validator } from '../index'
import { PERSON_TYPES, IAddress, Guest, Owner, PropertyManager } from '@fewo-monorepo/entities'

export function createPersonInstance(
    person: PERSON_TYPES,
    name: string,
    id: number,
    address: IAddress
){
    Validator.validate(name, id, address)

    switch(person){
        case PERSON_TYPES.PropertyManager:
            return new PropertyManager(name, id, address)
        case PERSON_TYPES.Owner:
            return new Owner(name, id, address)
        case PERSON_TYPES.Guest:
            return new Guest(name, id, address)
    }
}