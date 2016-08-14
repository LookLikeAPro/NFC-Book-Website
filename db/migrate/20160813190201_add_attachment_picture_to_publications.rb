class AddAttachmentPictureToPublications < ActiveRecord::Migration
  def self.up
    change_table :publications do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :publications, :picture
  end
end
