/*
var name = "Jonathan Lancaster";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Unicorn";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/
var bio = {
	"name" : "Jonathan Lancaster",
	"role" : "Unicorn",
	"contacts" : {
		"mobile" : "870-761-1772",
		"email" : "jcast90@me.com",
		"github" : "jcast90",
		"location" : "San Diego, CA",
	},
	"welcomeMessage" : "Welcome to my resume, hope you enjoy it and end up hiring me!",
	"skills" : [
		"design" , "coding" , "cooking" , "fun"
	],



$("#main").prepend(bio);
