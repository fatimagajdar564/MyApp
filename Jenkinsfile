pipeline {
    agent any

    environment {
        // Vous pouvez définir des variables d'environnement ici
        MY_ENV_VAR = 'example-value'
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                // Étape pour cloner votre dépôt Git
                git 'https://github.com/fatimagajdar564/MyApp.git'
            }
        }

        stage('Installation des dépendances') {
            steps {
                // Étape pour installer les dépendances si nécessaire (par exemple, pour un projet Node.js ou Java)
                sh 'npm install'  // Exemple pour un projet Node.js
                // sh 'mvn install'  // Exemple pour un projet Java Maven
            }
        }

        stage('Exécution des tests') {
            steps {
                // Étape pour exécuter les tests unitaires
                sh 'npm test'  // Exemple pour un projet Node.js
                // sh 'mvn test'  // Exemple pour un projet Java
            }
        }

        stage('Build') {
            steps {
                // Étape pour construire votre projet
                sh 'npm run build'  // Exemple pour un projet Node.js
                // sh 'mvn package'  // Exemple pour un projet Java Maven
            }
        }

        stage('Déploiement') {
            steps {
                // Étape pour déployer le projet (ex: vers un serveur ou un cloud)
                sh 'npm run deploy'  // Exemple pour un projet Node.js
                // sh 'mvn deploy'  // Exemple pour un projet Java
            }
        }
    }

    post {
        always {
            // Étapes à exécuter après chaque exécution (ex: nettoyage, notifications)
            echo 'Pipeline terminé'
        }

        success {
            // Actions en cas de succès
            echo 'Pipeline réussi'
        }

        failure {
            // Actions en cas d'échec
            echo 'Pipeline échoué'
        }
    }
}
