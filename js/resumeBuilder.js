var bio = {
    "name" : "Huayu Heh",
    "role" : "Front-End Developer",
    "welcomeMassage" : "Welcome to see my resume",
    "biopic" : "images/self_portrait.jpg",
    "contain" : {
        "mobile" : "415-999-0504",
        "email" : "hanaheh128@gmail.com",
        "github" : "hanaheh",
        "website" : "huayuheh.com",
        "location" : "San Francisco"
    },
    "skills" : [
        "HTML","CSS", "JavaScript","Highcharts JS", "Bootstrap", "Xcode", "Google map API"
    ]
};


bio.display = function(){
    // headline
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedName, formattedRole);
    //contacts
    var formattedMobile = HTMLmobile.replace("%data%",bio.contain.mobile);
    var linkEmail = '<a class="link" href="mailto:' + bio.contain.email + '">';
    var formattedEmail = HTMLemail.replace("%data%",linkEmail + bio.contain.email + '</a>');
    var linkGithub = '<a class="link" href="http://github.com/' + bio.contain.github + '" target="blank">';
    var formattedGithub = HTMLgithub.replace("%data%",linkGithub + bio.contain.github + "</a>");
    var linkWebsite = "<a class='link' href='http://" + bio.contain.website + "' target='blank'>";
    var formattedWebsite = HTMLwebsite.replace("%data%",linkWebsite + bio.contain.website + "</a>");
    var formattedLocation = HTMLlocation.replace("%data%",bio.contain.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedWebsite, formattedLocation);
    // Picture and Welcome Msg
    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMassage);
    $("#header").append(formattedPic, formattedWelcomeMsg);

    //skills
    $("#header").append(HTMLskillsStart);
    for(i = 0; i < bio.skills.length; i ++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

var work = {
    "jobs" : [
        {
            "employer" : "Jiangyun Educational Foundation",
            "title" : "Freelance Graphic and Web Designer",
            "location" : "Online",
            "dates" : "June 2013 - Aug. 2013",
            "description" :"Collaborated with directors to determine the idea for a logo, business card and website. Designed 3 different logo styles and layouts to present to the client. Communicated closely with clients and used feedback to create the final vision."
        },{
            "employer" : "Yuanlin Cheng, D.Litt.",
            "title" : "Freelance Graphic Designer and Illustrator",
            "location" : "Taipei, Taiwan",
            "dates" : "June 2012 - Aug. 2012",
            "description" :"Set type and layout for a textbook on teaching reading skills in Mandarin. Drew 15 black and white line-drawing illustrations based on articles. Created visual presentation with illustrations, infographics and photos. Brainstormed to design posters that publicized a Chinese reading project."
        }
    ]
};

work.display = function(){
    work.jobs.forEach(function(job){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        var formattedEmployerAll = formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;
        $(".work-entry:last").append(formattedEmployerAll);

    });
}
work.display();