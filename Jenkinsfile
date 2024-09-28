pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/snkcharmer/cbasonline.git', branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('cbasonline')
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    docker.image('cbasonline').run('-p 3000:3000')
                }
            }
        }
    }
}