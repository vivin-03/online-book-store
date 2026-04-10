pipeline {
    agent any

    environment {
        IMAGE_NAME = "vivin0905/online-book-store"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/vivin-03/online-book-store.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    bat '''
                    echo %PASS% | docker login -u %USER% --password-stdin
                    docker push %IMAGE_NAME%:latest
                    '''
                }
            }
        }
    }
}
