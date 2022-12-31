class ChangeDirectorToRefOnMovie < ActiveRecord::Migration[7.0]
  def change
    remove_column :movies, :director, :string
    add_column :movies, :director_id, :integer, references: :your_parent_model
  end
end
