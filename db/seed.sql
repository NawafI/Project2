DROP DATABASE IF EXISTS book_collection;
CREATE DATABASE book_collection;
\c book_collection

-- create tables here

CREATE TABLE book(
  id serial primary key,
  title varchar,
  img_url varchar,
  author varchar,
  discription varchar
);

CREATE TABLE author(
  id serial primary key,
  fullName varchar,
  book_id int not null,
  foreign key(book_id) references book ON DELETE CASCADE ON UPDATE CASCADE
);






-- 
INSERT INTO book
  (title, img_url,author, discription )
VALUES
  ('RESTful Web API Design with Node.js', 'https://www.packtpub.com/sites/default/files/5869OS_2899_RESTful%20Web%20API%20Design%20with%20Node.jpg', 'Valentin Bojinov', 'Design, implement, and route Node.js RESTful services with the Express framework module
. Test user-developed modules with Nodeunit and module mocking with SinonJS.Use this practical guide to integrate MongoDB in your Node.js application.'),
  ('Eloquent JavaScript', 'https://images-na.ssl-images-amazon.com/images/I/515jiKSErDL._SX376_BO1,204,203,200_.jpg',
'Marijn Haverbeke', 'Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code. Author Marijn Haverbeke immerses you in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs. As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you’ll learn.'),
  ('The Linux Command line :', 'http://linuxcommand.org/images/51vgLTkNsIL._SL500_AA300_.jpg','William Shotts', 'Linux is a Unix-like operating system that is one of the most popular open source operating systems on the planet. It is the heart of countless software products, from enterprise operating systems like Android and Red Hat Enterprise Linux, to hobbyist projects on a wide range of devices...'),
  ('HTML & CSS: Design and Build Web Sites', 'http://img14.360buyimg.com/n1/g10/M00/1C/00/rBEQWFNYxSwIAAAAAAAlFjyAFIAAAFfQwKc6_QAACUu894.jpg','Jon Duckett', 'Introduces HTML and CSS in a way that makes them accessible toeveryone—hobbyists, students, and professionals—andit’s full-color throughout.Utilizes information graphics and lifestyle photography toexplain the topics in a simple way that is engaging.Boasts a unique structure that allows you to progress throughthe chapters from beginning to end or just dip into topics ofparticular interest at your leisure');


INSERT INTO author
 (fullName, book_id)
VALUES
( 'Valentin Bojinov', 1),
( 'Marijn Haverbeke', 2),
( 'William Shotts', 3),
( 'Jon Duckett', 4);

