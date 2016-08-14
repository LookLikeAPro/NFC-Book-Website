class PublicationSerializer < ActiveModel::Serializer
  attributes :id, :title, :picture, :description, :author, :slug
end
