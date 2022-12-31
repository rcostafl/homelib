# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Movie.destroy_all
Shelf.destroy_all
User.destroy_all
Director.destroy_all

puts "\n\n##############"
puts "Creating users"
User.destroy_all
emails = ["rcostafl@gmail.com", "bibianameroni@gmail.com"]
emails.each{|email|
    user = User.create!(
        email: email,
        password: 123456
    )

    puts "User #{user.email} created!"
}

puts "\n\n##############"
puts "Creating shelves"
Shelf.destroy_all
shelves = ["E1","E2","E3","E4","C", "D1","D2","D3","D4"]

shelves.each{|s|
    new_shelf = Shelf.create!(
        name: s
    )
    puts "Shelf #{new_shelf.name} created!"
}

puts "\n\n##############"
puts "Creating directors"
directors = ["Quentin tarantino","Martin Scorsese", "Steven Spielberg"]

directors.each{|d|
    new_director = Director.create!(
        name: d
    )
    puts "Director #{new_director.name} created!"
}

puts "\n\n##############"
puts "Creating Movies"
Movie.destroy_all
movies = []
m1 = {
    "title" => "o poderoso chefão", 
    "director"=> Director.all.sample(1).first,
    "image_link"=>"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
    "shelf" => Shelf.all.sample(1).first,
    "user" => User.all.sample(1).first

}

m2 = {
    "title" => "o poderoso chefão II", 
    "director"=> Director.all.sample(1).first,
    "image_link"=>"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
    "shelf" => Shelf.all.sample(1).first,
    "user" => User.all.sample(1).first
}

movies.push(m1)
movies.push(m2)

movies.each{|m|
    new_movie = Movie.create!(
        title: m["title"],
        director: m["director"],
        shelf: Shelf.all.sample(1).first,
        user: User.all.sample(1).first,
        image_link: m["image_link"]
    )
    puts "Movie #{new_movie.title} created!"
}
