# phavr
**Get the photos you want to see.**


Home                                      |  Map
:----------------------------------------:|:-------------------------:
![phavr](http://i.imgur.com/eIbKWDn.jpg)  |  ![phavr](http://i.imgur.com/03jUri5.jpg)


##Intro
Phavr is a social media platform that allows users to post requests(favors) to view, and allow other users to shoot photos and fulfill those favors. Users can vote on both the favors and photos -- gaining points when their own content is the one being upvoted. Naturally this causes the best requests and pictures to rise to the top. From concerts to protests, phavr has a plethora of relevant use and promise of fun!

##The Team
<ul>
<li>Darren Wong - Product Owner
<li>Moriah Kreeger - Scrum Master
<li>Kaivon Afsari
<li>Frank Bowers 
</ul>

##Status
[![Build Status](https://secure.travis-ci.org/JaggedCloud/JaggedCloud.png)](http://travis-ci.org/JaggedCloud/JaggedCloud)


##Usage

1. Users can post a favor as text at geographic locations
2. Other users in proximity of a message can view, vote, and reply with a photo on it
3. These same users can continue to vote on the photo replies and the favor they are attached to
4. Messages are automatically destroyed after a set amount of time

##Requirements

##Development

###Setup

1. Fork the repository
2. Clone a copy of the repository locally
3. Run npm install
4. Run bower install

##Technical Walkthrough

### Mobile to Server/S3 Communication
The Node-Express server lives on phavr.herokuapp.com and acts as an API endpoint for the mobile application. Photos are also served to S3 via the Express server because of validation concerns. 

###Security
We use Token Facebook authentication using Passport and Node-Express/ng-Cordova. Upon login all API calls are authenticated and verified each and every time. We used tokens because of their stateless and mobile friendly nature in comparison to a session-based form of authentication.  

###Database Interactions
We used Mongoose and Mongo to store out User, Photo, favorVote, photoVote, and Favor tables. Mongo allowed for quicker storage, speedier lookup, and integrated use of location data. 

##Push Notifications
Push Notification is done in conjunction with an instance of node-pushserver running as a separate service on phavr-push.herokuapp.com.  Node-pushserver handles message subsciptions and sending messages to Google Cloud Messaging.

##Technology Stack

###BackEnd
- *Server Environment* **NodeJS**
- *Web Framework* **ExpressJS**
- *Database* **Mongo**
- *ORM* **Mongoose**
- *Photo Storage* **Amazon/S3**
- *Task Runner* **Gulp/Grunt**
- *Push Notifications* **Google Cloud Messaging with node-pushserver**

###FrontEnd
- *Mobile Architecture* **Ionic/Angular**
- *Compiled CSS* **Sass**

###Testing
- *Continuous Integration* **TravisCI**
- *Test Runner* **Grunt**
- *Front-End Test Framework* **Jasmine**
- *Back-End Test Framework* **Jasmine**

## Contributing
Do you want to fix a bug, add some code, or improve documentation? Awesome! Admit pull-requests for possible contributions!