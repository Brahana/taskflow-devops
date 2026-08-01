pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t taskflow-devops .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker rm -f taskflow-app || exit 0'
                bat 'docker run -d --name taskflow-app -p 3000:3000 taskflow-devops'
            }
        }
    }
}