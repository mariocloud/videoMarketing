# encoding: UTF-8
class VideosController < ApplicationController
  def new
    @video = Video.new
  end

  def create
    @video = Video.new(params[:video])
    @video.state = Video::PROCESSING_STATE
    if @video.save
      flash[:success] = 'Hemos recibido el video y muy pronto será revisado y publicado. Gracias por participar del concurso.'
      redirect_to root_path
    else
      flash[:error] = 'Error cargando el video.'
      render 'new'
    end
  end

  def index
    @videos = Video.ordered_desc_by_created_at
  end
end
