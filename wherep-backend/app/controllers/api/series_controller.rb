module Api
  class SeriesController < ApplicationController

    def index
      series = Serie.order('created_at DESC')
      render json: {status: 'SUCCESS',
                    message: 'Series loaded',
                    data: series},status: :ok
    end

    def show
      serie = Serie.find(params[ :id])
      render json: {status: 'SUCCESS',
                    message: 'Serie loaded',
                    data: serie}, status: :ok
    end

    def create
      serie = Serie.new(serie_params)
      if serie.save
        render json: {status: 'SUCCESS',
                      message: 'Serie Saved',
                      data: serie,
                      series: series}, status: :ok
      else
        render json: {status: 'ERROR',
                      message: 'Serie not saved',
                      data: serie.errors}, status: :unprocessable_entity
      end
    end

    def destroy
      serie = Serie.find(params[ :id])
      serie.destroy
      render json: {status: 'SUCCESS',
                    message: 'Serie Deleted',
                    data: serie}, status: :ok
    end

    def update
      serie = Serie.find(params[ :id])
      if serie.update_attributes(serie_params)
        render json: {status: 'SUCCESS',
                      message: 'Serie updated',
                      data: serie}, status: :ok
      else
        render json: {status: 'ERROR',
                      message: 'Serie note updated',
                      data: serie.errors},status: :unprocessable_entity
      end
    end


    private

    def serie_params()
      params.permit(:title, :imdbId, :user_id, :series)
    end
  end
end