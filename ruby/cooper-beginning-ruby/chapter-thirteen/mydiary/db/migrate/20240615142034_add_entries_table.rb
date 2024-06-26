class AddEntriesTable < ActiveRecord::Migration[7.1]
  def change
    create_table :entries do |table|
      table.column :title, :string
      table.column :content, :text
      table.column :created_at, :datetime
    end
  end
end
