require 'httparty'
require 'open-uri'

@EA_API_ROOT = 'http://129.97.118.13:8000'
@EA_API_LIST = '/webapp/api/v1/book/'

books = HTTParty.get(@EA_API_ROOT+@EA_API_LIST)["books"]

def create_entry(book)
	import_id = "ea_"+book["title"]
	if Publication.find_by import_id: import_id
		return nil
	end
	publication = Publication.new
	publication.import_id = import_id
	publication.title = book["title"]
	publication.isbn = book["content"]["ISBN"]
	publication.author = book["content"]["Author"]
	publication.dewey_id = book["content"]["Dewey"]
	# begin
	# 	publication.picture = open(@EA_API_ROOT+book["cover"], "r")
	# rescue Exception
	# 	puts "unable to get picture "+@EA_API_ROOT+book["cover"]+" for book import_id: "+import_id
	# end
	return publication
end

for book in books do
	model = create_entry(book)
	if model
		model.save
	end
end
