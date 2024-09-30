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
                     withEnv([
                        'AUTH_SECRET=4cc8e466100e3b5385cb768c155a1c70',
                        'DATABASE_URL="postgresql://cbas_owner:a1WtjeYyFs5h@ep-round-limit-a7mrx7yr.ap-southeast-2.aws.neon.tech/cbas?sslmode=require'
                    ]) {
                        docker.image('cbasonline').run('-p 3000:3000')
                    }
                }
            }
        }
    }
}