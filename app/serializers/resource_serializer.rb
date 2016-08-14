class ResourceSerializer < ActiveModel::Serializer
	belongs_to :publication
  attributes :id, :name, :description, :file
end
