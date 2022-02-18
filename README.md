
# DCSL Assignment

NodeJS project with Express framework. The project implements three endpoints. The first accepts the upper-right coordinates of the rectangular world and will create a planet instance. The second one accepts the orientation, start grid position and the path of a robot. The endpoint is used to save one robot. Multiple requests will give you the possibility to save multiple robots. The third endpoint is a get endpoint to get the final positions of each robot. It will return the final position of all created robots. 

## Appendix

The project implement an API REST to create the planet and to return the expected results related to the final position of the robots. 


## API Reference

#### To store csv values to MySql DB

```http
  POST /planets
```

| Parameter | Type     | Location | Description         |
| :-------- | :------- | :----|:------------------------- |
| `upperBounds` | `string` | body |  **Required** coordinates for the upper-right grip point |                                           

```http
  POST /robots
```

| Parameter | Type     | Location | Description         |
| :-------- | :------- | :--------|:------------------------- |
| `coordinates` | `string` | body |  **Required** start coordinates and orientation of the robot | 
| `path` | `string` | body |  **Required** path that will be executed by the robot | 

#### Get final robots positions and orientations

```http
  GET /robots/positions
```





## Authors

- [@MarcoGlorioso](https://www.linkedin.com/in/marco-glorioso-0b7603123/)


## Deployment

The service could be deployed on cloud. Adding a pipelien the service could be deploy quickly on an appengine or a serverless cloud function. 


## Run Locally

Clone the project

```bash
  git clone https://github.com/MarcoGlorioso1994/DCSL-assignemnt.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server 

```bash
  npm run start
```

Start the server with Nodemon

```bash
  npm run start:dev
```

Run Mocha test 

```bash
  npm run test
```

Run Mocha test with XML results for DevOps usages

```bash
  npm start:test
```
## Swagger Documentation

To use locally:  http://127.0.0.1:4000/api-docs

