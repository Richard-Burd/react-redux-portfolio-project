## NOTE TO SELF:
remember to enter this in the project main directory:
`./portfolio-project/react-redux-portfolio-project (master) $ npx rails start`
...to boot up the front end and back end servers at once.

## project requirements - Put these in the actual final version of the README.
    a.) need 2 container components
        1.) AirframeForm.js
        2.) AirframesContainer.js
        3.) AttitudeForm.js
        4.) ParametersContainer.js
        5.) Airframe.js

    b.) need 5 stateless components
        1.) AirframeData.js
        2.) Navbar.js
        3.) App.js
        4.) LabelAndTextInput.js
        5.) LabelAndSelectOption.js
        6.) GraphicComponent.js
        7.) ButtonComponent.js
        8.) RasterComponent.js


## Next Sprint

1.) make the project diagrams
    a.) figure out how to abstract the rendering...it's too big as is
        i.) Maybe have a super-abstract floor plan...
        i.) ...then also a super details process flow diagram
    b.) Make a diagram of just the views (show them all w/links + state)

2.) write a valid README.md file

3.) record a video walkthrough of the project
    a.) First show the ArduPilot homepage & explain what that is.

    b.) Show the parameter checklist with Agribotix Logo so we see the problem we're solving
        i.) explain that this is v.0.1

    c.) Show a visual of people working in the field with a drone.

    d.) Explain that in the field, you only want to contact the server when needed.
    e.) Explain that you only want to download or push to the server when needed

    f.) Explain that architecturally, the redux store & the server are always in sync.
        a.) a Redux store exists, but local state is also used

    g.) review the 3 options in the navbar
    h.) Walk them throuhg the entire CRUD process


4.) write a blog post about the project


//////////////////////////
5.) on the EditAirframe page that takes you to:
    localhost3000/airframes/1/edit <= there you will have four buttons:
    a.) edit basic params
    b.) edit attitude params
    c.) edit pid params
    d.) edit plugin params

2.) the next step is to create buttons for getting each of the parameter lists:
    a.) attitude params
    b.) PID params
    c.) plugins params

1.) style the images in CSS with controls on the sizes

2.) Once that basic page is rendering airframe names, add delete buttons to each one
    a.) this includes a delete action
    b.) this includes a delete "case" in the reducer

3.) go through and mimic the astronauts redux-workflow for the airframes, get everything working.

4.) at some point you need to make an illustration of what you're calling the "redux-workflow"
    so that you actually understand what the hell is going on with it and can make the rest of
    the app.



## Completed Tasks

x.) go back to the DevEd React Routes tutorial & see how to implement dynamic routes, they
    will be needed to implement the other pages in the application.

x.) create an "update" fetch for the airframes

x.) Delete unnecessary react icons and simplify App.js

x.) create read actions (index...not show...show will never be used in this app)
    for the other objects bs/ seeing one at a time isn't a thing:
    a.) attitude
    b.) pid
    c.) pluggins

x.) create an "update" action for the other objects:
    a.) attitude
    b.) Pid
    c.) Pluggins
    NOTE: you do not need a "delete" or "create action" for any of these...
    ...you just need to be able to update them

x.) Left off on Airframe.js
    a.) figure out how to fetch & render a single airframe on that page.
    b.) use the correct lifecycle hooks if needed.
    c.) you need to match the patterns in the Nested Routes lab:
        i.) the "App" doesn't have <Switch> logic
        i.) you need the ({ match, movies }) logic you see on the MoviesPage component in order
            to get an individual airframe to properly render

x.) create folder structure in React app based on this workspace:
    https://github.com/Richard-Burd/react-redux-sandbox/tree/master/React-Redux-Tutorials/react-redux-demo

x.) Install all the necessary libraries for a react-redux workspace
    a.) ./portfolio-project/react-redux-portfolio-project/client (master) $ npx install redux react-redux
    b.) ./portfolio-project/react-redux-portfolio-project/client (master) $ npm install react-router-dom
    c.) ./portfolio-project/react-redux-portfolio-project/client (master) $ npm install --save redux-thunk
    d.) ./portfolio-project/react-redux-portfolio-project/client (master) $ npm install redux-logger
    e.) ./portfolio-project/react-redux-portfolio-project/client (master) $ npm install --save redux-devtools-extension

