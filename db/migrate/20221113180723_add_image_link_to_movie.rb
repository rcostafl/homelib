class AddImageLinkToMovie < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :image_link, :string
  end
end
