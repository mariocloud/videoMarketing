class PagesController < ApplicationController
  def home
    @videos = Video.converted.ordered_desc_by_created_at.page(params[:page]).per(8)
    @video = Video.new
  end
end
