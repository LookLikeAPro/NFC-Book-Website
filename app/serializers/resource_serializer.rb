class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :publication, :file
end
