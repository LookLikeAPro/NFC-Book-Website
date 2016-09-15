class RemoveSlugFromPublication < ActiveRecord::Migration
  def change
    remove_column :publications, :slug, :string
  end
end
