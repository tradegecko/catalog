source 'https://rubygems.org'
ruby '2.6.6'

# TODO: Remove with Bundler 2
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails'
gem 'pg'
gem 'bootsnap'

gem 'puma'

gem 'sassc-rails'
gem 'uglifier'

gem 'ember-cli-rails', github: 'tradegecko/ember-cli-rails', branch: 'bugfix/force-no-trailing-slash'

gem 'honeybadger'
gem 'omniauth-tradegecko'
gem 'access_token_wrapper'
gem 'gecko-ruby'

gem 'liquid'

group :development, :test do
  gem 'pry-byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen'

  gem 'spring'
  gem 'spring-watcher-listen'
end

group :test do
  gem 'dotenv'
  gem 'webmock'
end

gem 'rails_12factor', group: :production
