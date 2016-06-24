class PublicationsController < ApiController
	def index
		publications = Publication.all # Movie.scoped if using ActiveRecord 3.x
		paginate json: publications
	end
	def show
		@publication = Publication.find(params[:id])
		render json: @publication
	end
	# def create
	# 	if @publication.present?
	# 		render nothing: true, status: :conflict
	# 	else
	# 		@publication = Publication.new
	# 		@publication.assign_attributes(@json['publication'])
	# 		if @publication.save
	# 			render json: @publication
	# 		else
	# 			 render nothing: true, status: :bad_request
	# 		end
	# 	end
	# end
end
