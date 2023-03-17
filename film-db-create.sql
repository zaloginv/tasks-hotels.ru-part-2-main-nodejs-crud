-- основные таблицы

CREATE TABLE genre
(
	genre_id serial PRIMARY KEY,
	genre_name varchar(64) NOT NULL
);

CREATE TABLE film
(
	film_id serial PRIMARY KEY,
	title varchar(64) NOT NULL,
	release_date date NOT NULL
);


-- таблицы связей m2m

CREATE TABLE genre_film
(
	genre_id int REFERENCES genre(genre_id),
	film_id int REFERENCES film(film_id),
	
	CONSTRAINT genre_film_pk PRIMARY KEY (genre_id, film_id)
);







