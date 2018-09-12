node{
	
stage('checkout'){
	git 'https://github.com/milindm24/CucumberSeleniumJenkins.git'
}

stage('Jasmine and karma test'){
	sh 'ng test'
}

stage('Maven Build and test'){
	sh 'cd ./cucumber-skeleton/cucumber-java-skeleton/'
	sh 'mvn clean install'
}


}





