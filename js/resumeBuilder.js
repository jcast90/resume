
//header

var name = "Jonathan Lancaster";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Unicorn";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//bio info
var bio = {
	"name" : "Jonathan Lancaster",
	"role" : "Unicorn",
	
	"contacts" : {

		"mobile" : "870-761-1772",
		"email" : "jcast90@me.com",
		"github" : "jcast90",
		"blog" : "bla bla",
		"location" : ["San Diego, CA","Montevideo, Uruguay"]
			},
	"welcomeMsg" : "Welcome to my resume, hope you enjoy it and end up hiring me!",
	"skills" : [
		" design" , " coding" , " cooking" , " fun"
	],
	"bioPic" : "http://s20.postimg.org/ex8z8s9nh/10458861_10152615248584783_7477915124778507396_n.jpg"
};

//bio append




var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bioPic);
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(github);
var blog = HTMLblog.replace("%data%",bio.contacts.blog);
$("#topContacts").append(blog);
var city = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(location);

var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(welcomeMsg);

if(bio.skills.length > 0) {

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

//work info
var work = {
	"jobs" : [
	{
		"title" : "cook",
		"employer" : "Hilton",
		"dates" : 2016,
		"location" : "San Diego, CA",
		"desc" : "Work as a line cook.",
			},
	{
		"title" : "cook",
		"employer" : "Embassy Suites",
		"dates" : 2015,
		"location" : "Tuscaloosa, AL",
		"desc" : "Work as a Chef de Partie.",

	},
	{
		"title" : "cook",
		"employer" : "Kozys",
		"dates" : 2014,
		"location" : "Tuscaloosa, AL",
		"desc" : "Work as a Sous Chef.",
	},
	]

};

//work append
function displayWork() {
	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var city = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var desc = HTMLworkDescription.replace("%data%", work.jobs[job].desc)
	var employerTitle = employer + title + dates + city + desc;

	$(".work-entry:last").append(employerTitle);


}
}

displayWork();



//project info
var projects = {
	"projects" : [
		{		
			"title" : "Portfolio",
			"dates" : "Feb. 4 - Feb. 20 2016",
			"desc" : "I built an online portfolio mockup for when I need to present my work to future employers.",
			"img" : "http://s20.postimg.org/45bn3dknx/website.png",
		},
		{
			"title" : "Portfolio",
			"dates" : "Feb. 4 - Feb. 20 2016",
			"desc" : "I built an online portfolio mockup for when I need to present my work to future employers.",
			"img" : "http://s20.postimg.org/45bn3dknx/website.png",
		},
		]
}

//project append

    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(title);
        var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(dates);
        var desc = HTMLprojectDescription.replace("%data%", projects.projects[project].desc);
        $(".project-entry:last").append(desc);
        var img = HTMLprojectImage.replace("%data%", projects.projects[project].img);
        $(".project-entry:last").append(img);
		};   

	




//education info
var education = {
	

	"schools" : [
		{
			"name" : "John Brown University",
			"degree" : "Bachelors",
			"dates" : "2009 - 2011",
			"location" : "Siloam Springs, AR",
			"major" : ["Graphic Design"],
			
		},

		{
		 	"name" : "Shelton State Community College",
		 	"degree" : "Associates",
		 	"dates" : "2011-2014",
		 	"location" : "Tuscaloosa, AL",
		 	"major" : "Culinary Arts",
		}],

	
	"online" : [{
			"school" : "Udacity",
			"title" : "NanoDegree Front End Web Developer",
			"dates" : "Feb. 4 2016 - present",
			"url" : "https://www.udacity.com",
		}],
};
   
//education append
$("#education").append(HTMLschoolStart);
for (var school in education.schools) { 
 var name =  HTMLschoolName.replace("%data%",education.schools[school].name);
 var degree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
 var dates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
 var city = HTMLschoolLocation.replace("%data%",education.schools[school].location);
 var major = HTMLschoolMajor.replace("%data%",education.schools[school].major);
$(".education-entry:last").append(name + degree + dates + city + major);
}

$("#education").append(HTMLonlineClasses);
for (var online in education.online){
$("#education").append(HTMLschoolStart);
 var title = HTMLonlineTitle.replace("%data%",education.online[online].title);
 var school = HTMLonlineSchool.replace("%data%",education.online[online].school);
 var dates = HTMLonlineDates.replace("%data%",education.online[online].dates);
 var url = HTMLonlineURL.replace("%data%",education.online[online].url);
 $(".education-entry:last").append(title, school, dates, url);
}

$("#mapDiv").append(googleMap);

	
	




