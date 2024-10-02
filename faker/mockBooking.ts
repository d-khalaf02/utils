import { createBookingInstance, IBooking } from '@fewo-monorepo/entities'
import { container, TYPES } from '@fewo-monorepo/inversify'

export function mockBooking() {
    const booking = container.get<IBooking>(TYPES.BookingFaker)

    return createBookingInstance(
        booking.id,
        booking.services,
        booking.checkInDate,
        booking.checkOutDate
    )
}