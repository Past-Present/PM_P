# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_02_11_093831) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "artist_bank_accounts", force: :cascade do |t|
    t.bigint "artist_id", null: false
    t.bigint "currency_id", null: false
    t.string "account_name"
    t.string "bank_name"
    t.string "bank_code"
    t.string "branch"
    t.string "account_number"
    t.string "SWIFT_code"
    t.string "IBAN_code"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_artist_bank_accounts_on_artist_id"
    t.index ["currency_id"], name: "index_artist_bank_accounts_on_currency_id"
  end

  create_table "artist_position_preferences", force: :cascade do |t|
    t.bigint "artist_id", null: false
    t.bigint "work_item_id", null: false
    t.integer "prefer_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_artist_position_preferences_on_artist_id"
    t.index ["work_item_id"], name: "index_artist_position_preferences_on_work_item_id"
  end

  create_table "artist_roles", force: :cascade do |t|
    t.bigint "work_item_id", null: false
    t.bigint "artist_id", null: false
    t.bigint "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_artist_roles_on_artist_id"
    t.index ["project_id"], name: "index_artist_roles_on_project_id"
    t.index ["work_item_id"], name: "index_artist_roles_on_work_item_id"
  end

  create_table "artists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name_en"
    t.string "name_tw"
    t.string "email"
    t.string "discord"
    t.string "instagram"
    t.string "credit_name"
    t.string "address"
    t.string "username"
    t.string "password_hash"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_artists_on_user_id"
  end

  create_table "currencies", force: :cascade do |t|
    t.string "name_en"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "difficulty_prices", force: :cascade do |t|
    t.bigint "work_item_id", null: false
    t.integer "difficulty_level"
    t.decimal "price", precision: 10, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["work_item_id"], name: "index_difficulty_prices_on_work_item_id"
  end

  create_table "gantt_tasks", force: :cascade do |t|
    t.bigint "work_item_id", null: false
    t.bigint "project_id", null: false
    t.datetime "start_date"
    t.datetime "end_date"
    t.decimal "progress", precision: 5, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_gantt_tasks_on_project_id"
    t.index ["work_item_id"], name: "index_gantt_tasks_on_work_item_id"
  end

  create_table "payments", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.datetime "paid_at"
    t.integer "payment_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_payments_on_project_id"
  end

  create_table "project_announcements", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.string "title"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_announcements_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name_en"
    t.string "name_tw"
    t.string "google_drive_token"
    t.money "budget", scale: 2
    t.datetime "start_date"
    t.datetime "end_date"
    t.bigint "currency_id", null: false
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["currency_id"], name: "index_projects_on_currency_id"
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "shots", force: :cascade do |t|
    t.bigint "task_id", null: false
    t.integer "shot_number"
    t.integer "priority"
    t.integer "difficulty"
    t.integer "frames"
    t.string "preview_url"
    t.datetime "deadline"
    t.text "notes"
    t.bigint "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_shots_on_tag_id"
    t.index ["task_id"], name: "index_shots_on_task_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name_en"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.bigint "work_item_id", null: false
    t.bigint "artist_id", null: false
    t.integer "status"
    t.integer "frames"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_tasks_on_artist_id"
    t.index ["work_item_id"], name: "index_tasks_on_work_item_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "work_items", force: :cascade do |t|
    t.string "name_en"
    t.string "name_tw"
    t.integer "sorting"
    t.boolean "is_show"
    t.integer "unit"
    t.money "budget", scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "artist_bank_accounts", "artists"
  add_foreign_key "artist_bank_accounts", "currencies"
  add_foreign_key "artist_position_preferences", "artists"
  add_foreign_key "artist_position_preferences", "work_items"
  add_foreign_key "artist_roles", "artists"
  add_foreign_key "artist_roles", "projects"
  add_foreign_key "artist_roles", "work_items"
  add_foreign_key "artists", "users"
  add_foreign_key "difficulty_prices", "work_items"
  add_foreign_key "gantt_tasks", "projects"
  add_foreign_key "gantt_tasks", "work_items"
  add_foreign_key "payments", "projects"
  add_foreign_key "project_announcements", "projects"
  add_foreign_key "projects", "currencies"
  add_foreign_key "projects", "users"
  add_foreign_key "shots", "tags"
  add_foreign_key "shots", "tasks"
  add_foreign_key "tasks", "artists"
  add_foreign_key "tasks", "work_items"
end
