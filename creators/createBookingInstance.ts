import { container } from '../inversify/container'
import { TYPES, IService } from '@fewo-monorepo/entities'
import { BookingBuilder } from '../builders/BookingBuilder'

export function createBookingInstance(
    id: number,
    services: IService[],
    checkInDate: Date,
    checkOutDate: Date
){
    const bookingBuilder = container.get<BookingBuilder>(TYPES.BookingBuilder)

    return bookingBuilder
        .setId(id)
        .setServices(services)
        .setCheckInDate(checkInDate)
        .setCheckOutDate(checkOutDate)
        .build()
}