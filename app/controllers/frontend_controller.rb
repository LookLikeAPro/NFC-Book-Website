class FrontendController < ApplicationController
	def index
		render :layout => false
	end
	def slugredirect
		@publication = Publication.find_by!(slug: params[:slug])
		# redirect_to action: "show", id: @publication.id
		redirect_to "/publication/#{@publication.id}"
	end
end
