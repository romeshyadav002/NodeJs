* `Waterfall Model` (SDLC)
  - Requirements :- by project manager, he/she will define the project, will work with designers
  - Design :- Senior Manager/Engineering manager decide how to design, what tech stack to use, service to use
  - Development - SDE1,SDE2
  - Testing - SDET
  - Deployment - Devops Engineer
  - Maintenance - whole cycle again

* Monolith vs. MicroServices
  1. `Monolith` :- 
      - Same repositories for all of these Backend, DB connection, frontend, Authentication, Emails, Analytics
      - development speed is slow
      - scalability is not problem in small repositories
      - single deployment have to do 
      - restricted with tech stack
      - infra cost is less
      - complexity is less for small project but tough for large project
      - fault isolation is tough whole project can go down
      - testing :- need to write a end to end test case and can test in 1 go.
      - there is central ownership 
      - maintenance is high
      - rewamps is tough
      - debugging is easier


  2. `MicroServices` :- separate service for different tasks
      - different service/repo for FE, BE, Auth, Notification, Analytics, Authentication
      - development speed is high
      - scalability is good
      - separate deployment have to do for separate service
      - do not have restrictions for tech stack, different service can be made by different tech stack
      - infra cost is high
      - complexity is high for small project but less for large project
      - fault isolation is easy because a particular service will go down
      - testing :- need to write separate test cases for every service
      - there is separate ownership for each service
      - maintenance is easy
      - rewamp is easy
      - debugging :- there will be blame game between different services


* In Dev Tinder we will use Microservice
  1. Frontend service - React
  2. Backend service - NodeJs