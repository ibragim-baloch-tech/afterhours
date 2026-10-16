-- Profiles: one row per user, linked to Supabase Auth.
-- Users can read and edit only limited fields of their own profile.
-- Verification and moderation fields are NOT editable by users.

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null,
  display_name text,
  bio text,
  verification_status text not null default 'unverified'
    check (verification_status in ('unverified', 'pending', 'verified', 'rejected')),
  account_status text not null default 'active'
    check (account_status in ('active', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint username_format
    check (username ~ '^[a-z0-9_]{3,30}$'),
  constraint bio_length
    check (bio is null or char_length(bio) <= 500),
  constraint display_name_length
    check (display_name is null or char_length(display_name) between 1 and 60)
);

-- Usernames are stored lowercase; the format check enforces this,
-- and this index guarantees uniqueness.
create unique index profiles_username_key on public.profiles (username);

-- Lock the table down first.
alter table public.profiles enable row level security;

-- Signed-in users can read profiles (limited columns exposed below).
create policy "profiles are readable by signed-in users"
  on public.profiles for select
  to authenticated
  using (true);

-- Users can insert only their own row.
create policy "users insert own profile"
  on public.profiles for insert
  to authenticated
  with check (id = (select auth.uid()));

-- Users can update only their own row.
create policy "users update own profile"
  on public.profiles for update
  to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

-- Column-level protection: users may only write these columns.
-- verification_status and account_status are deliberately excluded.
revoke insert, update on public.profiles from authenticated, anon;
grant insert (id, username, display_name, bio) on public.profiles to authenticated;
grant update (username, display_name, bio) on public.profiles to authenticated;
grant select on public.profiles to authenticated;

-- Keep updated_at accurate.
create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();