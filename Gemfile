source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.4'
gem 'pg'
gem 'puma', '~> 3.7'
gem 'redis', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
gem 'webpacker'
gem 'devise'
gem 'devise_invitable'
gem 'carrierwave', '1.2.0'
gem 'mini_magick'
gem 'fog'
gem 'figaro'
gem 'faker'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'shoulda'
  gem 'launchy'
  gem 'factory_girl'
  gem 'valid_attribute'
  gem 'shoulda-matchers', require: false
  gem "dotenv-rails"
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

end


gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
