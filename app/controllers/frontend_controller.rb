class FrontendController < ApplicationController
	def index
		if !Rails.env.production?
			return render 'index-hot', :layout => false
		end
		render 'index', :layout => false
	end
	def slugredirect
		@publication = Publication.find_by!(slug: params[:slug])
		# redirect_to action: "show", id: @publication.id
		redirect_to "/publication/#{@publication.id}"
	end
end
