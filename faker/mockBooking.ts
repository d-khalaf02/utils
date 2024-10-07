import { IBooking, TYPES } from '@fewo-monorepo/entities'
import { createBookingInstance } from '../creators/createBookingInstance'
import { container } from '../inversify/container'

export function mockBooking() {
    const booking = container.get<IBooking>(TYPES.BookingFaker)

    return createBookingInstance(
        booking.id,
        booking.services,
        booking.checkInDate,
        booking.checkOutDate
    )
}