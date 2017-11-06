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
  first_name: "Good",
  last_name: "Bye",
  username: "goodbye",
  email: "good@bye.com",
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
  name: "Boston Yoga Group"
)

group_2 = Group.create!(
  name: "Northeastern 2013"
)

group_3 = Group.create!(
  name: "Launch Academy 18"
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

event_1 = Event.create!(
  name: "Kung Fu Tea Malden",
  address: "33 Main Street, Malden, MA, 02148",
  meal_type: "Coffee/Tea",
  time: "03:30:00",
  group: group_3,
  user: user_1
)

event_2 = Event.create!(
  name: "Mystic Station Melrose",
  address: "100 main street, Melrose, MA, 02123",
  meal_type: "Lunch",
  time: "12:00:00",
  group: group_2,
  user: user_2
)

event_3 = Event.create!(
  name: "Sweetgreen Summer Street",
  address: "52 Washington Street, Boston, MA, 02331",
  meal_type: "Lunch",
  time: "11:30:00",
  group: group_1,
  user: user_1
)

event_4 = Event.create!(
  name: "Chipotle Downtown Crossing",
  address: "2 Potato Street, Boston, MA, 02458",
  meal_type: "Dinner",
  time: "18:30:00",
  group: group_3,
  user: user_3
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
