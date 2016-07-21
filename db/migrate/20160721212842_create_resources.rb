class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :name
      t.text :description
      t.references :publication, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
