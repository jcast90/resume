//bio info
var bio = {

    "name": "Jonathan Lancaster",
    "role": "Unicorn",
    "location": "Montevideo, Uruguay",

    "contacts": {

        "mobile": "870-761-1772",
        "email": "jcast90@me.com",
        "github": "jcast90",
        "location": "San Diego, CA",

    },
    "welcomeMessage": "Welcome to my resume, hope you enjoy it and end up hiring me!",
    "skills": [
        " Design", " HTML", " CSS", " JavaScript"
    ],
    "biopic": "http://s20.postimg.org/ex8z8s9nh/10458861_10152615248584783_7477915124778507396_n.jpg"
};

//bio append

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(biopic);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(email);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(github);
    var city = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(city);
    var welcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMessage);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

//education info
var education = {


    "schools": [{
            "name": "John Brown University",
            "degree": "Bachelors",
            "dates": "2009 - 2011",
            "location": "Siloam Springs, AR",
            "majors": ["Graphic Design"],
            "url": "http://www.jbu.edu"
        },

        {
            "name": "Shelton State Community College",
            "degree": "Associates",
            "dates": "2011-2014",
            "location": "Tuscaloosa, AL",
            "majors": ["Culinary Arts"],
            "url": "http://www.sheltonstate.edu"
        }
    ],


    "online": [{
        "school": "Udacity",
        "title": "NanoDegree Front End Web Developer",
        "date": "Feb. 4 2016 - present",
        "url": "https://www.udacity.com",
    }],
};

//education append
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        var name = HTMLschoolName.replace("%data%", education.schools[school].name);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var city = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var majors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var url = HTMLschoolUrl.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(name + degree + dates + city + majors + url);
    }

    $("#education").append(HTMLonlineClasses);
    for (var online in education.online) {
        $("#education").append(HTMLschoolStart);
        var title = HTMLonlineTitle.replace("%data%", education.online[online].title);
        var school = HTMLonlineSchool.replace("%data%", education.online[online].school);
        var date = HTMLonlineDates.replace("%data%", education.online[online].date);
        var url = HTMLonlineURL.replace("%data%", education.online[online].url);
        $(".education-entry:last").append(title, school, date, url);
    }
};

education.display();

//work info
var work = {
    "jobs": [{
        "title": "cook",
        "employer": "Hilton",
        "dates": "2016",
        "location": "San Diego, CA",
        "description": "Work as a line cook.",
    }, {
        "title": "cook",
        "employer": "Embassy Suites",
        "dates": "2015",
        "location": "Tuscaloosa, AL",
        "description": "Work as a Chef de Partie.",

    }, {
        "title": "cook",
        "employer": "Kozys",
        "dates": "2014",
        "location": "Tuscaloosa, AL",
        "description": "Work as a Sous Chef.",
    }]

};



//work append
work.display = function() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var city = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var employerTitle = employer + title + dates + city + description;

        $(".work-entry:last").append(employerTitle);
    }
};

work.display();



//project info

var projects = {

    "projects": [{
            "title": "Portfolio",
            "dates": "Feb. 4 - Feb. 20 2016",
            "description": "I built an online portfolio mockup for when I need to present my work to future employers.",
            "images": ["http://s20.postimg.org/45bn3dknx/website.png"],
        },


    ],
};


//project append
projects.display = function() {

    for (i in projects.projects) {
        var project = projects.projects[i];


        $("#projects").append(HTMLprojectStart);

        var title = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(title);
        var dates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(dates);
        var description = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(description);


        project.images.forEach(function(image) {
            var images = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(images);
        });

    }
};

projects.display();

$("#mapDiv").append(googleMap);