import { Container } from 'inversify'
import { IPerson, TYPES } from '@fewo-monorepo/entities'
import { BookingBuilder } from '../builders/BookingBuilder'
import { PropertyBuilder } from '../builders/PropertyBuilder'

import { BookingFaker } from '../faker/BookingFaker'
import { PersonFaker } from '../faker/PersonFaker'
import { PropertyFaker } from '../faker/PropertyFaker'


const container = new Container()
container.bind<IPerson>(TYPES.PersonFaker).to(PersonFaker)
container.bind<PropertyFaker>(TYPES.PropertyFaker).to(PropertyFaker)
container.bind<BookingFaker>(TYPES.BookingFaker).to(BookingFaker)


container.bind<PropertyBuilder>(TYPES.PropertyBuilder).to(PropertyBuilder)
container.bind<BookingBuilder>(TYPES.BookingBuilder).to(BookingBuilder)


export { container }