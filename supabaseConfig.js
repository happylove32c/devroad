
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrbdjqslhqvgbweymfcz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYmRqcXNsaHF2Z2J3ZXltZmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDE4NTMsImV4cCI6MjA0ODcxNzg1M30.peVTMjA8RH27jJWfeiw63eQcYGWqaLgi3oJdt0nvF-w"
const supabase = createClient(supabaseUrl, supabaseKey)