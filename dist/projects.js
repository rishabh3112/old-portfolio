var projects = [
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
                    + "<img src='assets/"+ project.imageName +"'>"
                    + "</div>"
                    + "<h1 class='project-name'>"+project.name+"</h1>"
                    + "<p class='mdc-typography--body1'>"+project.description+"</p>"
                    + '<div class="mdc-card__actions">'
                    + '<div class="mdc-card__action-buttons">'
                    + '<a href="' + project.projectURL + '" class="mdc-button mdc-card__action mdc-card__action--button mdc-button--outlined">'
                    + 'Project Link </a>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
    
    projectsNode.innerHTML += projectHTML;
});