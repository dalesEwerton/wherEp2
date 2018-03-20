module Api
  class UsersController < ApplicationController

    def index
      message = 'Welcome to WherEp API'
      responce_success(message, message)
    end

    def show
      series = Serie.where(:user_id => params[ :id])
      message = 'User find'
      responce_success(message, series)
    end

    # /api/login
    def login
      user = User.find_by_name(user_params['name'])
      auth_user(user)
    end

    def create
      user = User.find_by_name(user_params['name'])
      if user
        message = 'Username is in use'
        status = :unauthorized
        responce_error(message, status, user)
      else
        user = User.new(user_params)
        create_user(user)
      end
    end

    def destroy
      user = User.find(params[ :id])
      user.destroy
      responce_success('User Deleted', user)
    end

    def update
      user = User.find(params[ :id])
      if user.update_attributes(serie_params)
        responce_success('User updated', user)
      else
        responce_error('User note updated', :unprocessable_entity, user)
      end
    end


    private
    def create_user(user)
      if user.save
        responce_success('User Saved', user)
      else
        message = 'User not saved'
        status = :unprocessable_entity
        responce_error(message, status, user)
      end
    end

    def responce_error(message, status, user)
      render json: {status: 'ERROR',
                    message: message,
                    data: user.errors}, status: status
    end

    def responce_success(message, users)
      render json: {status: 'SUCCESS',
                    message: message,
                    data: users}, status: :ok
    end

    def auth_user(user)
      if user
        check_user(user)
      else
        render json: {
            satus: 'ERROR',
            message: 'USER NOT FOUND'
        }, status: :not_found
      end
    end

    def check_user(user)
      if user_params['password_digest'] == user.password_digest
        series = Serie.where(:user_id => user.id)
        render json: {
            status: 'SUCCESS',
            message: 'User loaded',
            data: user,
            series: series}, status: :ok
      else
        render json: {
            status: 'ERROR',
            message: 'Failed to authenticate user'
        }, status: :unauthorized
      end
    end

    def user_params()
      params.permit(:name, :email, :password_digest)
    end
  end
end