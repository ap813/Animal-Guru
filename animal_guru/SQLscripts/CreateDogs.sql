use animalguru;

drop table if exists dogs;

create table dogs(
	name varchar(20), 
    color varchar(30), 
    weight numeric(3), 
    fullWeight numeric(3), 
    DOB date, 
    sex varchar(1), 
    housetrained bool, 
    fix bool,
    breed varchar(50)
);

insert into dogs values ('Ozzie', 'Black', '90', '130', '2014-06-02', 'F', FALSE, TRUE, 'Rottweiler');
insert into dogs values ('Lunch', 'Black', '50', '60', '2011-11-22', 'M', TRUE, TRUE, 'Labrador');
insert into dogs values ('Hotdog', 'Brown', '6', '10', '2015-07-15', 'F', TRUE, FALSE, 'Yorkshire Terrier');
insert into dogs values ('Dash', 'White', '10', '20', '2015-11-07', 'M', TRUE, TRUE, 'French Bulldog');
insert into dogs values ('Chewy', 'Brown and White', '100', '140', '2013-08-14', 'M', TRUE, TRUE, 'Komondor');
insert into dogs values ('Jack', 'White and Black', '20', '25', '2010-03-12', 'M', TRUE, TRUE, 'Rat Terrier');

select * from dogs;