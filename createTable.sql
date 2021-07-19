CREATE TABLE drivers (
    Number VARCHAR(32) NOT NULL PRIMARY KEY, 
    Ranking INT,
    Name VARCHAR(255),
    Nationality VARCHAR(255),
    Team VARCHAR(255) ,
    Wins INT, 
    Podiums INT,
    Points INT
)