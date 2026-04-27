-- ============================================================
-- Family Kitchen Board — Supabase Schema
-- Run this in the Supabase SQL editor (Dashboard → SQL editor)
-- ============================================================

-- ── Table: daily_boards ────────────────────────────────────
CREATE TABLE IF NOT EXISTS daily_boards (
  id                      uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  board_date              date NOT NULL UNIQUE,
  dinner_team             text NOT NULL CHECK (dinner_team IN ('A', 'B')),
  clearing_team           text NOT NULL CHECK (clearing_team IN ('A', 'B')),
  dinner_plan             text NOT NULL DEFAULT '',
  dinner_prep_done        boolean NOT NULL DEFAULT false,
  dinner_cook_done        boolean NOT NULL DEFAULT false,
  dinner_serve_done       boolean NOT NULL DEFAULT false,
  dishwasher_emptied_done boolean NOT NULL DEFAULT false,
  dishwasher_loaded_done  boolean NOT NULL DEFAULT false,
  kitchen_reset_done      boolean NOT NULL DEFAULT false,
  mum_school_lunch_done   boolean NOT NULL DEFAULT false,
  updated_at              timestamptz NOT NULL DEFAULT now()
);

-- ── Table: app_settings ────────────────────────────────────
CREATE TABLE IF NOT EXISTS app_settings (
  id                      uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  school_mode_enabled     boolean NOT NULL DEFAULT true,
  base_team_a_dinner_date date    NOT NULL DEFAULT '2024-01-01',
  created_at              timestamptz NOT NULL DEFAULT now(),
  updated_at              timestamptz NOT NULL DEFAULT now()
);

-- ── Row Level Security ─────────────────────────────────────
ALTER TABLE daily_boards  ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_settings  ENABLE ROW LEVEL SECURITY;

-- Authenticated family members can read + write daily_boards
CREATE POLICY "auth_read_boards"   ON daily_boards FOR SELECT TO authenticated USING (true);
CREATE POLICY "auth_insert_boards" ON daily_boards FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "auth_update_boards" ON daily_boards FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- Authenticated family members can read + write app_settings
CREATE POLICY "auth_read_settings"   ON app_settings FOR SELECT TO authenticated USING (true);
CREATE POLICY "auth_insert_settings" ON app_settings FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "auth_update_settings" ON app_settings FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ── Realtime ───────────────────────────────────────────────
-- Enable realtime on daily_boards so all devices update live
ALTER PUBLICATION supabase_realtime ADD TABLE daily_boards;

-- ── Trigger: auto-update updated_at ───────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_daily_boards_updated_at
  BEFORE UPDATE ON daily_boards
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_app_settings_updated_at
  BEFORE UPDATE ON app_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
