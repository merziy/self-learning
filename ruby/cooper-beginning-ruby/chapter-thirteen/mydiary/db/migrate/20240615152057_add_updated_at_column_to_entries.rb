class AddUpdatedAtColumnToEntries < ActiveRecord::Migration[7.1]
  def change
    add_column :entries, :updated_at, :datetime
  end
end
