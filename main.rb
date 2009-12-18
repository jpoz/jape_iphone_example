require 'rubygems'
require 'sinatra'

# look in the public directory!

get '/' do
  redirect '/index.html', 307
end

not_found do
  '404'
end

error do
  'Sorry there was a nasty error - ' + env['sinatra.error']
end