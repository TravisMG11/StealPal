create_table "user", force: :cascade do |t|
    t.string   "name", null: false
    t.string   "username", null: false
    t.string   "password_digest", null: false
    t.string   "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

create_table "restaurants", force: :cascade do |t|
    t.string   "name", null: false
    t.string   "meal", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
