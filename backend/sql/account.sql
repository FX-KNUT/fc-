-- DB 생성
CREATE DATABASE fc;

-- DB 선택
USING fc;

-- 계정 생성
CREATE USER fc_admin@localhost IDENTIFIED BY 'fx1234';

-- 권한 부여
GRANT ALL PRIVILEGES on fc.* TO fc_admin@localhost;

-- 설정 적용
FLUSH PRIVILEGES;

-- @백엔드
-- 계정: fc_admin
-- 암호: fx1234
-- HOST: 127.0.0.1
-- PORT: 3310
-- DB  : fc
-- 설명: 'fc_admin' 계정은 'fc' 데이터베이스에 대한 모든 권한을 가지고 있음.
