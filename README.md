# Bucket-List

## Overview

Have you ever wanted an application that hosts your bucket list activities so you can reference them anytime you want? **Bucket-List** is a website that does just that -it allows users to post and save their bucket list activities on one site. Posts are public which allow other members to comment on the activities and provide feedback/support to the user who posted the bucket list activity. Users are encouraged to share the website with their friends and family who can comment on activities that they would like to join in on. 


<br>

## MVP

- Build a **Ruby on Rails** server, exposing RESTful JSON endpoints
- Build a database with 3 tables, utilize **Rails** to define models and controllers for Full CRUD
- Interactive **React** app with 8 separate rendered components in an appropriate file structure
- Build full CRUD around the Activity posts  
- Styled appropriately using CSS Flexbox
- Implement 2 media queries for responsive design (tablet, mobile, and desktop).

<br>

### Goals

- Create a fully functional **React** app with Full CRUD around bucket-list activities using **Ruby on Rails** for the backend that allows user authentication. 

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front End Framework for a dynamic SPA |
|   React Router   | Navigation Routing within the SPA |
| Axios | Allows for API calls|
|  Ruby on Rails  | Backend Framework and will be hosting logic for user authentication |
|  Postgresql  | Relational database that will allow the client to interact with the data |

<br>

### Client (Front End)

#### Wireframes


[Wireframe](https://www.figma.com/file/GtYOykC0r5eKcELq90vBVd/Bucket-List?node-id=0%3A1)

#### Component Tree

[Component tree](https://whimsical.com/bucket-list-VZiaPda6sk82NC2m5maRmP)

#### Component Hierarchy

``` structure

src
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ assets/
      |__ fonts
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Header.css
      |__ Footer.jsx
      |__ Footer.css
      |__ Nav.jsx
      |__ Nav.css
      |__ Comments.jsx
      |__ Comments.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layout/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ ActivityDetail.jsx
      |__ ActivityDetail.css
      |__ AddActivity.jsx
      |__ AddActivity.css
      |__ AllActivities.jsx
      |__ AllActivities.css
      |__ EditActivity.jsx
      |__ EditActivity.css
      |__ Landing.jsx
      |__ Landing.css
      |__ Login.jsx
      |__ Login.css
      |__ Register.jsx
      |__ Register.css
|__ services/
      |__ apiConfig.js
      |__ activities.js
      |__ auth.js
      |__ comments.js
      

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Ruby Boilerplate    |    H     |     3 hrs      |     TBD     |    TBD    |
| Setup models, controllers and routes    |    H     |     3 hrs      |     TBD     |    TBD    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Seed Data |    L     |     4 hrs      |     TBD     |     TBD     |
| Test Data/Routes with Postico and Postman |    M     |     1 hr      |     TBD     |     TBD     |
| Connect Backend with Frontend |    H     |     1 hr      |     TBD     |     TBD     |
| Create Login Form |    H     |     2 hrs      |     TBD     |     TBD     |
| Create Register Form |    H     |     3 hrs      |     TBD     |     TBD     |
| User Auth Logic Front/Backend |    H     |     5 hrs      |     TBD     |     TBD     |
| Render All Activity |    H     |     3 hrs      |     TBD     |     TBD     |
| Implement CRUD on Front End |    H     |     6 hrs      |     TBD     |     TBD     |
| Implement Comments on Activity Detail Page |    H     |     6 hrs      |     TBD     |     TBD     |
| CSS Styling Basic |    H     |     3 hrs      |     TBD     |     TBD     |
| CSS Styling Advanced |    M     |     5 hrs      |     TBD     |     TBD     |
| Mobile Queries |    M     |     2 hrs      |     TBD     |     TBD     |
| Debugging |    H     |     6 hrs      |     TBD     |     TBD     |
| Deployment |    H     |     3 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     59 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1d24SUm_2Cw-WJfTTnXXNypSUAO-Llyj0/view?usp=sharing

<br>

***

## Post-MVP

- Require auth for users to comment on other users activities
- User favorites / Indexing of activities up or down (like system)
- Searching and sorting of activities
- Edit and deleting of comments
- user page with a collection of all of their activities

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
