class CreateTemplates < ActiveRecord::Migration[6.1]
  def change
    create_table :templates do |t|
      t.string  :name
      t.string :url
      t.belongs_to :user
      t.timestamps
    end
  end
end
