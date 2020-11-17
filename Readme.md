## 1 Start your Docker
## 2 Run docker pull gonzalokenjo/kenjo-challenge
## 3 Create a new empty folder and in that folder create a new file named docker-compose.yml containing the following:
version: '3'
services:
  app:
    container_name: kenjo-cd-collection
    image: gonzalokenjo/kenjo-challenge
    ports:
      - '3000:3000'
    links:
      - mongo
  mongo:
    container_name: mongo
    image: mongo
    volumes:
      - ./data:/data/db
    ports:
      - '27017:27017'
## Note: some Windows users have had issues with that configuration. If that is your case, use the following docker-compose.yml instead (use this only if the previous one doesn't work for you, otherwise don't bother about this):
version: '3'
services:
  app:
    container_name: kenjo-cd-collection
    image: gonzalokenjo/kenjo-challenge
    ports:
      - '3000:3000'
    links:
      - mongo
  mongo:
    container_name: mongo
    image: mongo
    volumes:
      - mongodata:/data/db
    ports:
      - '27017:27017'
volumes:
  mongodata:
Note: be careful with the indentation because it could lead to some errors in your docker-compose.yml file.
To ensure that the file that you created is correct, run docker-compose config. If your file is correct, it will just display the content of your docker-compose.yml.
## 4 Run docker-compose up --no-start
## 5 Run docker-compose up
## 6 The app should be running now. To check that it is running properly, go to http://localhost:3000/api-docs/, it should display the API docs
## 7 CTRL+C to stop docker, use docker-compose down to stop and remove containers, networks, volumes and images created by docker-compose up