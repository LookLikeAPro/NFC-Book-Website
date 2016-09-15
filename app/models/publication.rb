class Publication < ActiveRecord::Base
	extend FriendlyId
  friendly_id :title, :use => :slugged
  has_attached_file :picture, default_url: "/images/missing.png"
  validates_attachment :picture, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }
  has_many :resources, dependent: :destroy
	def picture_small
		self.picture.url(:original)
	end
	def picture_medium
		self.picture.url(:original)
	end
	def picture_original
		self.picture.url(:original)
	end
end
