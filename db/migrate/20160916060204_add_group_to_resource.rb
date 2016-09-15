class AddGroupToResource < ActiveRecord::Migration
  def change
    add_column :resources, :group, :string
    remove_column :resources, :kind, :string
  end
end
