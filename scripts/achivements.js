var achievements = [
    {
        'name': "Mean Stack Jumpstart",
        'organisation': 'Microsoft Virtual Academy',
        'certificateURL': "assets/pdfs/mva_mean_stack_jumpstart.pdf",
        'description': "A course to get you started with MEAN stack <br> which is based on "
                     + "MongoDB Express AngularJS and Nodejs.<br> MEAN Stack is purely based on javascript "
                     + "and leads to fast development and fast web applications"
    },
    {
        'name': 'Hackerrank C++ Gold Badge',
        'organisation': 'Hackerrank',
        'description': "A language proficiency being awarded by hackerrank on account of 250 points."
    },
    {
        'name': "JEE Mains",
        'organisation': "CBSE",
        'certificateURL': "assets/pdfs/jee_mains.pdf",
        'description': "Annual Examination conducted by CBSE for Science Stream students. <br>"
                     + " Examination was given by approx. 13 lakh students in which is was in <b> top 1% </b> students all over India"
    },
    {
        "name" : "Class 12 Board Examination",
        "organisation" : "CBSE",
        "certificateURL": "assets/pdfs/cbse_board.pdf",
        "description": "Senior Secondary class 12th examinations conducted by CBSE. <br>"
                     + " Secrured <b> 94.6% </b> marks and was <b>School Topper</b> in science stream"
    },
    {
        "name" : "JEE Advanced 2018",
        "organisation" : "IIT kanpur",
        "certificateURL" : null,
        "description" : "Cleared JEE Advanced annually conducted by IITs. <br>Considered to be one of the most tough examination all over the world."
    }
];

const achievementsNode = document.querySelector('#achievementsContainer');
achievements.forEach(achievement => {
    if(achievement.certificateURL){
        var achievementHTML = "<div class='mdc-card project-card'>"
                        + "<h1 class='project-name'>"+achievement.name+"</h1>"
                        + "<i><h4>"+achievement.organisation+"</h4></i>"
                        + "<p class='mdc-typography--body1'>"+achievement.description+"</p>"
                        + '<div class="mdc-card__actions">'
                        + '<div class="mdc-card__action-buttons">'
                        + '<a href="' + achievement.certificateURL + '" class="mdc-button mdc-card__action mdc-card__action--button mdc-button--raised">'
                        + '<i class="material-icons mdc-button__icon" aria-hidden="true">picture_in_picture_alt</i> Certificate Link </a>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
    }
    else{
        var achievementHTML = "<div class='mdc-card project-card'>"
                        + "<h1 class='project-name'>"+achievement.name+"</h1>"
                        + "<i><h4>"+achievement.organisation+"</h4></i>"
                        + "<p class='mdc-typography--body1'>"+achievement.description+"</p>"
                        + '</div>';
    }
    
    achievementsNode.innerHTML += achievementHTML;
});