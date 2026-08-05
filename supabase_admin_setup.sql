-- ══════════════════════════════════════════════
-- 관리자 인증 전환 설정 (Supabase Auth + RLS)
-- ══════════════════════════════════════════════
-- 지금까지는 관리자 비밀번호가 app.js에 평문으로 박혀 있었고,
-- posts/gallery 테이블도 RLS가 없어서 anon key(=누구나 소스보기로 볼 수 있는 값)만
-- 있으면 브라우저 콘솔에서 게시물 승인/삭제, 갤러리 삭제까지 전부 가능했어요.
--
-- 적용 순서 (반드시 이 순서로):
--   1) 아래 "1. 관리자 계정 만들기"를 대시보드에서 먼저 수행
--   2) 이 파일의 SQL을 SQL Editor에서 실행
--   3) 새 비밀번호로 /#admin 로그인이 되는지 확인한 뒤에 배포
--   (SQL을 먼저 실행하면 관리자 계정이 없는 상태에서 기존 비밀번호 로그인이
--    막혀버려서 그 사이엔 관리자 페이지에 아예 못 들어가요)

-- ══════════════════════════════════════════════
-- 1. 관리자 계정 만들기 (Supabase 대시보드에서 직접, 2명 각각)
-- ══════════════════════════════════════════════
-- Authentication > Users > Add user > Create new user
-- 아래 두 이메일 각각에 대해 한 번씩 반복하세요 (app.js의 ADMIN_EMAILS와 동일해야 함):
--   - sionchoi0691@gmail.com
--   - dlwoduf2kr@gmail.com
--
-- 각 계정마다:
--   - Password: 그 사람이 로그인할 때 쓸 비밀번호 (서로 달라도 되고, 같아도 됨)
--   - "Auto Confirm User" 체크 (이메일 인증 없이 바로 로그인 가능하게)
--
-- 로그인 폼엔 이메일 입력란이 없고 비밀번호만 입력해요 — 입력한 비밀번호로
-- 두 계정을 순서대로 시도해서, 둘 중 하나라도 맞으면 로그인됩니다.
-- 즉 두 사람이 서로 다른 비밀번호를 써도 같은 로그인 화면을 공유할 수 있어요.
--
-- 이미 관리자 계정을 하나 만들어뒀다면(예: admin@nowoneco.local), 그건 그대로
-- 지우거나 놔둬도 상관없어요 (ADMIN_EMAILS에 없으면 로그인 시도 대상에서 빠질 뿐).

-- ══════════════════════════════════════════════
-- 2. posts 테이블 RLS
-- ══════════════════════════════════════════════
alter table posts enable row level security;

drop policy if exists "public_read_approved" on posts;
create policy "public_read_approved" on posts
  for select
  to anon
  using (status = 'approved');

drop policy if exists "public_insert_pending" on posts;
create policy "public_insert_pending" on posts
  for insert
  to anon
  with check (status = 'pending');

drop policy if exists "admin_full_access_posts" on posts;
create policy "admin_full_access_posts" on posts
  for all
  to authenticated
  using (true)
  with check (true);

-- ══════════════════════════════════════════════
-- 3. gallery 테이블 RLS
-- ══════════════════════════════════════════════
alter table gallery enable row level security;

drop policy if exists "public_read_gallery" on gallery;
create policy "public_read_gallery" on gallery
  for select
  to anon
  using (true);

drop policy if exists "admin_full_access_gallery" on gallery;
create policy "admin_full_access_gallery" on gallery
  for all
  to authenticated
  using (true)
  with check (true);

-- ══════════════════════════════════════════════
-- 4. Storage 정책 (post-images, gallery-images 버킷)
-- ══════════════════════════════════════════════
-- 두 버킷 모두 public 버킷이라 읽기는 정책 없이도 누구나 가능해요.
-- 여기선 업로드(insert)/삭제(delete)만 역할별로 제한합니다.

drop policy if exists "public_upload_post_images" on storage.objects;
create policy "public_upload_post_images" on storage.objects
  for insert
  to anon
  with check (bucket_id = 'post-images');

drop policy if exists "admin_delete_post_images" on storage.objects;
create policy "admin_delete_post_images" on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'post-images');

drop policy if exists "admin_upload_gallery_images" on storage.objects;
create policy "admin_upload_gallery_images" on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'gallery-images');

drop policy if exists "admin_delete_gallery_images" on storage.objects;
create policy "admin_delete_gallery_images" on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'gallery-images');

-- ══════════════════════════════════════════════
-- 5. 확인
-- ══════════════════════════════════════════════
-- 위 SQL 실행 후:
--   - 시크릿창에서 사이트 열어서 미션/피드/갤러리가 정상적으로 보이는지 확인
--   - /#admin 에서 새 비밀번호로 로그인, 승인/반려/갤러리 추가·삭제가 되는지 확인
--   - 브라우저 콘솔에서 로그아웃 상태로 아래처럼 실행했을 때 빈 배열이나
--     오류가 나오면 정상(예전엔 이게 그냥 다 통과됐어요):
--       await sb.from('posts').update({status:'approved'}).eq('id', '아무id')
