class Movie < ApplicationRecord
  belongs_to :shelf
  belongs_to :user
  belongs_to :director

  def self.get_default_image_link
    return "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
  end

end
