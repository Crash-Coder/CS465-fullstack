## CS410 README

### Comparison of Frontend Development Approaches

Comparing the types of frontend development used in the project involves contrasting Express HTML, JavaScript, and Single Page Application (SPA) approaches.

- To compare the types of frontend development that I used in the project I would like to start by comparing Express HTML and JavaScript. The Express application is very simple and uses directions in the routes and controllers related to the HTML page that the user has requested based on the navigation bar selection. When this task is done using JavaScript the application still uses controllers and routes, but handlebars are implemented to be able to reuse information such as the footer and header. The data is also moved out of the HTML files and to a separate file containing the data which is loaded by using a model with fields related to the necessary information needed for the web page. Moving everything over to a Single Page Application involves using components for each element of the application with some elements being static throughout the entire application. The SPA allows for there to be an authentication wall that hides certain elements and capabilities until the authentication function unlocks them. Using the SPA also involves a separate API portion of the program which is handled differently in both the Express HTML and the JavaScript web app.

### Backend Database Choice: NoSQL MongoDB

The backend used a NoSQL MongoDB due to the data requirements for the application. The app did not need to store data in table form meaning it allowed the database app to adapt to changing requirements and the structure for a relational database was not needed. The app only needed a schema for each database and then it could pull the stored data from the database accordingly.

### JSON vs. JavaScript and their Role in Development

JSON and JavaScript serve different purposes in development:

- JSON is different from Javascript in a few aspects, the first one being Javascript is a language with the main purpose of creating interactive and dynamic elements when developing web pages. Javascript can be implemented to run the front end of the app and the back end of the app using Node
- JSON is different from Javascript in a few aspects, the first one being Javascript is a language with the main purpose of creating interactive and dynamic elements when developing web pages. Javascript can be implemented to run the front end of the app and the back end of the app using Node

JSON is different from Javascript in a few aspects, the first one being Javascript is a language with the main purpose of creating interactive and dynamic elements when developing web pages. Javascript can be implemented to run the front end of the app and the back end of the app using NodeJSON ties together the front end and back end of the application by setting a standard for the data when it is to be exchanged between the database and the UI. In the web app, there are formats placed in specific files that would require the application to follow these schemas when bringing the data in from the database to the UI so that when the data is displayed it is in proper format. This happens in the HTML file related to the page the user is looking to load.
Instances, 

### Refactoring for Improved Functionality

Instances, where the application was refactored to improve functionality, were when the application was brought over from an Express HTML layout to a Javascript/Express format. Doing this allowed the app to work with a database and had the data stored in a separate file that would not display the information regarding the trips to the user but the data was in JSON format, so it was able to be brought to the webpage while the page looped through the information. Doing this used JS for the controller and routes with the HTML pages being used to display the data to the UI.  When using this format, the schema was the most important thing to follow to get the HTML pages to load the data correctly.

## Testing

### API Testing, Endpoints, and Security

The methods used to test that the API endpoints were meeting their destination, getting, posting, and editing the information were done using the Postman tool. In Postman you are able to create a session and link to the database using the local address. From there you can facilitate the commands to populate your database, populate the user database, and provide the fields necessary for that information to make sure it meets the format in the models. Next, I had the page pulled up itself in a browser along with the browser's development tools window with console logs placed in the functions allowing me to watch the data request go to the server, and then in the terminal, the action that was taking place on the database was also visible. Using passport for authentication was helpful and allowed the logged-in function to be used across the application when implementing the admin user interface.

## Professional Growth

This course has helped me in reaching my professional goals by exposing me to not only the backend operations of the app but allowing me to use Express, Angular, Node, and other assisting tools when developing the web page. The skills I have mastered in this course would have to be the use of technologies but also troubleshooting. Version control is a big deal, especially with how often the frameworks are updated some necessary elements are not updated at the same rate requiring a specific version of another to be used so the app is operatable. I believe having high attention to detail when working out the bugs has made me more marketable as it gave me a greater understanding of how the stack works together.