x.) Create the necessary store, action & reducer files needed to fetch astronauts and use them as an example for testing the libraries to make sure they are functioning properly in this workspace

x.) in the delete action for airframes, add the extra code needed to delete
    all of the commensurate data: Pids, Attitude, et. al.

x.) create a new & separate "Test" component to make sure the React Router
    stuff is working properly.
    a.) create a set of simple links within (and inbetween) the files in them
        "tests" folder

x.) The next step is to get a page to render that shows a list of existing airframes
    a.) Make sure you have at least 3 airframes in the seed data prior to starting this

x.) put a delete button on Airframe.js and get the

x.) put an "Edit" button on the Airframe.js

x.) clean up the Action & reducer & make sure the DELETE function only does what it needs to
    and doesn't contain un-necessary code

x.) either pass props to child components or make sure the page refetches any props needed.

x.) make the BasicForm such that when you see it, it's values are already filled in with
        the existing parameter information.

x.) get the EDIT action in BasicForm working

x.) delete any redundant matchDispatchToProps that you might have in the EditAirframe container

x.) make an option to create an airframe...

x.) get a single form working for both creating and updating
    a.) compare "EditAirframe.js" & "CreateAirframe.js" side by side to see where they differ
    b.) combine them somehow into a sigle form.
        i.) s.thing like...
              if (state.singleAirframe == "undefined") {
                createAirframe()
              } else { updateAirframe }
x.) make the "const showAirframe = () => {}" in "Airframe.js" a separate component

x.) setup the backend so that when you create a new airframe, you also create it's
    attitude, PID, and plugins parameters set to null.

x.) make the attitude update action in the Attitudes controller functional.

x.) get the attitude 'show' & 'update' fetches working.  You don't need destroy or index
    a.) fetchAttitude(airframeId)
    b.) updateAttitude(airframeId)

x.) Have the browser-router display attitude params like this:
    http://localhost:3000/airframes/4/params/attitude
    ...NOTE: you will reference the airframe ID, not any of the param id's
    ...this means you match everything to a parameter's "airframe_id" associated with it.

x.) get the attitude form to display properly

x.) setup the BrowserRouter so that you can link to the airframe's commensurate  
    parameter page:


x.) Create an attitude parameter page that mimics this as close as possible:
    https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    ...on the AttitudeForm.js component.

x.) Rename TestComponent to TestContainer

x.) Get the astronauts out of the state entirely


## Instructions for Setting up Backend API for Final Portfolio Project
Instructions are here:
https://www.newline.co/fullstack-react/articles/how-to-get-create-react-app-to-work-with-your-rails-api/

The repo this is based on is here:
https://github.com/fullstackreact/food-lookup-demo-rails


The instructions start at the "Here we go" title

1.) ./portfolio-project (master) $ create-react-app client
      ...this will create a React app called "client"

2.) Create a backend Rails API app in the same directory:
    ./portfolio-project (master) $ rails new server --api
    ...this will create a Rails app called "server"

3.) Go into the backend Rails API app and add the following gem to the Gemfile:
    a.) gem 'foreman', '~> 0.82.0'
    ...then make sure to run bundle install

4.) inside (the main directory of ?) the backend Rails API create a folder called: Procfile

5.) Inside Procfile you need 2 lines of code that look like this:
    ```
    web: cd client && npm start
    api: bundle exec rails s -p 3001
    ```
6.) Inside the Rails app run this command:
    ./portfolio-project/server (master) $ foreman start -p 3000
    ...The client app will boot — we can see it running in our browser at
    localhost:3000. And our API server is up and listening at localhost:3001.
    Hitting CTRL+C kills both processes together, humanely.

7.) For our sanity, let's add a Rake task that executes this command for us.
    Create the file ```lib/tasks/start.rake:```
    ```
    task :start do
      exec 'foreman start -p 3000'
    end
    ```
    ...We can now boot the app with:
    ./portfolio-project/server (master) $ rake start
    NOTE: the file is here:
    https://github.com/fullstackreact/food-lookup-demo-rails/blob/master/lib/tasks/start.rake

