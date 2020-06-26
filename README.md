
# React-Redux Portfolio Project
This is a portfolio project submittal for Module 16 of the Full-Stack Web Development program at Flatiron School.&nbsp; This project makes use of React and Redux together and is meant to show a basic level competency in those two JavaScript libraries.

## Getting Started
To run this app locally, you will need to have [Rails](https://rubyonrails.org/) and [Node Package Manager (NPM)](https://docs.npmjs.com/about-npm/) already installed.&nbsp;  After that, type this command into your console while inside the app's ***/client*** directory, which is the front-end workspace:

 - `$ npm install`

...this will install the required NPM libraries.&nbsp; Finally, navigate to the ***main*** project directory and run these commands:

1. `$ bundle install` ... to install the [Ruby Gems](https://rubygems.org/).
2. `$ rails db: migrate` ... to run the Active Record migrations
3. `$ rails db: seed` ... to seed the database with three airframes & their parameters.
4. `$ rails start` ... to boot up the server courtesy of: *./lib/tasks/start.rake*


## The Problem Being Solved

This app is designed to be an interactive parameter editor for the [ArduPlane](https://ardupilot.org/plane/) open source software suite.&nbsp; This software provides autonomous control for unmanned aerial vehicles (UAV's) and has several, [customizable parameters](https://ardupilot.org/plane/docs/parameters.html) that can be adjusted so as to tailor the software to a specific UAV body, or **airframe** in aviation jargon.&nbsp;

![](https://ardupilot.org/application/files/8714/8419/9139/2048x1536-1.jpg)
*a team of drone technicians getting ready for takeoff somewhere outside*

In order to adjust these parameters, users interact with a not-so intuitive GUI designed for simplicity and parsimony.&nbsp;  Here is an example of what they're looking at:

![enter image description here](https://ardupilot.org/plane/_images/missPlannTuningTECS.png)

Because the interface is so basic, users often struggle to keep track of which parameters do what and so they end up making cheat-sheets like this one I put together several years ago:
![Imgur](https://i.imgur.com/yzeb0vr.png)

So then, this app is designed to be a graphically intuitive, ArduPlane parameter editor guide that does what this 2D graphical checklist above does, but better.&nbsp;  In sum, the app provides a user with graphics that *illustrate* what each parameter does and how changing *that* parameter will effect outcomes with responsive, animated graphics.

Currently this is just a  v.0.1 demonstrator that would be presented to drone technicians for feedback.&nbsp;  The Arduplane software has somewhere around 90 flight-parameters and all this app does is create, read, update, and delete (**CRUD**) three of them, along with an associated airframe.&nbsp;  Even with this small delivery, the number of React components used to create this app far exceed the [project requirements](https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-5-redux-final-project/react-redux-portfolio-project).&nbsp;

## User Interface
The app let's a user CRUD an airframe with a name & some basic info.&nbsp;  When an airframe is created, a default set of 3 parameters are also created for, and associated with,  that same airframe.&nbsp;  These parameters control the airframe's maximum allowable [pitch, roll, and yaw](https://en.wikipedia.org/wiki/Aircraft_principal_axes) while in an [autonomous flight mode](https://ardupilot.org/plane/docs/flight-modes.html):&nbsp;

![Imgur](https://i.imgur.com/FtbLpaB.jpg)

The three parameters are edited on the ***/airframes/:id/params***  path as shown in the lower right-hand box in the illustration above.&nbsp;  There are three interactive graphics that change orientation as the user manipulates their values.  This allows the user to *see* what their changes are doing rather than having to remember specifics they read way back from the boring [documentation](https://ardupilot.org/plane/docs/parameters.html).&nbsp;

## Client - Server Communication
While manipulating these parameters, the user is sending their changes to a local React component state on the front-end, rather than the Redux store.  Only when the user *saves* their changes are those changes sent to the server.  The user only grabs data from the server whenever absolutely necessary since they will likely be in a field environment far away from solid internet access:&nbsp;


![Imgur](https://i.imgur.com/CQg659p.jpg)
One of my [Flatiron School](https://flatironschool.com/) instructors pointed out that, in a situation with poor internet access, it may in fact be optimal to grab all the data you need at once (from the backend) so that when the connection *is* working, the user can take maximum advantage of that circumstance to effect their changes.  In such a case the `attitude`, `PID`, and `plugins` could be populated once a  `singleAirframe` is loaded into the store by altering the `show` action in `./app/controllers/airframes_controller.rb` so that it renders all associated parameter data at the same time that it renders the airframe data.

## Application Architecture

This app uses two communication paths as shown below.&nbsp;  First let's discuss the green arrows that say *request* and *read*:


![Imgur](https://i.imgur.com/uyd91GW.jpg)

When rendering back-end data, React functional components (such as `AirframeData.js` ) send requests to the Redux layer, and the Redux layer in turn grabs the appropriate data from the server, and then puts it in the proper place within the central Redux store.&nbsp;  Once in store, all components in the app are able to access the data.

When a user persists to the back-end database, the workflow follows the orange arrows that say *create, update,* & *delete*.&nbsp;  Here, React container components like `Airframe.js` & `AirframeForm.js` that use a React class component's local state send requests to the Redux, action controllers, but bypass the Redux reducers & store and  go straight to the back-end server.&nbsp; This is immediately followed by a page reload and now the server and store are synced with changes traveling unidirectionally, from server to store and never the other way around.&nbsp;  This makes expansion and manipulation of the code base much easier because we are only keeping track of persistence in one direction as opposed to two.&nbsp; The philosophy here is: *if the user hasn't saved their changes, the store doesn't care to know about it yet.*

## Project File Structure
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
.
