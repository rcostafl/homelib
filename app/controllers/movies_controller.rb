class MoviesController < ApplicationController

    def index
        @movies = Movie.all

        render(template: "pages/my_page")
    end
    
    def show
        @movie = Movie.find(params[:id])
    end

    def edit
        @movie = Movie.find(params[:id])
    end

    def update

        movie = Movie.find(params[:id])
        movie.update(get_movie_par)
      
        if movie.save
            redirect_to edit_movie_path(movie)
            flash[:success] = "Tudo certo! Salvamos a alteração!!"
        else
            flash[:alert] = "Hummm, tivemos um probleminha: não consegui salvar!"
            render :edit
        end
    end

    def new
        @movie = Movie.new()
        @shelves = Shelf.all()
    end

    def create
        @movie = Movie.new(get_movie_par)
        @movie.user = current_user

        if @movie.save
            redirect_to movies_path
            flash[:success] = "Tudo certo, salvamos o filme!"
        end
    end

    def search
        if params[:search].present?
            @movies = Movie.joins(:shelf)
                            .where("movies.title    ilike :search or\ 
                                    movies.director ilike :search or\
                                    shelves.name    ilike :search",
                                    search: "%#{params[:search]}%")
            @filter_activated = true
            # The below command renders only the view.
            render :index
        else
            redirect_to(movies_path)
        end

    end

    def destroy
        @movie = Movie.find(params[:id])

        if @movie.destroy
            flash[:success] = "Tudo certo! Apagamos o filme!"
            redirect_to movies_path
        else
            flash[:alert] = "Tivemos um problema e não conseguimos excluir o filme!"
            render edit_movie_path(@movie)
        end            
    end

    private
    def get_movie_par
        params.require(:movie).permit(%i[title director_id shelf_id image_link])
    end

end
