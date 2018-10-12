# A simple dockerized web app using a Node.js REST API, MongoDB, and a React.js frontend

This project was done in the context of my 3rd year as an engineering student at EISTI Pau, France.
The web app hosts a Leaflet map where it is possible to display different pinpoints (pubs, bus routes, etc.) around the area of Pau. 

## Operating

The app is separated in 3 services :
 - a pretty simple Node.js REST API exposing GET-only endpoints to different data entries
 - a MongoDB instance
 - a React.js frontend

In addition to these services, a mongo-seed container is created in order to populate the MongoDB instance upon startup. This ensure that we always have data to work with in the first place. This default data is stored in .json files in the mongo-seed directory.

## Prerequisites

All you need is having docker installed and docker-compose supporting version 3.

## Setup

First things first, clone the repo : 

`$ git clone https://github.com/ThomasCarca/dockerized-services-example.git`

cd into it :

`$ cd dockerized-services-example/`

build and run the containers :

`docker-compose up -d`

![enter image description here](https://lh3.googleusercontent.com/xWO9sgbuOuMoETbmqKtDJCUdRJeHauJnWNytL9dXCTvIouLeXikOqzbRJ34OnBtuzT6_mjzwCtyH)
The containers are now up and running, you can access the web app via http://localhost:9000/

## Notes

By default, a volume is mounted for the mongo container to be able to persist data to the host machine, therefore you can find all the data in the data/ directory, after the project has been built. 

Each service is exposed to the host machine, you can access the services via these ports :
 - server : 3000
 - mongo : 27017
 - client : 9000

A default network is created between these containers upon startup as well as a bridge to the host machine (see [docker-compose manual](https://docs.docker.com/compose/networking/) for further explanation)
