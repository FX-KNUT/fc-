CREATE TABLE fc;

USING fc;

CREATE TABLE user (
  id VARCHAR(20),
  nickname VARCHAR(20),
  hashed_pw VARCHAR(100),
  email VARCHAR(100),
  balance int(20),
  primary key(id)
);

-- 계정 생성
CREATE USER fc_admin@localhost IDENTIFIED BY 'fx1234';

-- 권한 부여
GRANT ALL PRIVILEGES on fc.* TO fc_admin@localhost;

-- 설정 적용
FLUSH PRIVILEGES;