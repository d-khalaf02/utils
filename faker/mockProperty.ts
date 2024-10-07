import { IProperty, TYPES } from '@fewo-monorepo/entities'
import { container} from '../inversify/container'
import { createPropertyInstance } from '../creators/createPropertyInstance'

export function mockProperty(){
    const propertyFaker = container.get<IProperty>(TYPES.PropertyFaker)
    return createPropertyInstance(
        propertyFaker.id,
        propertyFaker.name,
        propertyFaker.description,
        propertyFaker.address,
        propertyFaker.aminities
    )
}