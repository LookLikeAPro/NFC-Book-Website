class Publication < ActiveRecord::Base
	extend FriendlyId
	scope :production_only, -> { where(import_id: "") }
	serialize :order, Array
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
	def slug=(value) # To generate slug when saving through rails-admin
		if value.present?
			write_attribute(:slug, value)
		end
	end
end
