pipeline
{
    agent any
    
    environment{
        dockerImage=''
        registery='minalabib07/front_image'
        registerycredentials='docker_hub_cred'
    }
    
    stages{
        stage('clean'){
             steps{
             script{
                    sh'docker rmi minalabib07/front_image'
                    }
                }
            }
        
        stage('build Docker image'){
            steps{
                script{
                    dockerImage= docker.build registery
                }
            }
        }
        
        stage('uploading image'){
            steps{
                script{
                    docker.withRegistry( '', registerycredentials ) {
                    dockerImage.push()
                    }
                }
            }
        }
        stage('after clean'){
             steps{
             script{
                    sh'docker rmi $(docker images -f "dangling=true" -q)'
                    }
                }
            }
            
    }
    
post {
    failure {
        mail to: 'mina.labib00@eng-st.cu.edu.eg , mohamed.ahmedmoreb@gmail.com , marimnaser813@gmail.com',
             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
             body: "Something is wrong with ${env.BUILD_URL}"
            }
    
    success {
        mail to: 'marimnaser813@gmail.com',
             subject: "Pipeline done: ${currentBuild.fullDisplayName}",
             body: "Done!!"
            }
    }
}

