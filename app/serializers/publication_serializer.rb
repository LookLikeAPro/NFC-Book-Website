class PublicationSerializer < ActiveModel::Serializer
  attributes :id, :title, :picture, :description, :author, :slug
  has_many :resources
end
