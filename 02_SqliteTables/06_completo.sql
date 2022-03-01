PRAGMA foreign_keys = ON;

create table if not exists contacts (
  contact_id integer primary key,
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text not null unique
);

insert OR ignore into contacts (first_name, last_name, email, phone)
values ('Juan', 'Hernández', 'fulano@gmail.com','44444444');

create table if not exists  groups (
  group_id integer primary key,
  name text not null unique
);

insert OR ignore into groups (name) values ('family');

CREATE TABLE if not EXISTS contact_groups(
   contact_id INTEGER,
   group_id INTEGER,
   PRIMARY KEY (contact_id, group_id),
   FOREIGN KEY (contact_id) REFERENCES contacts (contact_id),
   FOREIGN KEY (group_id) REFERENCES groups (group_id) 
);

insert OR ignore into contact_groups (contact_id, group_id) values (1,2);
