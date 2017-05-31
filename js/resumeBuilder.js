/*
This is empty on purpose! Your code to build the resume will go here.
 */
//bio
var bio = {
    'name': 'Yue Ruiying',
    'role': 'Front-end development',
    'contacts': {
        'mobile': '15158898469',
        'email': '1334993200@qq.com',
        'github': 'yueruiying',
        'twitter': '@yueruiying',
        'location': 'Hangzhou'
    },

    'welcomeMessage': 'I think I\'m on the front end!',
    'skills': [
        'Bootstrap', 'JavaScript', 'HTML', 'CSS'
    ],
    'biopic': 'images/me.jpg'
};
bio.display = function() {
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name) + HTMLheaderRole.replace('%data%', bio.role));
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedBioPic,formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $('#topContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);

    $('#footerContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);

    if (bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);
    	bio.skills.forEach(function(skill){
    		var formattedSkill = HTMLskills.replace("%data%", skill);
        	$("#skills").append(formattedSkill);
    	});
    }
}
bio.display();

//work
var work = {
    jobs: [{
        'employer': 'Hangzhou Code HSBC Technology',
        'title': 'Front-end development',
        'location': 'Hangzhou',
        'dates': '2016. September so far',
        'description': 'According to UI designers to provide the design, to achieve first-class Web interface, optimize the code and maintain good compatibility in the browser, Web front-end presentation layer and interactive design and development with the back-end, JavaScript program module development, Class library, frame preparation, with the background developers to achieve product interface and functionality, the completion of the page to maintain and optimize the performance of the site front-end.'
    }, {
        'employer': 'Hangzhou Code HSBC Technology',
        'title': 'Front-end development',
        'location': 'Hangzhou',
        'dates': '2017. September so far',
        'description': 'According to UI designers to provide the design, to achieve first-class Web interface, optimize the code and maintain good compatibility in the browser, Web front-end presentation layer and interactive design and development with the back-end, JavaScript program module development, Class library, frame preparation, with the background developers to achieve product interface and functionality, the completion of the page to maintain and optimize the performance of the site front-end.'
    }]
};
work.display = function() {

	work.jobs.forEach(function (job) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedEmployerTitle,formattedDates,formattedDescription);
	})
}
work.display();

//inname
function inName(name) {
    name = name.trim().split(' ');
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    var newName = name.join(' ');
    return newName;
}
$('#main').append(internationalizeButton);

//projects
var projects = {
    projects: [{
            'title': 'Sammple Projects 1',
            'dates': '2016',
            'description': 'After seeing the design, the first need to organize the demand program. And then conceive the program, according to the program to write html structure, and finally in accordance with the design of the standard css write style, after the completion of the overall optimization.',
            images: [
                'images/project_1.png',
                'images/project_1.png'
            ]
        },

        {
            'title': 'Sammple Projects 2',
            'dates': '2017',
            'description': 'After seeing the design, the first need to organize the demand program. And then conceive the program, according to the program to write html structure, And then use the bootstrap package to improve the overall completion of the optimization page.',
            images: [
                'images/project_2.png',
                'images/project_22.png'
            ]
        }
    ]
}
projects.display = function() {
	projects.projects.forEach(function(project){
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedTitle,formattedDates,formattedDescription);

        if (project.images.length > 0) {

        	project.images.forEach(function(image){
        		var formattedImage = HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(formattedImage);
        	});
        }
	});
}
projects.display();

//map
$('#mapDiv').append(googleMap);

//education
var education = {
    "schools": [{
            "name": "Henan Animal Husbandry Economics Institute",
            "location": "Zhengzhou",
            "degree": "Masters",
            "dates": '2011',
            "majors": ["E - commerce", "Internet of Things"],
            "url": "http://www.hnuahe.edu.cn"
        },
        {
            "name": "anyang County Electronic Vocational High School",
            "location": "Anyang",
            "degree": "Masters",
            "majors": ["Computer maintenance", 'network technology'],
            "dates": '2008',
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [{
        "title": "Front-end introductory course",
        "school": "Udacity",
        "dates": '2017',
        "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
    }]
}

education.display = function() {
	education.schools.forEach(function(edu){
        $('#education').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace('%data%', edu.name);
        var formattedDegree = HTMLschoolDegree.replace('%data%', edu.degree);
        var formattedDates = HTMLschoolDates.replace('%data%', edu.dates);
        var formattedLocation = HTMLschoolLocation.replace('%data%', edu.location);
        var formattedMajor = HTMLschoolMajor.replace('%data%', edu.majors);
        $('.education-entry:last').append(formattedName,formattedDegree,formattedDates,formattedLocation,formattedMajor);
	});
	education.onlineCourses.forEach(function(online){
		var formattedTitle = HTMLonlineTitle.replace('%data%', online.title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', online.school);
		var formattedDates = HTMLonlineDates.replace('%data%', online.dates);
		var formattedURL = HTMLonlineURL.replace('%data%', online.url);
        $('.education-entry:last').append(HTMLonlineClasses,formattedTitle,formattedSchool,formattedDates,formattedURL);
	});
}
education.display();