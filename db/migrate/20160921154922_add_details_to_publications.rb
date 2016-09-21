class AddDetailsToPublications < ActiveRecord::Migration
  def change
    add_column :publications, :import_id, :string
    add_column :publications, :dewey_id, :string
    add_column :publications, :isbn, :string
  end
end
