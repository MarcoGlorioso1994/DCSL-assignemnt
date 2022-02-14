
# Nomoko Assignment

Express project with two hhtp endpoints. 
The first one stores the data from a csv file into an instance of MySql database.
The second one receives two query params lat and long and return the estimated price for the specific coordinates.
THE PROJECT NEEDS A MYSQL INSTANCE


## Environment components

To run this project, you will need to add the following components: 

`MySQL 8.0`

`MySQL Workbench(UI client option)`


## API Reference

#### To store csv values to MySql DB

```http
  GET /init
```

#### Get Price

```http
  GET /price?lat={lat}&long={long}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `lat` | `double` | **Required**. Latitude value. Range between -90/90  |
| `long` | `double` | **Required**. Longitude value. Range between -180/180  |



## Appendix

The project uses a simple implementation of linear interpolation.
The estimation of the new price is done using the @turf/turf npm library. 


## Authors

- [@MarcoGlorioso](https://www.linkedin.com/in/marco-glorioso-0b7603123/)


## Deployment

The project could be deployed on cloud. Currently, it is only for a local usage. 


## Run Locally

Clone the project

```bash
  git clone https://glorius@bitbucket.org/marcoglorioso1994/nomoko.git
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
## Swagger Documentation

Local usage: http://127.0.0.1/api-docs/

