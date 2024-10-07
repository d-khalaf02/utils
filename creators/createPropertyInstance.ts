import { container } from '../inversify/container'
import type { PropertyBuilder } from '../builders/PropertyBuilder'
import { Validator } from '../validation/Validator'

import { IAminities, IAddress, TYPES} from '@fewo-monorepo/entities'

export function createPropertyInstance(
    id: number,
    name: string,
    description: string,
    address: IAddress,
    aminities: IAminities[]
){
    Validator.validate(name, id, address)
    const propertyBuilder = container.get<PropertyBuilder>(TYPES.PropertyBuilder)

    return propertyBuilder
        .setId(id)
        .setName(name)
        .setDescription(description)
        .setAddress(address)
        .setAminities(aminities)
        .build()
}