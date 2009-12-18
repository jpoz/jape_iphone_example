('A'..'Z').each do |l|
  # puts "%img{ :id=>\"letter#{l}\", :src=>\"letter#{l}.png\", :alt=>\"letter #{l}\", :style=>\"position: absolute; left: 10px; top: 10px;\"}"
  puts "makeObjectMovable(letter#{l});"
end
