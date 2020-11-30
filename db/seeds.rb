# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Activity.destroy_all
Comment.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456', image_url: "imageurl.google.com")

@admin1 = User.create!(username: 'admin1', email: 'admin1@email.com', password: '123456', image_url: 'imageurl.google.com')

puts "#{User.count} users created"

@activity = Activity.create!(name: 'skydiving', description: 'i would love to fall out of the sky and trust that my parachute is going to open', price: 100, location: 'New Mexico', user: @admin)

@activity1 = Activity.create!(name: 'driving a supercar', description: 'i want to drive a super fast car', price: 1000, location: 'Las Vegas', user: @admin1)


puts "#{Activity.count} activities created"

@comment1 = Comment.create!(comment: 'this is a test comment', user: @admin, activity: @activity )
@comment2 = Comment.create!(comment: 'this is a test comment number 2', user: @admin1, activity: @activity1)

puts "#{Comment.count} comments created"