## Libraries Required for Final Project:
./portfolio-project (master) $ rails new back-end-api --api
./portfolio-project (master) $ npx create-react-app front-end
./portfolio-project/front-end (master) $ npm install --save redux
./portfolio-project/front-end (master) $ npx install redux react-redux
./portfolio-project/front-end (master) $ npm install react-router-dom
./portfolio-project/front-end (master) $ npm install --save redux-thunk
./portfolio-project/front-end (master) $ npm install redux-logger ---- Vishwas method
./portfolio-project/front-end (master) $ npm install axios redux-thunk ---- Vishwas method
./portfolio-project/front-end (master) $ npm i --save redux-logger ---- Some guy
./portfolio-project/front-end (master) $ npm install --save redux-devtools-extension ----Vishwas method
NOTE: this last one is very important and makes the store a lot cleaner because you don't need this big bag verbage if you use it:
"window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"


### Project File Structure
```
├── app
│   ├── controllers
│   │   ├── airframes_controller.rb
│   │   ├── application_controller.rb
│   │   ├── attitudes_controller.rb
│   │   ├── pids_controller.rb
│   │   └── plugins_controller.rb
│   └── models
│       ├── airframe.rb
│       ├── application_record.rb
│       ├── attitude.rb
│       ├── pid.rb
│       └── plugin.rb
├── client
│   ├── public
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src
│   │   ├── components
│   │   │   ├── Airframe.js
│   │   │   ├── AirframeData.js
│   │   │   ├── AirframeForm.js
│   │   │   ├── AirframesContainer.js
│   │   │   ├── AttitudeForm.js
│   │   │   ├── ButtonComponent.js
│   │   │   ├── GraphicComponent.js
│   │   │   ├── LabelAndSelectOption.js
│   │   │   ├── LabelAndTextInput.js
│   │   │   ├── ParametersContainer.js
│   │   │   ├── RasterComponent.js
│   │   │   └── TestComponent.js
│   │   ├── graphics
│   │   │   ├── horizonLine.svg
│   │   │   ├── pitchCircleNarrow.svg
│   │   │   ├── pitchCircleWide.svg
│   │   │   ├── planeFrontView.svg
│   │   │   └── planeSideView.svg
│   │   ├── redux
│   │   │   ├── airframe
│   │   │   │   ├── AirplaneActions.js
│   │   │   │   └── AirplaneReducer.js
│   │   │   ├── attitude
│   │   │   │   ├── AttitudeActions.js
│   │   │   │   └── AttitudeReducer.js
│   │   │   ├── test
│   │   │   │   ├── TestActions.js
│   │   │   │   └── TestReducer.js
│   │   │   ├── index.js
│   │   │   ├── rootReducer.js
│   │   │   ├── store.js
│   │   │   └── urlAndUrns.js
│   │   ├── tests
│   │   │   ├── TestFetches.js
│   │   │   ├── TestLibraries.js
│   │   │   ├── TestPortal.js
│   │   │   ├── TestReduxWorkflow.js
│   │   │   └── TestRouter.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── NavBar.js
│   │   └── serviceWorker.js
│   ├── gitignore.js  
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── yarn.lock
├── config
│   ├── initializers
│   │   └── cors.rb
│   └── application.rb
├── db
│   ├── migrate
│   │   ├── 20200515145624_create_airframes.rb
│   │   ├── 20200515155135_create_attitudes
│   │   ├── 20200515155347_create_pids.rb
│   │   └── 20200515155545_create_plugins.rb
│   ├── development.sqlite3
│   ├── schema.rb
│   └── seeds.rb
├── lib
│   └── tasks
│       ├── .keep
│       └── start.rake
├── log
├── public
├── storage
├── test
├── tmp
├── vendor
├── config.ru
├── Gemfile
├── Gemfile.lock
├── LICENSE
├── Procfile
├── Rakefile
└── README.md
```
## License Link
