class PublicationsController < ApiController
	def index
		publications = Publication.where(import_id: "")
		paginate json: publications.as_json(
			:only => [:title, :description, :author,],
			:methods => [:picture_medium, :friendly_id]
		)
	end
	def show
		@publication = Publication.friendly.find(params[:id])
		render json: @publication.as_json(
			:only => [:title, :description, :author],
			:methods => [:picture_medium, :friendly_id],
			:include => {
				:resources => {
					:only => [:id, :group, :name, :description],
					:methods => [:file_url,]
				}
			}
		)
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
