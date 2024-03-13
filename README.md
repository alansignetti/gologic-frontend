
### Booking Platform

Design a booking platform for users to rent a room. Users should see a list of rooms available
for rent and be able to click into them to see details about that room. A room at a minimum
should have the following details:

* Title
* Images
* Price
* Description
* Address
* Capacity of room

Users should then be able book that room using their email address, the dates they require and
how many people will be staying. They should not be able to book a room on a date that has
already been booked or doesn't have the capacity for the amount of people they require.

<!-- - guests in filters  -->
<!-- - checkin and checkout date pickers in home component -->
<!-- - create bookingRequest -->
<!-- - receive bookingRequests, and filter by date -->

- should throw an error if already exists a bookingRequest with the same roomId and startdate or endate
- should throw an error  if doesn't have the capacity for the amount of people they require
