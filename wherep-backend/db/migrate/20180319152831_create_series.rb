class CreateSeries < ActiveRecord::Migration[5.1]
  def change
    create_table :series do |t|
      t.string :Title
      t.string :imdbId
      t.string :Poster
      t.text :Plot
      t.string :Genre
      t.string :Actors
      t.string :totalSeasons
      t.string :imdbRating
      t.integer :Grade
      t.integer :Season
      t.integer :Episode
      t.text :Comment
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
