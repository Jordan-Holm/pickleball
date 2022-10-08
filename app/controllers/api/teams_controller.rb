class Api::TeamsController < ApplicationController
  before_action :set_parent
  before_action :set_team, only: [:show, :update, :destroy]

  def index
    render json: @game.teams
  end

  def show
    render json: @team
  end

  def create
    @team = @game.teams.new(team_params)
    if @team.save
      render json: @team
    else
      render json: { errors: @team.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @team.update(team_params)
      render json: @team
    else
      render json: { errors: @team.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @team.destroy
    render json: { message: 'team deleted.'}
  end

  private
    def set_parent
      @game = Game.find(params[:game_id])
    end

    def set_team
      @team = @game.teams.find(params[:id])
    end

    def team_params
      params.require(:game).permit(:team_name, :player_1, :player_2)
    end

end
