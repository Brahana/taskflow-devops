pipeline {
    agent any

    environment {
        IMAGE_NAME = "brahana/taskflow-devops"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:latest .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat 'echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat 'docker push %IMAGE_NAME%:latest'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                docker stop taskflow-app || exit 0
                docker rm taskflow-app || exit 0
                docker run -d --name taskflow-app -p 3000:3000 %IMAGE_NAME%:latest
                '''
            }
        }
    }
}