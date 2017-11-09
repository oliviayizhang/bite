30.times do
  User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.user_name,
    email: Faker::Internet.email,
    avatar: Faker::Avatar.image,
    password: Faker::Internet.password
  )
end

# Two Test users
user_1 = User.create!(
  first_name: "Alison",
  last_name: "Butler",
  username: "AlisonButler",
  email: "Alison@Butler.com",
  password: 1234567,
  avatar: Faker::Avatar.image
)

user_2 = User.create!(
  first_name: "Brian",
  last_name: "Hart",
  username: "BrianHart",
  email: "Brian@Hart.com",
  password: 1234567,
  avatar: Faker::Avatar.image
)

# Created 10 Groups
group_1 = Group.create!(
  name: "Melrose Neighborhood"
)

group_2 = Group.create!(
  name: "Northeastern 2013"
)

group_3 = Group.create!(
  name: "Launch Academy 18"
)

group_4 = Group.create!(
  name: "Zelda!"
)

group_5 = Group.create!(
  name: "Boston Ruby Group"
)

group_6 = Group.create!(
  name: "Code Ninjas"
)

group_7 = Group.create!(
  name: "Just Talk"
)

group_8 = Group.create!(
  name: "My Primary School"
)

group_9 = Group.create!(
  name: "Bees Lovers"
)

group_10 = Group.create!(
  name: "Family"
)

# Membership for test users
Membership.create!(
  user: user_1,
  group: group_1
)

Membership.create!(
  user: user_1,
  group: group_2
)
Membership.create!(
  user: user_1,
  group: group_3
)
Membership.create!(
  user: user_1,
  group: group_4
)
Membership.create!(
  user: user_1,
  group: group_5
)
Membership.create!(
  user: user_1,
  group: group_6
)
Membership.create!(
  user: user_1,
  group: group_7
)

Membership.create!(
  user: user_1,
  group: group_8
)

Membership.create!(
  user: user_1,
  group: group_9
)

Membership.create!(
  user: user_1,
  group: group_10
)

Membership.create!(
  user: user_2,
  group: group_10
)

Membership.create!(
  user: user_2,
  group: group_3
)

Membership.create!(
  user: user_2,
  group: group_5
)

Membership.create!(
  user: user_2,
  group: group_7
)

Membership.create!(
  user: user_2,
  group: group_9
)
Membership.create!(
  user: user_2,
  group: group_1
)

100.times do
  Membership.create!(
    user: User.all.sample,
    group: Group.all.sample
  )
end

event_1 = Event.create!(
  name: "Luke's Lobster",
  address: "290 Washington St., Boston, MA 02108",
  meal_type: "Lunch",
  time: "12:00",
  group: Group.all.sample,
  user: User.all.sample,
  latitude: 42.357389,
  longitude: -71.058161
)

event_2 = Event.create!(
  name: "Kung Fu Tea",
  address: "334 Massachusetts Ave, Boston, MA 02115",
  meal_type: "Coffee/Dessert",
  time: "1:30",
  group: Group.all.sample,
  user: User.all.sample,
  latitude: 42.342594,
  longitude: -71.084173
)

event_3 = Event.create!(
  name: "Sweetgreen",
  address: "13 School St, Boston, MA 02108",
  meal_type: "Lunch",
  time: "11:30",
  group: Group.all.sample,
  user: User.all.sample,
  latitude: 42.357628,
  longitude: -71.058777
)

event_4 = Event.create!(
  name: "Chipotle",
  address: "276 Elm St, Somerville, MA 02144",
  meal_type: "Dinner",
  time: "18:30",
  group: Group.all.sample,
  user: User.all.sample,
  latitude: 42.357628,
  longitude: -71.122571
)

50.times do
  Rsvp.create!(
    user: User.all.sample,
    event: Event.all.sample
  )
end
