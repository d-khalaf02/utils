import { injectable } from 'inversify'

import { unknownPerson } from './PersonFaker'
import { IAddress, IAminities, IPerson, IProperty } from '@fewo-monorepo/entities'
import { useFaker } from '@fewo-monorepo/wrapper'

const faker = useFaker()

@injectable()
export class PropertyFaker implements IProperty{
    address: IAddress
    description: string
    id: number
    name: string
    aminities: IAminities[]

    owner: IPerson
    propertyManager: IPerson
    booking: IPerson[]

    constructor(){
        this.address = this.mockAddress()

        this.description = faker.lorem.paragraph(2)
        this.id = faker.number.bigInt({min: 1000000000, max: 9999999999})
        this.name = faker.person.fullName()

        this.aminities = this.mockAminities()

        this.owner = this.mockPerson()

        this.propertyManager = this.mockPerson()

        this.booking = [
            this.mockPerson(),
            this.mockPerson(),
            this.mockPerson()
        ]
    }

    private mockPerson(): IPerson{
        return {
            address: this.mockAddress(),
            id: faker.number.bigInt({min: 1000000000, max: 9999999999}),
            name: faker.person.fullName()
        }
    }

    private mockAddress(){
        return {
            city: faker.location.city(),
            street: faker.location.street(),
            zip: faker.location.zipCode('#####')
        }
    }

    private mockAminities(): IAminities[]{
        return [
            {
                name: 'Wi-Fi',
                available: true,
            },
            {
                name: 'Parking',
                available: true,
                extraCost: 20
            },
            {
                name: 'Air-Conditioner',
                available: false,
            }
        ]
    }
}

export const unknownProperty: IProperty = {
    id: 0,
    name: '',
    address: {
        street: '',
        city: '',
        zip: 11111
    },
    description: '',

    aminities: [],

    owner: unknownPerson,
    propertyManager: unknownPerson,
}