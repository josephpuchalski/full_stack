# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!({username: "admin", password: 123456, name: "The Adminstrator", email:"admin@admin.com", bio: "Administrator of the App" profile_image: "http://s3-us-east-2.amazonaws.com/travelscape-dev/users/profile_images/000/000/001/original/logo.jpg?1498592411"})
User.create!({username: "joey p", password: 123456, name: "Joseph Puchalski", email:"joeypuchalski@gmail.com", bio: "Coding every day of my life", profile_image: "http://s3-us-east-2.amazonaws.com/travelscape-dev/posts/images/000/000/069/original/3.jpg?1498749562" })
User.create!({username: "billy", password: 123456, name: "Joseph Puchalski", email:"bill@gmail.com", bio: "Spending time traveling and enjoying life", profile_image: "http://s3-us-east-2.amazonaws.com/travelscape-dev/posts/images/000/000/032/original/2.jpg?1498489933" })
