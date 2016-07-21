class Resource < ActiveRecord::Base
  belongs_to :publication
  has_attached_file :file, default_url: "/images/missing.png"
end
