# Social-Network-API
Creating an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

Demonstration link
https://drive.google.com/file/d/1ccHM2lLSTu8I6NJQHosgy9FS_IAcPvXq/view

## Description
The purpose of this project was to build a functional, NoSQL database utilizing MongoDB and Mongoose. In addition to this I created a functional API that makes requests to this database

Once properly set up and running, the user can utilize their desired API testing tool, such as Insomnia or Postman, to send various HTTP requests to our server, which can modify the MongoDB database.

The user can make GET, POST, PUT, and DELETE requests to modify the database. I have attached a video demonstration below for further information.

A video demonstration is available below or can be accessed by clicking [here.](https://drive.google.com/file/d/1ccHM2lLSTu8I6NJQHosgy9FS_IAcPvXq/view)

-------------------------

## Table of Contents
* [How to use](#how-to-use)
* [Installation](#installation)
* [Technologies](#technologies)
* [Screenshots](#screenshots)
* [License](#license)
* [Questions](#questions)

-------------------------
## How to use
You can create your own posts by navigating to the "Dashboard" page and clicking "Create Post +". You can also view and make comments by clicking any post you see on the homepage (if you are logged in). If you do not have an account, then you can sign up for one for free by clicking on "Sign In" located in the navbar.

-------------------------

## Installation
If you wish to clone this repo and host the website locally, please be sure to carefully follow the installation instructions.

1. This app is powered by Node.js and MySQL, as a result, make sure those are properly installed and configured before continuing on.
2. Navigate to the root of this repo and run `npm install` in your console/terminal to download all the necessary npm packages.
3. Create a `.env` file in the root of the repo. Within this file, copy and paste the following: 

```md
DB_NAME=blog_db
DB_USER=<user_name>
DB_PASSWORD=<user_password>
```
*Alternatively, you can modify the included `.env.EXAMPLE` file to include your username and password*

4. Change the value of `DB_USER` and `DB_PASSWORD` to your MySQL user and password respectively. Save these changes.
5. Execute `mysql -u root -p` in your console/terminal.
6. Once succesfully logged in, execute `source db/schema.sql` to create database. Exit when finished.
7. You are now ready to turn on the server by running `npm start` or `npm run watch` for nodemon (to view changes live).

*By default, the server is hosted to `http://localhost:3001/` although the PORT number can be modified by changing the value of the variable `PORT` in `server.js` on `line 13`.*

-------------------------

## Technologies
Below is a list of all the technologies we utilized in order to build this website.

### NPM Packages
* [BCrypt](https://www.npmjs.com/package/bcrypt)
* [Connect-Session-Sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://www.npmjs.com/package/express)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Express-Session](https://www.npmjs.com/package/express-session)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)

### Other Technologies (CDNs)
* [Bootstrap](https://getbootstrap.com)
* [Sweet Alert](https://sweetalert.js.org)

-------------------------

## Screenshots

Below are various screenshots of the website:

### Homepage on PC
<img src="./assets/images/pc-homepage.png" alt="Homepage on PC">

### Individual comment on PC
<img src="./assets/images/pc-singlecomment.png" alt="Individual on PC">

### Dashboard on PC
<img src="./assets/images/pc-dashboard.png" alt="Dashboard on PC">

### Homepage & Dashboard on Mobile
<div style="display: flex;"> 

<img src="./assets/images/mobile-homepage.png" alt="Homepage on Mobile" width=50% height=50%>

<img src="./assets/images/mobile-dashboard.png" alt="Dashboard on Mobile" width=50% height=50%>

</div>

-------------------------

## License

This project falls under the following license:
* [MIT](https://opensource.org/licenses/MIT)

-------------------------

## Questions
If you have any questions or comments, please feel free to contact me below: 

### Anthony Quinones
Github: [TonyQ032](https://github.com/TonyQ032) 

Email: anthonyq032@gmail.com
