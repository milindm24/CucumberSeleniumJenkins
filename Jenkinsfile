node{
	
stage('checkout'){
	git 'https://github.com/milindm24/CucumberSeleniumJenkins.git'
}

// stage('Jasmine and karma test'){
// 	sh 'npm install'
// 	sh 'ng test'
// }

stage('Maven Build and test'){
	// sh 'cd ./cucumber-skeleton/cucumber-java-skeleton/'
	sh 'mvn -f /var/lib/jenkins/workspace/CucumberSelenium@2/cucumber-skeleton/cucumber-java-skeleton/ verify'
}

stage('Copy to destination'){
	
	sh 'cp ./dist/auto-login/* /var/www/html'
	
}

}





