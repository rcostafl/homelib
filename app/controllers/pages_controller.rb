class PagesController < ApplicationController
    skip_before_action :authenticate_user!, only: :main

    def main
    end

    def my_page
        redirect_to(movies_path()) # I can pass a variable here. ex: @movie
    end

    def components
    end
end
