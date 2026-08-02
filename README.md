# End-to-End DevOps Pipeline for Node.js Web Application

## Project Description

This project demonstrates a complete DevOps CI/CD pipeline for a Node.js web application using GitHub, Jenkins, Docker, Docker Hub, AWS EC2, Prometheus, Grafana, Node Exporter, Bash, and Cron Jobs.

The application is automatically built, containerized, deployed, monitored, and configured with email alerts.

---

## Tech Stack

- Git & GitHub
- Jenkins
- Docker
- Docker Hub
- AWS EC2 (Amazon Linux)
- Node.js
- Prometheus
- Grafana
- Node Exporter
- Bash
- Cron Jobs

---

## Project Workflow

Developer
↓
GitHub Repository
↓
Jenkins Pipeline
↓
Docker Build
↓
Docker Hub
↓
AWS EC2 Deployment
↓
Docker Container
↓
Prometheus Monitoring
↓
Grafana Dashboard
↓
Email Alerts

---

## Setup Instructions

Clone the repository

```bash
git clone <your-github-repository-url>
```

Build Docker Image

```bash
docker build -t taskflow-app .
```

Run Docker Container

```bash
docker run -d -p 3000:3000 taskflow-app
```

---

## CI/CD Pipeline

- Code is pushed to GitHub.
- Jenkins automatically builds the project.
- Docker image is created.
- Image is pushed to Docker Hub.
- Container is deployed on AWS EC2.
- Prometheus monitors the server.
- Grafana displays dashboards.
- Email alerts are sent for high CPU usage.

---

## Monitoring

- Prometheus
- Grafana
- Node Exporter

Metrics monitored:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage

---

## Author

Brahana Ram
