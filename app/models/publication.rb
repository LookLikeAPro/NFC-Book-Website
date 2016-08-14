class Publication < ActiveRecord::Base
  has_attached_file :picture, default_url: "/images/missing.png"
  validates_attachment :picture, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }
end
