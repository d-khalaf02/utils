import { IProperty, createPropertyInstance } from '@fewo-monorepo/entities'
import { container, TYPES } from '@fewo-monorepo/inversify'

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