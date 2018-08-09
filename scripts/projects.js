var projects = [
    {
        'name': "webpack-scaffold-pwa",
        'projectURL': "https://github.com/sendilkumarn/webpack-scaffold-pwa",
        'imageName': 'webpack.png',
        'description': "A plugin for <code>webpack-cli init</code> to quickly scaffold a basic PWA app with 95+ lighthouse score"
    },
    {
        'name': "Codin' Geek",
        'projectURL': "/blog",
        'imageName': "github.png",
        'description':"My blog made on Jekyll, implemented in material design"
    },
    {
        'name': 'Restro dash',
        'projectURL': "http://restro-dash.herokuapp.com/",
        'imageName': 'main.jpg',
        'description': 'An open api website that let developers get json for there restaurant.<br>I implemented <b>front end</b> for it.'
    },
    {
        'name': 'Automated Coding environment generation',
        'projectURL': "http://github.com/rishabh3112/codechef",
        'imageName': "github.png",
        'description': 'Bash script based environment that let you focus on problem than on seting up environment.'
    },
    {
        'name': "Airbook",
        'projectURL': "https://github.com/rishabh3112/airbook",
        'imageName': "airbook.PNG",
        'description': "Computer Science project under Class 12 CBSE Curricullum"
    }
];

const projectsNode = document.querySelector('#projectsContainer');
projects.forEach(project => {
    var projectHTML = "<div class='mdc-card project-card'>"
                    + "<div class='img-container'>"
                    + "<img class='project-image' src='assets/"+ project.imageName +"'>"
                    + "</div>"
                    + "<h1 class='project-name'>"+project.name+"</h1>"
                    + "<p class='mdc-typography--body1'>"+project.description+"</p>"
                    + '<div class="mdc-card__actions">'
                    + '<div class="mdc-card__action-buttons">'
                    + '<a href="' + project.projectURL + '" class="mdc-button mdc-card__action mdc-card__action--button mdc-button--raised">'
                    + 'Project Link </a>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
    
    projectsNode.innerHTML += projectHTML;
});