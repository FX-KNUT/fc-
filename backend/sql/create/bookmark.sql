create table bookmark (
    user_id varchar(15),
	bookmark_gunwonjungbo   boolean,
	bookmark_haedongtongbo  boolean,
	bookmark_hwalgu         boolean,
	bookmark_bannyangjun    boolean,
	bookmark_myungdojun     boolean,
	bookmark_oban           boolean,
	bookmark_tainhwapye     boolean,
	bookmark_dollar         boolean,
    primary key(user_id),
    FOREIGN KEY(user_id) REFERENCES users (user_id)
);