# End-to-End DevOps Pipeline for a Node.js Web Application

## Project Overview

This project demonstrates a complete DevOps CI/CD pipeline for deploying a Node.js web application using GitHub, Jenkins, Docker, AWS EC2, Prometheus, Grafana, and Cron Jobs.

The pipeline automates application build, Docker image creation, deployment to AWS EC2, infrastructure monitoring, alerting through email notifications, and scheduled backup automation.

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
- Bash Shell Script
- Cron

---

## Project Architecture

Developer
↓
GitHub Repository
↓
Jenkins CI/CD
↓
Build Docker Image
↓
Push Image to Docker Hub
↓
Deploy Container on AWS EC2
↓
Monitor using Prometheus + Grafana
↓
Email Alerts
↓
Backup Automation using Cron

---

## CI/CD Pipeline

1. Developer pushes code to GitHub.
2. Jenkins automatically pulls the latest source code.
3. Jenkins builds a Docker image.
4. Docker image is pushed to Docker Hub.
5. Application container is deployed on AWS EC2.
6. Prometheus collects system metrics.
7. Grafana visualizes CPU, Memory, Disk, and Network usage.
8. Email alerts are generated when CPU usage crosses the threshold.
9. Cron executes scheduled backup jobs.

---

## Monitoring

Implemented using:

- Prometheus
- Node Exporter
- Grafana Dashboard
- Email Alert Notifications

Monitored Metrics:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic

---

## Backup Automation

A Bash shell script (backup.sh) was created.

Cron Job:

```bash
*/5 * * * * /home/ec2-user/backup.sh
```

The backup runs automatically every 5 minutes.

---

## Docker Commands

Build Image

```bash
docker build -t taskflow-devops .
```

Run Container

```bash
docker run -d -p 3000:3000 taskflow-devops
```

Check Running Containers

```bash
docker ps
```

---

## Jenkins Pipeline

- Pull Source Code
- Build Docker Image
- Push Docker Image
- Deploy Container

---

## Future Improvements

- Kubernetes Deployment
- Terraform Infrastructure
- AWS CloudWatch Integration
- SSL/HTTPS
- Auto Scaling

---

## Author

Brahana Ram
