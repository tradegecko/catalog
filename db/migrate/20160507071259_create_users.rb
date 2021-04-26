class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.integer :tg_login_id
      t.string  :access_token
      t.string  :refresh_token
      t.integer :expires_at
      t.timestamps
    end
  end
end
