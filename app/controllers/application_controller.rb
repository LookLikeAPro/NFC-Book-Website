class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def slugredirect
		@publication = Publication.find_by!(slug: params[:slug])
		# redirect_to action: "show", id: @publication.id
		redirect_to "/publication/#{@publication.id}"
	end
end
