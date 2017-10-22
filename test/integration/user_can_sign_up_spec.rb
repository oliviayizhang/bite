require "test_helper"

#As a user, I want to create an account,
#so I can use the app to connect with my friends

feature 'user can sign up' do
  scenario "specifying valid and required information" do

    visit root_path
    click_link "Sign Up"

    fill_in 'First Name', with: "John"
    fill_in 'Last Name', with: "Smith"
    fill_in 'user_username', with: "johnsmith17"
    fill_in 'Email', with: "john@smith.com"
    fill_in 'Password', with: "johnsmith2017"
    fill_in 'Confirm Password', with: "johnsmith2017"

    click_button "Submit"
    expect(page).to have_content "signed up successfully"
    expect(page).to have_content "Sign Out"

  end

  scenario "required information is not supplied" do
  end

  scenario "password cofirmation doesn't match" do
  end
end
