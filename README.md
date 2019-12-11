# student-mgmnt
student management as microservices

### zuul configs
zuul is using the port 9999 and using the routing config -> https://github.com/NikhilGeorge/student-mgmnt/blob/master/java/zuul-server/src/main/resources/application.properties

### eureka configs
eureka is using ther port 8761

## Steps to Run this project

### Running the Java components (zuul and eureka)
1. Clone this repo to a local directory
2. open java/zuul-server and java/eureka-server in IDE as separate projects
3. Ensure that dependencies for zuul and eureka are added. I used https://start.spring.io/ to download these 

### Running the Node code

1. Clone this repo to a local directory
2. cd eureka-helper
3. Execute `npm install` to install all dependencies 
4. cd ../student-api
5. Execute `npm install` to install all dependencies 
6. Run node app.js to run student api
7. cd ../teacher-api
8. Execute `npm install` to install all dependencies 
9. Run node app.js to run teacher api
10. Once the apis are started, ensure that they are registerd with eureka and the status us seen in eureka server

### MySQL database

1. My sql is using root user with the same password
2. Create a database test
3. Create tabels for teacher and student

## Steps to test

1. After setting up java, node and mysql components, postman can be used for testing 
2. Create get/post/put request against each of the end points using the zuul end point localhost:9999
3. zzul will route to the eureka services as per config in application.properties and response can be seen in postman
