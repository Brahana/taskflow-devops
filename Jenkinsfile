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
                    bat '''
                    docker logout
                    docker login -u %DOCKER_USER% -p %DOCKER_PASS%
                    '''
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
                docker stop taskflow-app
                docker rm taskflow-app
                docker run -d --name taskflow-app -p 3000:3000 %IMAGE_NAME%:latest
                '''
            }
        }
    }

    post {
        always {
            bat 'docker logout'
        }
    }
}