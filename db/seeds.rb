# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({username: "admin", password: 123456, name: "The Adminstrator", email:"admin@admin.com", bio: "Administrator of the App" })
User.create!({username: "joeyp", password: 123456, name: "Joseph Puchalski", email:"joeypuchalski@gmail.com", bio: "Coding every day of my life" })


#JOEYP IS THE FOLLOWERID WHO IS FOLLOWING ADMIN
Follow.create!({following_id: 1, follower_id: 2})
