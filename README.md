# About
This project demonstrates basic routing using HAProxy load-balancer. It has two web-servers (Node.js and Flask) and routes depending on request URL. Both servers and HAProxy instance can be run with Docker Compose. 

If a request sent to localhost:4444/staj, Flask responds with "Hello World!" message. If it goes to localhost:5555/staj, Node.js responds. HAProxy runs on port 8888 so if request goes to /flask, it routes to localhost:4444/staj and localhost:5555/staj for /nodejs. 

You should switch to root directory of the project before running those commands. 

    docker-compose up
    curl localhost:4444/staj
        Hello World from Flask!
    curl localhost:5555/staj
        Hello World from Node.JS!
    curl localhost:8888/flask
        Hello World from Flask!
    curl localhost:8888/nodejs
        Hello World from Node.JS!
