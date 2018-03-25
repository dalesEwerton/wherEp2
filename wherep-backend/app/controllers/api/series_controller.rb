module Api
  class SeriesController < ApplicationController

    def index
      series = Serie.order('created_at DESC')
      message = 'Series loaded'
      responce_success(message, series)
    end

    def show
      serie = Serie.find(params[ :id])
      responce_success('Serie loaded', serie)
    end

    def create
      serie = Serie.new(serie_params)
      if serie.save
        message = 'Serie Saved'
        responce_success(message, serie)
      else
        message = 'Serie not saved'
        responce_error(message, serie)
      end
    end

    def destroy
      serie = Serie.find(params[ :id])
      serie.destroy
      responce_success('Serie Deleted', serie)
    end

    def update
      serie = Serie.find(params[ :id])
      if serie.update_attributes(serie_params)
        responce_success('Serie updated', serie)
      else
        responce_error('Serie note updated', serie)
      end
    end


    private
    def responce_error(message, serie)
      render json: {status: 'ERROR',
                    message: message,
                    data: serie.errors}, status: :unprocessable_entity
    end

    def responce_success(message, series)
      render json: {status: 'SUCCESS',
                    message: message,
                    data: series}, status: :ok
    end

    def serie_params()
      params.permit(:Title, :imdbId, :Poster, :Plot, :Genre,
                    :Actors, :totalSeasons, :imdbRating, :Grade, :Season,
                    :Episode, :Comment, :user_id)
    end
  end
end
