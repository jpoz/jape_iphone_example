require 'rubygems'
require 'sinatra'

get '/' do
  haml :index
end

not_found do
  haml :'404'
end

error do
  'Sorry there was a nasty error - ' + env['sinatra.error']
end