
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "access_level" INT NOT NULL DEFAULT 0
);

CREATE TABLE "annual_review" (
    "id" SERIAL PRIMARY KEY,
    "comments" VARCHAR(100) NOT NULL,
    "rating" INT NOT NULL,
    "year" INT NOT NULL,
    "employee_id" INT REFERENCES "user" NOT NULL,
    "access_level" INT NOT NULL
);


INSERT INTO "annual_review" ("comments", "rating", "year", "employee_id", "access_level") 
VALUES
	('Always eager to help even in areas they are unfamiliar with.', 5, 2020, 3, 1),
	('Shows up consistantly late.', 2, 2020, 4, 1),
	('Should encourage to interact with team more.', 4, 2020, 1, 5),
	('Manages team alright but could be less harsh in their tone.', 5, 2020, 2, 3);