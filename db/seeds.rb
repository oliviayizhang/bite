user_1 = User.create!(
  id: 1,
  first_name: "Smelly",
  last_name: "Dog",
  username: "smellydog",
  email: "smelly@dog.com",
  password: 1234567
)

user_2 = User.create!(
  id: 2,
  first_name: "Doctor",
  last_name: "Who",
  username: "doctorwho",
  email: "doctor@who.com",
  password: 1234567
)

user_3 = User.create!(
  id: 3,
  first_name: "Super",
  last_name: "Mario",
  username: "supermario",
  email: "super@mario.com",
  password: 1234567
)

user_4 = User.create!(
  id: 4,
  first_name: "Test",
  last_name: "User",
  username: "testuser",
  email: "test@user.com",
  password: 1234567
)

user_5 = User.create!(
  id: 5,
  first_name: "Olivia",
  last_name: "Zhang",
  username: "oliviazhang",
  email: "olivia@zhang.com",
  password: 1234567
)

group_1 = Group.create!(
  name: "My Neighborhood"
)

group_2 = Group.create!(
  name: "Northeastern"
)

group_3 = Group.create!(
  name: "Launch Academy 18"
)

group_4 = Group.create!(
  name: "Colleagues"
)

membership_1 = Membership.create!(
  user: user_1,
  group: group_1
)

membership_2 = Membership.create!(
  user: user_2,
  group: group_1
)

membership_3 = Membership.create!(
  user: user_3,
  group: group_1
)

membership_4 = Membership.create!(
  user: user_1,
  group: group_2
)

membership_4 = Membership.create!(
  user: user_1,
  group: group_3
)


event_1 = Event.create!(
  name: "Luke's Lobster",
  address: "290 Washington St., Boston, MA 02108",
  meal_type: "Lunch",
  time: "12:00",
  group: group_3,
  user: user_1,
  latitude: 42.357389,
  longitude: -71.058161
)

event_2 = Event.create!(
  name: "Kung Fu Tea",
  address: "334 Massachusetts Ave, Boston, MA 02115",
  meal_type: "Coffee/Dessert",
  time: "1:30",
  group: group_2,
  user: user_2,
  latitude: 42.342594,
  longitude: -71.084173
)

event_3 = Event.create!(
  name: "Sweetgreen",
  address: "13 School St, Boston, MA 02108",
  meal_type: "Lunch",
  time: "11:30:00",
  group: group_1,
  user: user_1,
  latitude: 42.357628,
  longitude: -71.058777
)

event_4 = Event.create!(
  name: "Chipotle",
  address: "276 Elm St, Somerville, MA 02144",
  meal_type: "Dinner",
  time: "18:30:00",
  group: group_3,
  user: user_3,
  latitude: 42.357628,
  longitude: -71.122571
)

rsvp_1 = Rsvp.create!(
  user: user_2,
  event: event_3
)

rsvp_2 = Rsvp.create!(
  user: user_1,
  event: event_2
)

rsvp_3 = Rsvp.create!(
  user: user_1,
  event: event_3
)

rsvp_4 = Rsvp.create!(
  user: user_3,
  event: event_2
)
