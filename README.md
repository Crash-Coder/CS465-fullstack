## CS410 README

### Comparison of Frontend Development Approaches

Comparing the types of frontend development used in the project involves contrasting Express HTML, JavaScript, and Single Page Application (SPA) approaches.

- **Express HTML**: The Express application employs routes and controllers to handle user requests based on navigation bar selections. This approach is straightforward and suitable for simpler applications.
- **JavaScript**: In this approach, controllers and routes are still utilized, but handlebars are introduced for reusability, such as sharing header and footer information. Data is extracted from HTML files to a separate file, organized using a model structure.
- **Single Page Application (SPA)**: This approach employs components for each element of the application. Some components remain static, while others are dynamic. The SPA introduces an authentication wall and involves a separate API section for handling frontend-backend communication.

### Backend Database Choice: NoSQL MongoDB

The backend utilized a NoSQL MongoDB database due to the application's data requirements. Since the data didn't necessitate a tabular structure, MongoDB provided adaptability to changing needs without enforcing a relational database schema. The schema was defined for each database, facilitating efficient data retrieval.

### JSON vs. JavaScript and their Role in Development

JSON and JavaScript serve different purposes in development:

- **JavaScript**: A programming language for creating interactive web elements, both frontend and backend using tools like Node.js.
- **JSON**: A data interchange format, structuring and transmitting data between UI and database. It's not a programming language and doesn't support executables.

JSON bridges frontend and backend development by standardizing data exchange. It sets data format standards for proper transmission between the UI and database. This ensures the displayed data adheres to the correct format. JSON schemas are followed during data exchange, often defined in HTML files.

### Refactoring for Improved Functionality

Refactoring from Express HTML to JavaScript/Express format improved functionality. The application interfaced with a database, storing data in separate JSON files. These files facilitated data retrieval in JSON format for UI display. The transition utilized JS for controllers/routes, and HTML for data display, with schema adherence being crucial.

## Testing

### API Testing, Endpoints, and Security

Testing API endpoints involves methods like GET, POST, and EDIT, which were tested using tools like Postman. Viewing requests in browsers' development tools and terminals allowed monitoring of server interactions. Passport authentication facilitated logged-in functionality, especially for the admin user interface.

## Professional Growth

This course contributed significantly to my professional goals. It exposed me to backend operations and tools like Express, Angular, and Node. Mastering troubleshooting and version control, especially for framework compatibility, enhanced my skills. Attention to detail while debugging improved my understanding of how the stack functions collectively.

