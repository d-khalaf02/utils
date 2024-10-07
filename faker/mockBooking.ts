import { useFaker } from '@fewo-monorepo/wrapper'
import { createBookingInstance } from '../creators/createBookingInstance'

const faker = useFaker()
export function mockBooking() {
    return createBookingInstance(
        2342342345345,
        [
            {
                name: 'Daliy Housekeeping',
                description: 'Daily cleaning of the apartment including towel and bed linen replacement.',
                price: 50
            },
            {
                name: 'Airport Pickup',
                description: 'Pickup from the airport to the apartment.',
                price: 30
            },
            {
                name: "Grocery Delivery",
                description: "Order groceries to be delivered to your apartment.",
                price: 15,
                itemslist: ["Milk", "Eggs", "Bread", "Cheese"],
                deliveryTime: "09:00 AM"
            },
            {
                name: 'Pet Sitting',
                description: 'Pet sitting service for your cats and dogs.',
                price: 40,
                pets: ['Dog', 'Cat']
            },
            {
                name: 'Maintaince Request',
                description: 'Maintaince service for your apartment',
                issueTypes: ['Plumping', 'Electrical', 'Heating']
            }
        ],
        faker.date.past(),
        faker.date.soon())
}