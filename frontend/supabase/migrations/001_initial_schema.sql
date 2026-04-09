-- New Vision Dental - Database Schema
-- Run this in your Supabase SQL Editor

-- 1. Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'USER' CHECK (role IN ('USER', 'ADMIN')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  patient_email TEXT,
  service TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  user_id UUID REFERENCES profiles(id),
  location_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  duration TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Locations table
CREATE TABLE IF NOT EXISTS locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  address TEXT,
  phone TEXT,
  hours TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'General',
  image_url TEXT NOT NULL,
  is_before_after BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Blogs table (already exists, but ensuring schema)
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  author TEXT DEFAULT 'Admin',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  read_time TEXT,
  views INT DEFAULT 0,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Profiles: users can read their own, admins can read all
CREATE POLICY "Users can read own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can read all profiles" ON profiles FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can update all profiles" ON profiles FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);

-- Appointments: anyone can create, users can read their own, admins can read all
CREATE POLICY "Anyone can create appointments" ON appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can read own appointments" ON appointments FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Admins can read all appointments" ON appointments FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can update appointments" ON appointments FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can delete appointments" ON appointments FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);

-- Services: everyone can read, admins can modify
CREATE POLICY "Anyone can read services" ON services FOR SELECT USING (true);
CREATE POLICY "Admins can insert services" ON services FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can update services" ON services FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can delete services" ON services FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);

-- Locations: everyone can read, admins can modify
CREATE POLICY "Anyone can read locations" ON locations FOR SELECT USING (true);
CREATE POLICY "Admins can insert locations" ON locations FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can update locations" ON locations FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can delete locations" ON locations FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);

-- Gallery: everyone can read, admins can modify
CREATE POLICY "Anyone can read gallery" ON gallery FOR SELECT USING (true);
CREATE POLICY "Admins can insert gallery" ON gallery FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can update gallery" ON gallery FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can delete gallery" ON gallery FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);

-- Blogs: everyone can read published, admins can read all and modify
CREATE POLICY "Anyone can read published blogs" ON blogs FOR SELECT USING (status = 'published');
CREATE POLICY "Admins can read all blogs" ON blogs FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can insert blogs" ON blogs FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can update blogs" ON blogs FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can delete blogs" ON blogs FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Anyone can view images" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Admins can upload images" ON storage.objects FOR INSERT WITH CHECK (
  bucket_id = 'images' AND
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);
CREATE POLICY "Admins can delete images" ON storage.objects FOR DELETE USING (
  bucket_id = 'images' AND
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
);

-- Seed services data
INSERT INTO services (name, slug, duration, is_active, sort_order) VALUES
  ('Consultation', 'consultation', '30 mins', true, 1),
  ('Dental X-Ray', 'dental-x-ray-periapical', '15 mins', true, 2),
  ('Scaling & Polishing', 'scaling-polishing', '45 mins', true, 3),
  ('Teeth Whitening', 'teeth-whitening', '60 mins', true, 4),
  ('Dental Implants', 'dental-implants', '2-3 Visits', true, 5),
  ('Composite Restoration', 'composite-restoration', '1 Visit', true, 6),
  ('Root Canal Treatment', 'root-canal-treatment', '1-2 Visits', true, 7),
  ('Crown & Bridge', 'crown-bridge-recementation', '1 Visit', true, 8),
  ('Tooth Extraction', 'tooth-extraction', '30 mins', true, 9),
  ('Dental Veneers', 'dental-veneers', '2 Visits', true, 10),
  ('Fluoride Therapy', 'fluoride-therapy-children', '20 mins', true, 11),
  ('Fissure Sealing', 'fissure-sealing-children', '20 mins', true, 12)
ON CONFLICT (slug) DO NOTHING;

-- Seed locations data
INSERT INTO locations (name, slug, address, phone, hours, is_active) VALUES
  ('North Legon', 'north-legon', 'Agbogba Road, North Legon, Accra', '0559497906', 'Mon-Sat: 8am-5pm', true),
  ('Ashaley Botwe', 'ashaley-botwe', 'School Junction, Ashaley Botwe, Accra', '0257091176', 'Mon-Sat: 8am-5pm', true),
  ('ACP Estate', 'acp-estate', 'ACP Estate Junction, Kwabenya, Accra', '0545563839', 'Mon-Sat: 8am-5pm', true)
ON CONFLICT (slug) DO NOTHING;
