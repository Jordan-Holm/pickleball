class Api::GamesController < ApplicationController
  before_action :set_parent
  before_action :set_games, only: [:show, :update, :destroy]

  def index
    render json: @tour.games
  end

  def show
    render json: @game
  end

  def create
    @game = @tour.games.new(game_params)
    if @game.save
      render json: @game
    else
      render json: { errors: @game.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: { errors: @game.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @game.destroy
    render json: { message: 'game deleted' }
  end

  private
    def game_params
      params.require(:game).permit(:placements, :gtime)
    end

    def set_parent
      @tour = Tournament.find(params[:tournament_id])
    end

    def set_games
      @game = @tour.games.find(params[:id])
    end
end
