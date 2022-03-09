# Basic CRUD app with Vue and Python/Flask

This is a basic CRUD app built with Python/Flask and VueJS. It allows the user to create a list of books that they have read and have not read.

## Technologies Used

1. Vue / JavaScript
2. CSS / HTML
3. Bootstrap / Bootstrap Vue
4. Python / Flask / Axios
5. Node / NPM

### Frontend

Vue.js is an open-source JavaScipt framework used for building user interfaces, and takes a lot from both React and Angular.

To connect the front-end client-side Vue app with the back-end server Flask app, we use the axios library to send AJAX (Asynchronous JavaScript and XML) requests. With Ajax, web applications can send and retrieve data from a back-end server asynchronously (in the background) without interfering with the display and behaviour of the existing page.

For styling, the Bootstrap Vue library is used. Bootstrap Vue is used because regular Bootstrap uses jQuery, which should generally be avoided in conjuction with Vue since Vue use the Virtual Dom to update the DOM, and wouldn't know about any direct changes to the DOM that jQuery changes.

### Backend

The backend has a RESTful API, powered by Python and Flask for a single resource. It follows basic RESTful design principles using standard HTTP verbs (GET, POST, PUT, and DELETE.)

Flask is a web framework for Python, especially useful in creating RESTful API's. We need Flask-CORS as well (Cross Origin Resource Sharing) to make cross-origin requests (requests that originte from a different IP address or domain name, for example.) Please note that this is not a production build, it allows requests from any domain, whereas on a production instance, it should only allow requests from where the front-end application is hosted.
