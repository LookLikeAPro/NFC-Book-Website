class ResourcesController < ApplicationController
	def index
		resources = Resource.all
		paginate json: resources
	end
	def show
		@resource = Resource.find(params[:id])
		render json: @resource
	end
end
