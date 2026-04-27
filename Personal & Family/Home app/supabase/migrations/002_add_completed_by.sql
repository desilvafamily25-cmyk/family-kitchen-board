-- Add "completed by" tracking to each task
ALTER TABLE daily_boards ADD COLUMN IF NOT EXISTS dinner_prep_by       text NOT NULL DEFAULT '';
ALTER TABLE daily_boards ADD COLUMN IF NOT EXISTS dinner_cook_by       text NOT NULL DEFAULT '';
ALTER TABLE daily_boards ADD COLUMN IF NOT EXISTS dinner_serve_by      text NOT NULL DEFAULT '';
ALTER TABLE daily_boards ADD COLUMN IF NOT EXISTS dishwasher_emptied_by text NOT NULL DEFAULT '';
ALTER TABLE daily_boards ADD COLUMN IF NOT EXISTS dishwasher_loaded_by  text NOT NULL DEFAULT '';
ALTER TABLE daily_boards ADD COLUMN IF NOT EXISTS kitchen_reset_by      text NOT NULL DEFAULT '';
ALTER TABLE daily_boards ADD COLUMN IF NOT EXISTS mum_school_lunch_by   text NOT NULL DEFAULT '';
