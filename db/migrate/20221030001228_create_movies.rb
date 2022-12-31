class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.references :shelf, null: false, foreign_key: true
      t.references :user , null: false, foreign_key: true

      t.timestamps
    end
  end
end
