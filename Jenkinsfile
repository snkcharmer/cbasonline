pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                sshagent (credentials: ['0f538165-1d9e-40b6-ba9d-ff08410ca498']) {
                    sh 'git clone git@github.com:snkcharmer/cbasonline.git'
                }
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