class PostsController < ApplicationController

  def index
    posts = [
      {id: 1, title: 'いい天気'},
      {id: 2, title: '犬に追いかけられた'},
      {id: 3, title: 'お金を落とした'}
    ]
    render json: { status: 'SUCCESS', message: 'Loaded posts', data: posts }
  end

end
