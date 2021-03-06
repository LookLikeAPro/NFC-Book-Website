class Resource < ApplicationRecord
  belongs_to :publication
  has_attached_file :file, default_url: "/images/missing.png"
  do_not_validate_attachment_file_type :file
  def file_url
    self.file.url(:original)
  end
end
