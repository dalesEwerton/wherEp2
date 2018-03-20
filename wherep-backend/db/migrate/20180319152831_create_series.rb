class CreateSeries < ActiveRecord::Migration[5.1]
  def change
    create_table :series do |t|
      t.string :title
      t.string :imdbId
      t.integer :grade
      t.integer :season
      t.integer :episode
      t.text :comment
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
