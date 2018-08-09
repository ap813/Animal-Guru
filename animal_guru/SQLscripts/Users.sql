use animalguru;

drop table if exists users;

create table users(
	name varchar(30),
    email varchar(40),
    password varchar(20),
    token varchar(256),
    verified bool,
    code numeric(6),
    primary key(email)
);

insert into users values ('Alex', 'alex@email.com', 'password', '',false, 100000);

select * from users;