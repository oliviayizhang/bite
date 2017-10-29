user_1 = User.create(
  id: 2,
  first_name: "Little",
  last_name: "Sheep",
  username: "littlesheep",
  email: "little@sheep.com",
  password: 1234567
)

user_2 = User.create(
  id: 3,
  first_name: "Ash",
  last_name: "Arney",
  username: "asharney",
  email: "ash@arney.com",
  password: 1234567
)

user_3 = User.create(
  id: 4,
  first_name: "Super",
  last_name: "Trans",
  username: "supertrans",
  email: "super@trans.com",
  password: 1234567
)

group_1 = Group.create(
  name: "Super Man"
)

group_2 = Group.create(
  name: "Donald Duck"
)

group_3 = Group.create(
  name: "Burger King"
)

membership_1 = Membership.create(
  user: user_1,
  group: group_1
)

membership_2 = Membership.create(
  user: user_2,
  group: group_3
)

membership_3 = Membership.create(
  user: user_3,
  group: group_3
)

membership_4 = Membership.create(
  user: user_1,
  group: group_2
)

event_1 = Event.create(
  location: "Kung Fu Tea",
  meal_type: "Coffee/Tea",
  time: "03:30:00",
  group: group_3
)

event_2 = Event.create(
  location: "Mystic Station",
  meal_type: "Lunch",
  time: "12:00:00",
  group: group_2
)

event_3 = Event.create(
  location: "Sweetgreen",
  meal_type: "Lunch",
  time: "11:30:00",
  group: group_1
)

event_4 = Event.create(
  location: "Chipotle",
  meal_type: "Dinner",
  time: "18:30:00",
  group: group_3
)

rsvp_1 = Rsvp.create(
  user: user_2,
  event: event_3
)

rsvp_2 = Rsvp.create(
  user: user_1,
  event: event_2
)

rsvp_3 = Rsvp.create(
  user: user_1,
  event: event_3
)

rsvp_4 = Rsvp.create(
  user: user_3,
  event: event_1
)
