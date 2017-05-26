/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio

var bio = {
	'name': 'Yue Ruiying',
	'role': 'Front-end development',
	'contacts':{
		'mobile':'15158898469',
		'email':'1334993200@qq.com',
		'github':'yueruiying',
		'twitter':'@yueruiying',
		'location':'Hangzhou'
	},
	
	'welcomeMessage':'I think I\'m on the front end!',
	'skills': [
		'Bootstrap','JavaScript','HTML','CSS'
	],
	'bioPic':'images/me.jpg'
};

function displayBio(){

	$('#header').prepend(HTMLheaderName.replace('%data%',bio.name) + HTMLheaderRole.replace('%data%',bio.role));
	$('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
	$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
	$('#topContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
	$('#topContacts').append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
	$('#topContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));
	$('#header').append(HTMLbioPic.replace('%data%',bio.bioPic));
	$('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage))

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}

displayBio();

//work

var work = {
	jobs: [
		{
		'employer':'Hangzhou Code HSBC Technology',
		'title':'Front-end development',
		'location':'Hangzhou',
		'dates':'2016. September so far',
		'description':'According to UI designers to provide the design, to achieve first-class Web interface, optimize the code and maintain good compatibility in the browser, Web front-end presentation layer and interactive design and development with the back-end, JavaScript program module development, Class library, frame preparation, with the background developers to achieve product interface and functionality, the completion of the page to maintain and optimize the performance of the site front-end.'
		},{
		'employer':'Hangzhou Code HSBC Technology',
		'title':'Front-end development',
		'location':'Hangzhou',
		'dates':'2016. September so far',
		'description':'According to UI designers to provide the design, to achieve first-class Web interface, optimize the code and maintain good compatibility in the browser, Web front-end presentation layer and interactive design and development with the back-end, JavaScript program module development, Class library, frame preparation, with the background developers to achieve product interface and functionality, the completion of the page to maintain and optimize the performance of the site front-end.'
		}
	]
};


function displayWork(){

	for (var job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}

}

displayWork();

//inname

function inName(name){
	name = name.trim().split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	var newName = name.join(' ');
	return newName;
}

$('#main').append(internationalizeButton);


//projects


var projects = {
	projects: [
		{
			'title':'Sammple Projects 1',
			'dates':'2016',
			'description':'After seeing the design, the first need to organize the demand program. And then conceive the program, according to the program to write html structure, and finally in accordance with the design of the standard css write style, after the completion of the overall optimization.',
			images: [
			'images/project_1.png',
			'images/project_1.png'
			]
		},

		{
			'title':'Sammple Projects 2',
			'dates':'2017',
			'description':'After seeing the design, the first need to organize the demand program. And then conceive the program, according to the program to write html structure, And then use the bootstrap package to improve the overall completion of the optimization page.',
			images: [
			'images/project_2.png',
			'images/project_22.png'
			]
		}
	]
}

projects.display = function(){
	for(project in projects.projects){
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%',projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%',projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%',projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace('%data%',projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}

}
projects.display();


//map

$('#mapDiv').append(googleMap);


//education

var education = {
	"schools":[
		{
			"name": "Henan Animal Husbandry Economics Institute",
			"location": "Zhengzhou",
			"degree": "BA",
			"dates": 2011,
			"major": ["compSci","French"],
			"url": "http://www.hnuahe.edu.cn"
		},
		{
			"name": "Huaxian County Electronic Vocational High School",
			"location": "Anyang",
			"degree": "Masters",
			"major": ["Compsci"],
			"dates": 2008,
			"url":"http://example.com"
		}
	],
	"onlineCourses":[
		{
			"title": "Front-end introductory course",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
		}
	]
}

function displayEducation(){
	for(edu in education.schools){
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%',education.schools[edu].name);
		$('.education-entry:last').append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace('%data%',education.schools[edu].degree);
		$('.education-entry:last').append(formattedDegree);
		var formattedDates =  HTMLschoolDates.replace('%data%',education.schools[edu].dates);
		$('education-entry:last').append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%',education.schools[edu].location);
		$('.education-entry:last').append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace('%data%',education.schools[edu].major);
		$('.education-entry:last').append(formattedMajor);
	}
	for(online in education.onlineCourses){
		$('.education-entry:last').append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[online].title);
		$('.education-entry:last').append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[online].school);
		$('.education-entry:last').append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace('%data%',education.onlineCourses[online].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedURL = HTMLonlineURL.replace('%data%',education.onlineCourses[online].url);
		$('.education-entry:last').append(formattedURL);
	}
}

displayEducation();
