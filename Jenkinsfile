pipeline {
    agent any

    triggers {
        githubPush() // This triggers the pipeline when a push event occurs. Check 2
    }

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
        stage('Rolling Update') {
            steps {
                script {
                    // Use docker-compose to run the container and handle rolling updates
                    sh 'docker-compose -f docker-compose.yml up -d --no-deps --build app'
                }
            }
        }
    }
}



// pipeline {
//     agent any

//     stages {
//         stage('Clone Repository') {
//             steps {
//                 git url: 'https://github.com/snkcharmer/cbasonline.git', branch: 'main'
//             }
//         }
//         stage('Build Docker Image') {
//             steps {
//                 script {
//                     docker.build('cbasonline')
//                 }
//             }
//         }
//         stage('Run Docker Container') {
//             steps {
//                 script {
//                     docker.image('cbasonline').run('-p 3000:3000')
//                 }
//             }
//         }
//     }
// }