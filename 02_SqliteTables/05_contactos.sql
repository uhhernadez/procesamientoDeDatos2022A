create table if not exists contacts (
  contact_id integer primary key,
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text not null unique
);

insert into contacts (first_name, last_name, email, phone)
values ('Juan', 'Hernández', 'fulano@gmail.com','44444444');

create table if not exists  groups {
  group_id integer primary key,
  name text not null unique
};

insert into groups (name) values ('family');







