-- USER

-- @신이종 1203
-- USER 테이블: 필요한 필드 추가 기재.
-- 그 외 테이블 생성 SQL 작성.

CREATE TABLE users (
  user_id VARCHAR(15),
  user_nickname VARCHAR(12),
  user_hashed_pw VARCHAR(36),
  user_email VARCHAR(48),
  primary key(user_id)
);
-- 1204 balance column 자름

-- MESSAGE
-- -- POST
-- -- NEWS_THUMBNAIL
-- -- COMMMENTs
-- -- REPORT

-- @이진형
-- MESSAGE 테이블을 생성하고 POST 테이블과 조인하는 방법에 대해서 상의 후 결정.
-- 테이블 필드 이름 앞에 엔티티명을 붙이는 것에 대해서 상의 후 결정.

-- @신이종 1203 (1)
-- message_user_id => user_id - 외래키이기 때문에 열 이름을 통일, COMMENTS 테이블도 이와 같음.
-- POST 테이블은 이대로 사용. 모든 게시물을 POST 테이블에 담고 TARGET을 통해서 분류하고 DML.

-- @신이종 1203 (2)
-- 테이블 이름 뒤에 s를 안붙이려고 하는데, MYSQL에는 COMMENT라는 키워드가 따로 있기 때문에 이에 대해서 상의 필요.
-- -- [ 테이블 명 뒤에 's'를 붙일 지, 다른 테이블명을 사용할지 ]

CREATE TABLE posts (
  message_id INT(20),
  user_id VARCHAR(15),
  message_content VARCHAR(500),
  message_target VARCHAR(30),
  message_created_at TIMESTAMP,
  post_title VARCHAR(30),
  post_view_count INT(3),
  post_like_count INT(3),
  post_updated_at TIMESTAMP,
  PRIMARY KEY(message_id),
  FOREIGN KEY(user_id) REFERENCES users (id)
);

CREATE TABLE news_thumbnails (
  message_id INT(20),
  news_thumbnail VARCHAR(100),
  PRIMARY KEY(message_id),
  FOREIGN KEY(message_id) REFERENCES posts (message_id)
);

CREATE TABLE comments (
  message_id INT(20),
  user_id VARCHAR(15),
  message_content VARCHAR(500),
  message_target VARCHAR(30),
  message_created_at TIMESTAMP,
  comment_like_count INT(3),
  comment_updated_at TIMESTAMP,
  PRIMARY KEY(message_id)
);

create table blocks (
  block_index int not null auto_increment,
  block_hash varchar(256) not null,
  block_previous_hash varchar(256),
  block_owner varchar(15) not null default "",
  block_nonce int not null default 0,
  block_created_at date,
  block_difficulty int,
  primary key(block_index)
);

CREATE TABLE txs (
  block_index int,
  tx_from     varchar(15),
  tx_to       varchar(15),
  tx_amount   int
);

CREATE TABLE wallet (
	wallet_owner            varchar(15),
	wallet_balance          int,
	wallet_gunwonjungbo     int,
	wallet_mumuncheoljeon   int,
	wallet_haedongjungbo    int,
	wallet_samhantongbo     int,
	wallet_joseontongbo     int,
	wallet_sibjeontongbo    int,
	wallet_sangpyeongtongbo int,
	wallet_daedongunjeon    int
);

-- @신이종 1203
-- BOARD 테이블은 필요가 없다고 판단하므로 삭제.
-- Message_target이 문자열이라서 게시판 생성 등의 로직이 없다면 쓸 이유가 없음

-- RANKING

CREATE TABLE ranking (
  user_id VARCHAR(15),
  ranking_idx INT(3),
  PRIMARY KEY(user_id),
  FOREIGN KEY(user_id) REFERENCES users (id)
);

CREATE TABLE bookmark (
  user_id varchar(15),
	bookmark_gunwonjungbo     boolean,
	bookmark_mumuncheoljeon   boolean,
	bookmark_haedongjungbo    boolean,
	bookmark_samhantongbo     boolean,
	bookmark_joseontongbo     boolean,
	bookmark_sibjeontongbo    boolean,
	bookmark_sangpyeongtongbo boolean,
	bookmark_daedongunjeon    boolean,
  primary key(user_id),
  FOREIGN KEY(user_id) REFERENCES users (id)
);