class Publication < ActiveRecord::Base
  has_attached_file :picture, default_url: "/images/missing.png"
end
