class RemoveOrderFromPublications < ActiveRecord::Migration[5.0]
  def change
    remove_column :publications, :order, :text
  end
end
