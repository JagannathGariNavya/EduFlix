# EduSchool
# Snap Savants_039	

## Introduction

Edu-School :The EduSchool Course Subscription Plan project aims to create a subscription-based model allowing users unlimited access to courses for a monthly or annual fee. It will include features such as user account management, secure payment integration, and content access control based on subscription status. The project will enhance user experience with personalized dashboards and progress tracking. Analytics and reporting tools will be developed to monitor subscription metrics and user engagement. The goal is to provide flexible learning options and recurring revenue for EduSchool.

## Project Type

Frontend:

The project is a primarily front-end project which utilizes a mock server to simulate back-end.

## Deployed App

Frontend:

Backend:

## Directory Structure

```
EduShcool
├── .gitignore
├── BackEnd/
│   ├── .gitignore
│   ├── db.json
│   ├── package-lock.json
│   ├── package.json
│   ├── products.json
│   ├── server.js
│   └── test.rest
├── FrontEnd/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── logo/ 
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.tsx
│   │   ├── assets/
│   │   │   ├── react.svg
│   │   │   
│   │   │   
│   │   │   
│   │   │   
│   │   │   
│   │   │   
│   │   ├── components/
│   │   │   ├── .dummy
│   │   │   ├── Admin/
│   │   │   │   ├── InitialFocus.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── apiService/
│   │   │   │   │   ├── FetchProperty.tsx
│   │   │   │   │   ├── PostData.tsx
│   │   │   │   │   └── fetchData.tsx
│   │   │   ├── Body/
│   │   │   │   ├── Body.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   ├── Header/
│   │   │   │   ├── Navbar.tsx
│   │   │   ├── Registration/
│   │   │   │   ├── Registration.tsx
│   │   │   ├── product/
│   │   │   │   ├── Products.tsx
│   │   │   └── Addcard/
│   │   │   │   ├── Men.tsx
│   │   ├── main.tsx
│   │   ├── pages/
│   │   │   ├── Admin.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── LoginSignUp.tsx
│   │   │   ├── Property.tsx
│   │   │   └── Wishlist.tsx
│   │   ├── redux/
│   │   │   ├── action.ts
│   │   │   ├── actionTypes.ts
│   │   │   ├── authReducer.ts
│   │   │   └── store.ts
│   │   ├── routes/
│   │   │   ├── AllRoutes.tsx
│   │   │   └── PrivateRoute.tsx
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── App.css
│   │   │   ├── Footer/
│   │   │   │   └── footer.css
│   │   │   ├── Registration/
│   │   │   │   ├── css/
│   │   │   │   │   ├── style.css
│   │   │   │   │   └── style.css.map
│   │   │   │   ├── fonts/
│   │   │   │   │   └── material-icon/
│   │   │   │   │   │   ├── css/
│   │   │   │   │   │   │   ├── material-design-iconic-font.css
│   │   │   │   │   │   │   └── material-design-iconic-font.min.css
│   │   │   │   │   │   └── fonts/
│   │   │   │   └── scss/
│   │   │   ├── cards.css
│   │   │   ├── filterBar.css
│   │   │   ├── index.css
│   │   │   ├── navbar.css
│   │   │   └── propertyPageStyle/
│   │   ├── utils/
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── README.md

```

## video Walkthrough of the project


A detailed walkthrough of all the features of our project can be found here:

-----

## video Walkthrough of the project


A quick walkthrough of the project can be found here: 

-----

##Features

-Responsive and dynamic website
- Admin Dashboard and CRUD Operations
- Search using search param
- User authentication

## Design Decisions or Assumptions

This is not the cloned project . To facilitate the proper design and flow of our project following assumptions were made :

- One admin for all CRUD operations instead of multiple admins and super admin
- User must be logged in to access the test-rdie details
- Admin user does not need to access the main website and is redirected to the admin dashboard

  ## Installation & Getting started

To run the frontend website, enter the following commands in your terminal:

```bash
# Move into the FrontEnd Directory
cd FrontEnd/

# Install all dependencies
npm install

# Run the dev server
npm run dev
```

The project uses a mock server deployed using JSON-server on render. The server can be accessed here: 

If you would like to run a local server instead, use the following commands:

```bash
# Move into the BackEnd directory
cd BackEnd/

# Run the server
npm run start
```

Warning: The project is built around the deployed server which can be accessed using the above link. Running a local server might cause some unwanted changes.

## Usage

1. The website lands on the home page. On the home page, the following functions can be performed:


2.  hovering on the elements which are present on the navbar can easily navigate to the another page.
 

3. When Scroll Down on Landing Page there are some Cards Which has the latest courses and their short description.


4. Next we have Learn and More With ome image of Harley-Davidson Bike, it has one explore more button by clicking on the explore more we are redirected to the the bikes page where you can get more clear information about bikes


5. We have shop and Appreal cards those cards were clickable it will route us to their specific page
    

   6. We have use friendly footer where the user has any issues any help the user can contact us from the footer where the information is added
     
7. From Navbar when we hover on elements and click on the elements it will redirect us to thier specific page.
  


 ## Technology Stack

- HTML
- CSS
- JavaScript
- Bootstrap Library (Bootstrap 5.3)
- React.JS
- Chakra UI




