
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
		"location" : "San Diego, CA"
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


var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(welcomeMsg);

$("#header").append(HTMLskillsStart);
var skills = HTMLskills.replace("%data%",bio.skills);
$("#header").append(skills);

//work info
var work = {};

work.title = "cook";
work.employer = "Hilton";
work.dates = 2016;
work.city = "San Diego, CA";
work.desc = "Work as a line cook.";

work.title2 = "cook";
work.employer2 = "Embassy Suites";
work.dates2 = 2015;
work.city2 = "Tuscaloosa, AL";
work.desc2 = "Work as Chef de Partie";

work.title3 = "cook";
work.employer3 = "Kozys";
work.dates3 = 2014;
work.city3 = "Tuscaloosa, AL";
work.desc3 = "Work as a Sous Chef";

//work append
$("#workExperience").append(HTMLworkStart);
var employer = HTMLworkEmployer.replace("%data%", work.employer);
$(".work-entry").append(employer);
var title = HTMLworkTitle.replace("%data%", work.title);
$(".work-entry").append(title);
var dates = HTMLworkDates.replace("%data%", work.dates);
$(".work-entry").append(dates);
var city = HTMLworkLocation.replace("%data%", work.city);
$(".work-entry:last").append(city);
var desc = HTMLworkDescription.replace("%data%", work.desc);
$(".work-entry:last").append(desc);

var employer2 = HTMLworkEmployer.replace("%data%", work.employer2);
$(".work-entry").append(employer2);
var title2 = HTMLworkTitle.replace("%data%", work.title2);
$(".work-entry").append(title2);
var dates2 = HTMLworkDates.replace("%data%", work.dates2);
$(".work-entry").append(dates2);
var city2 = HTMLworkLocation.replace("%data%", work.city2);
$(".work-entry:last").append(city2);
var desc2 = HTMLworkDescription.replace("%data%", work.desc2);
$(".work-entry:last").append(desc2);

var employer3 = HTMLworkEmployer.replace("%data%", work.employer3);
$(".work-entry").append(employer3);
var title3 = HTMLworkTitle.replace("%data%", work.title3);
$(".work-entry").append(title3);
var dates3 = HTMLworkDates.replace("%data%", work.dates3);
$(".work-entry").append(dates3);
var city3 = HTMLworkLocation.replace("%data%", work.city3);
$(".work-entry:last").append(city3);
var desc3 = HTMLworkDescription.replace("%data%", work.desc3);
$(".work-entry:last").append(desc3);

//project info
var project = {		
			"title" : "Portfolio",
			"dates" : "Feb. 4 - Feb. 20 2016",
			"desc" : "I built an online portfolio mockup for when I need to present my work to future employers.",
			"img" : "http://s20.postimg.org/45bn3dknx/website.png",
}

//project append
$("#projects").append(HTMLprojectStart);
var title = HTMLprojectTitle.replace("%data%", project.title);
$(".project-entry:last").append(title);
var dates = HTMLprojectDates.replace("%data%", project.dates);
$(".project-entry:last").append(dates);
var desc = HTMLprojectDescription.replace("%data%", project.desc);
$(".project-entry:last").append(desc);
var img = HTMLprojectImage.replace("%data%", project.img);
$(".project-entry:last").append(img);

//education info
var education = {
	

	"schools" : [
		{
			"name" : "John Brown University",
			"degree" : "Bachelors",
			"dates" : "2009 - 2011",
			"city" : "Siloam Springs, AR",
			"major" : ["Graphic Design"],
			
		},

		{
		 	"name" : "Shelton State Community College",
		 	"degree" : "Associates",
		 	"dates" : "2011-2014",
		 	"city" : "Tuscaloosa, AL",
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
 var city = HTMLschoolLocation.replace("%data%",education.schools[school].city);
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



