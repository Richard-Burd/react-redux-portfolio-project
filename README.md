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
