CREATE TABLE IF NOT EXISTS "user"
(
	id text not null,
	category text not null,
	efficiency_score double precision,
	constraint user_pk
		primary key (id, category)
);