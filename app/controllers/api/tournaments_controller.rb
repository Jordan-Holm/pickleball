class Api::TournamentsController < ApplicationController
 before_action :set_tour, only: [:show, :update, :destroy]
  def index
    render json: Tournament.all
  end

  def show
    render json: @tournament
  end

  def create
    @tournament = Tournament.new(tour_params)
    if @tournament.save
      render json: @tournament
    else
      render json: { errors: @tournament.error }, status: :unprocessable_entity
    end
  end

  def update
    if @tournament.update(tour_params)
      render json: @tournament
    else
      render json: { errors: @tournament.error }, status: :unprocessable_entity
    end
  end

  def destroy
    @tournament.destroy
    render json: { message: 'Tournament deleted'}
  end


  private
    def tour_params
      params.require(:tournament).permit(:tname, :division, :where, :when, :gender )
    end

    def set_tour
      @tournament = Tournament.find(params[:id])
    end
  end