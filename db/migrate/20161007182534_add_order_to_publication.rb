class AddOrderToPublication < ActiveRecord::Migration
  def change
    add_column :publications, :order, :text
  end
end
