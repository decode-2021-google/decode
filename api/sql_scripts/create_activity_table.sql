create table IF NOT EXISTS activity
(
	id integer not null
		constraint activity_pk
			primary key,
	content_type text,
	query text,
	duration int,
    category text
);