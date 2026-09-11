const user=require('./users');
const posts=require('./posts');

//one to many
user.hasMany(posts);
posts.belongsTo(user);

module.exports={
    user,
    posts
}