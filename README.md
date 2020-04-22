# DevopsFinalProject
A simple Todo application , containarized and  deployed on EKS cluster using Terraform



Team Members:
Name                 | NUID
-------------------- | ----------
Akshay Mahesh Bhusare | 001443548
Harshitha SomaSundar | 001497986

GitHub URL: https://github.com/HarshithaSomaSundar/DevopsFinalProject

# Project Objective

Create a scalable micro-service based ToDo application to keep a track of and update ToDo’s

Dockerize the applications and deploy it on a Kubernetes Cluster

Monitor the application performance

# Use Cases
A TODO application to set a due date and an option to mark it complete/Pending.

Update a TODO’s description or due date if necessary.

Retrieve a TODO to check the status.

Delete a TODO once it’s complete.

# Development Technique
Followed Pair Programming Technique

Developed and reviewed application development and deployment 

Monitored and tracked progress [ Jira Dashboard ]


# Technologies Used

![Technologies](https://github.com/HarshithaSomaSundar/DevopsFinalProject/blob/master/Technologies.png)




# Architecture Diagram



### Application Architecture Diagram:
![Application Architecture Diagram](https://github.com/HarshithaSomaSundar/DevopsFinalProject/blob/master/Application%20Architecture%20Diagram.png)


### Infrastructure Architecture Diagram:
![Infrastructure Architecture Diagram](https://github.com/HarshithaSomaSundar/DevopsFinalProject/blob/master/Infrastructure%20Architecture%20Diagram.png)





# Application Monitoring

### Prometheus DashBoard:
![Prmetheus](https://github.com/HarshithaSomaSundar/DevopsFinalProject/blob/master/Prometheus.jpg)

### Grafana Dashboard :
Username: admin

Password: admin

* Click on the + and then on Import

* Enter 10000 in the box and import the dashboard

![Grafana](https://github.com/HarshithaSomaSundar/DevopsFinalProject/blob/master/Grafana%20Dashboard.png) 








	 	 	 	
# Running the code

We created a shell script which is responsible to do the following tasks:

Create Kubernetes cluster using terraform 	

Deploy backend application

Create a service for backend

Deploy frontend application

Create a service for frontend

Create a Prometheus dashboard

Create a Grafana dashboard



### Steps to follow:
* Move to Infrastructure > Cluster
 	
* Run the deployApp.sh script
 	
* Copy the backend service url
 	
* Go to AWS Route53 and create a hosted zone with domain 	“csye6225-su19-bhusarea.me” 
 	
* Add a Record set with an Alias to the backend service url (the LoadBalancer url can be selected from the dropdown)
 	
* Save the changes
 	
* Access the frontend load balancer url to run the application
 	
* Prometheus can be accessed with its service url
 	
* Grafana can be accessed with it’s service url



