module Api
  class SeriesController < ApplicationController

    def index
      series = Serie.order('created_at DESC');
      render json: {status: 'SUCCESS',
                    message: 'Series loaded',
                    data: series},status: :ok
    end
  end
end