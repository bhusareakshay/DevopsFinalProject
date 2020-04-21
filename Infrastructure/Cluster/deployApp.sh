#!/usr/bin/env bash

# Terraform
printf -- '\033[32m *** Terraform Setup  *** \033[0m\n';
printf -- '\033[33m *** Intializing Terraform *** \033[0m\n';
terraform init &&
printf -- '\033[33m *** Planning Terraform *** \033[0m\n';
terraform plan &&
printf -- '\033[33m *** Applying Terraform*** \033[0m\n';
terraform apply --auto-approve &&

# Kubectl Setup
printf -- '\033[32m *** Kubectl Setup  *** \033[0m\n';
printf -- '\033[33m *** Saving config map in local *** \033[0m\n';
terraform output config_map_aws_auth > config_map_aws_auth.yaml &&
printf -- '\033[33m *** Appending kubeconfig to local *** \033[0m\n';
terraform output kubeconfig > ~/.kube/config &&
printf -- '\033[33m *** Applying configmap *** \033[0m\n';
kubectl apply -f config_map_aws_auth.yaml &&

# Apply Backend Deployments
printf -- '\033[32m *** Backend Deployments  *** \033[0m\n';
printf -- '\033[33m *** Backend Deployment-1: toyswap-register *** \033[0m\n';
kubectl apply -f ../Deployment/mydeploy-backend.yaml &&

# Apply Backend Services
printf -- '\033[32m *** Backend Services  *** \033[0m\n';
printf -- '\033[33m *** Backend Service-1: toyswap-register *** \033[0m\n';
kubectl apply -f ../Deployment/myservice-backend.yaml &&

# Get External-IPs
printf -- '\033[32m *** Get SVCs URLS  *** \033[0m\n';
printf -- '\033[33m *** Loading . . . *** \033[0m\n';
sleep 15 &&
printf -- '\033[33m *** Get SVC Backend Service-1 *** \033[0m\n';
kubectl get svc backend &&

# Apply Frontend Deployments
printf -- '\033[32m *** Frontend Deployments  *** \033[0m\n';
printf -- '\033[33m *** Deploying Frontend *** \033[0m\n';
kubectl apply -f ../Deployment/mydeploy-frontend.yaml &&

# Apply Frontend Services
printf -- '\033[32m *** Frontend Services  *** \033[0m\n';
printf -- '\033[33m *** Deploying Frontend Services *** \033[0m\n';
kubectl apply -f ../Deployment/myservice-frontend.yaml &&

# Get External-IPs
printf -- '\033[32m *** Get Frontend SVCs URLS  *** \033[0m\n';
printf -- '\033[33m *** Loading . . . *** \033[0m\n';
sleep 15 &&
kubectl get svc frontend &&

# Prometheus Dashboard Setup
printf -- '\033[32m *** Prometheus Dashboard Setup  *** \033[0m\n';
printf -- '\033[33m *** Create Namespace Monitoring *** \033[0m\n';
kubectl create namespace monitoring &&
printf -- '\033[33m *** Creating clusterRole *** \033[0m\n';
kubectl create -f ../Monitoring/clusterRole.yaml &&
printf -- '\033[33m *** Creating configMap  *** \033[0m\n';
kubectl create -f ../Monitoring/config-map.yaml &&
printf -- '\033[33m *** Deploying prometheus *** \033[0m\n';
kubectl create -f ../Monitoring/prometheus-deployment.yaml &&
printf -- '\033[33m *** Retrieving deployments in monitoring namespace *** \033[0m\n';
kubectl get deployments --namespace=monitoring &&
printf -- '\033[33m *** Deploying prometheus service *** \033[0m\n';
kubectl create -f ../Monitoring/prometheus-service.yaml --namespace=monitoring &&
printf -- '\033[33m *** Retrieving service in monitoring namespace  *** \033[0m\n';
kubectl get svc --namespace=monitoring &&


# Grafana Dashboard Setup 
printf -- '\033[32m *** Grafana Dashboard Setup  *** \033[0m\n';
printf -- '\033[33m *** Creating config for grafana *** \033[0m\n';
kubectl create -f ../Monitoring/grafana-datasource-config.yaml &&
printf -- '\033[33m *** Deploying grafana *** \033[0m\n';
kubectl create -f ../Monitoring/grafana-datasource-deploy.yaml &&
printf -- '\033[33m *** Deploying grafana service *** \033[0m\n';
kubectl create -f ../Monitoring/grafana-datasource-service.yaml &&
printf -- '\033[33m *** Retrieving service in monitoring namespace *** \033[0m\n';
kubectl get svc --namespace=monitoring &&



printf -- '\033[32m *** Completed *** \033[0m\n';
