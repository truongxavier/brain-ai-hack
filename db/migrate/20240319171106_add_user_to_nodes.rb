class AddUserToNodes < ActiveRecord::Migration[7.1]
  def change
    add_reference :nodes, :user, foreign_key: true
  end
end
