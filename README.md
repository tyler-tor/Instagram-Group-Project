# Instagram Clone Group Project

Welcome to our Instagram Clone Group Project. This is a web app that allows you to socialize with other users through posts and comments.

## Table Content
- Technologies Used
   - Postgres
   - SqlAlchemy
   - Python
   - JavaScript
   - Redux
   - React
   - CSS
   - AWS
   - Flask
   - Alembic
   - Dockerfile

## Steps on getting started
   1. pull the project to clone
   2. pipenv install dependencies 
   3. Make sure you have Docker installed on your computer
   4. Once dependencies are installed create a .env file based on your .env.example
      1. To create/seed your database run the following
         - pipenv shell
         - flask db upgrade
         - flask seed all
   5. Run flask run to start the backend in your root folder
   6. cd into your react-app folder and run npm install to install dependencies and run npm start to run the frontend 
   7. The application will start at http://localhost:3000/
   
## Screenshots of Usage

### Login page
![image](https://user-images.githubusercontent.com/93111660/200135487-4549b9b5-d2b9-4dc7-9d13-506b20e87976.png)
- For existing users you can Login here.


### Landing page after login
![image](https://user-images.githubusercontent.com/93111660/200460268-8db72d0b-3bf8-4a5e-a090-bd34b04d4088.png)
- Once logged in this is your feed showing posts of users that you are currently following.


### Signup page
![image](https://user-images.githubusercontent.com/93111660/200460308-89bfe4ba-ca24-46db-a16c-75cf98795b24.png)
- If you do not have a profile yet you can signup using the following credentials to start your experience.

### A users profile page
![image](https://user-images.githubusercontent.com/93111660/200460373-5e6f8f0e-a772-4995-9f1f-29a3033bc12e.png)
- Here you can view posts by the selected user.


### Adding a new post
![image](https://user-images.githubusercontent.com/92609467/200462164-d79f74d3-cc54-40a4-b3c3-1286482abef8.png)
![image](https://user-images.githubusercontent.com/93111660/200460428-54643f9e-e174-4167-8992-40e01c5ff7c0.png)
- Using this form you can add a post to your profile where other viewers that are following you will see in there feed or if not will be able to view on the explore page.


### Viewing a individual post
![image](https://user-images.githubusercontent.com/92609467/200462613-804f9bea-2ca6-42f5-8ac8-5f76addb5479.png)
![image](https://user-images.githubusercontent.com/93111660/200460553-41b3a8f3-76a9-4ff5-9283-0d661633efe4.png)
- Here you can comment on a post and delete/update your personal comment.
- Like and unlike a post.


### Viewing the explore page of all users posts
![image](https://user-images.githubusercontent.com/92609467/200463657-d5c61ccb-936c-4632-9239-4038ed86554e.png)

![image](https://user-images.githubusercontent.com/93111660/200460687-1cb05a68-73ab-40e5-8010-8d0954195b7f.png)
- Here you can view every post by every user.

### Editing a caption on a post
![image](https://user-images.githubusercontent.com/93111660/200460819-e91399ef-1260-4c12-852e-d39ca59201f8.png)
- On a individual post that is owned by the current user you can edit a caption on a post.

### Viewing all users that you are not currently following
![image](https://user-images.githubusercontent.com/93111660/200460932-f108e328-2b6c-4327-9ccc-10b970e38139.png)
- Each one is clickable to visit a users profile page.





