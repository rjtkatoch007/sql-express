const User=require('./users');
const posts=require('./posts');
const Booking = require('./bookings');
const Bus = require('./buses');

//one to many
/* user.hasMany(posts);
posts.belongsTo(user);

user.hasMany(bookings);
bookings.belongsTo(user);

Bus.hasMany(bookings);
bookings.belongsTo(Bus) */
// User -> Bookings
User.hasMany(Booking, {
    foreignKey: "userId"
});

Booking.belongsTo(User, {
    foreignKey: "userId"
});

// Bus -> Bookings
Bus.hasMany(Booking, {
    foreignKey: "busId"
});

Booking.belongsTo(Bus, {
    foreignKey: "busId"
});

module.exports={
    User,
    Bus,
    Booking
}