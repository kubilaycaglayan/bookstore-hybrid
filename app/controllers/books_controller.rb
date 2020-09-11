class BooksController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_book, only: [:destroy]

  # GET /books
  # GET /books.json
  def index
    @books = Book.all
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)

    if @book.save
      render :show, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :category)
    end
end
