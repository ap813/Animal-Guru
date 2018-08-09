use animalguru;

drop table if exists users;

create table users(
	name varchar(30),
    email varchar(40),
    password varchar(20),
    token varchar(256),
    primary key(email)
);

insert into users values ('Alex', 'alex@email.com', 'password', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiQWxleCIsImVtYWlsIjoiYWxleEBlbWFpbC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIn0sImlhdCI6MTUzMzgyODUwNH0.nCLVEUmNE-vsT0Y4qeMFSDVDEFiPDRY0TvB6y2OyZD8');

select * from users;