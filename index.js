const projectsEl = document.querySelector('.projects');

console.log(projectsEl);

const projects = [];

// The Project object
function Project(
  name,
  course,
  courseLink,
  description,
  thumbnail,
  liveLink,
  githubLink,
  odinLink
) {
  this.name = name;
  this.course = course;
  this.courseLink = courseLink;
  this.description = description;
  this.thumbnail = thumbnail;
  this.liveLink = liveLink;
  this.githubLink = githubLink;
  this.odinLink = odinLink;
}

function addToProjects(project) {
  projects.push(project);
}

const restaurantPagePrj = new Project(
  'Restaurant at the End of the Universe',
  'Javascript',
  'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript',
  'Milliways, a five-star restaurant from the Hictchhiker\'s Guide to the Galaxy, where you get to view the Gnab Gib (Big Bang in reverse). ',
  'images/Milliwas Medium.jpeg',
  'https://sawfiz.github.io/restaurant-at-the-end-of-the-universe/',
  'https://github.com/sawfiz/restaurant-at-the-end-of-the-universe',
  'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page'
);
addToProjects(restaurantPagePrj);

const ticTacToePrj = new Project(
  'Tic-Tac-Toe',
  'Javascript',
  'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript',
  'Challenge yourself against human, computer, and unbeatable AI algorithm!',
  'images/Tic-Tac-Toe Medium.jpeg',
  'https://sawfiz.github.io/Tic-Tac-Toe/',
  'https://github.com/sawfiz/Tic-Tac-Toe',
  'https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe'
);
addToProjects(ticTacToePrj);

const libraryPrj = new Project(
  'Library',
  'Javascript',
  'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript', 
  'Manage your books.  Add, edit, remove, and track them through an intuitive web interface.',
  'images/Library Medium.jpeg',
  'https://sawfiz.github.io/Library/',
  'https://github.com/sawfiz/Library',
  'https://www.theodinproject.com/lessons/node-path-javascript-library'
);
addToProjects(libraryPrj);

const dashboardPrj = new Project(
  'A Dashboard of My Projects',
  'Int. HTML & CSS',
  'https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css',
  'See I realize my dreams here. <br>A dashboard of all the projects I worked on.',
  'images/dashboard Medium.jpeg',
  'https://sawfiz.github.io/Odin-Projects-Dashboard/',
  'https://github.com/sawfiz/Odin-Projects-Dashboard',
  'https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-admin-dashboard'
);
addToProjects(dashboardPrj);

const signUpPrj = new Project(
  'Sign-up Form',
  'Int. HTML & CSS',
  'https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css',
  'We must join with him.  We must join with Sauron! <br>Sign up now to join the Uruk-hai army!',
  'images/sign-up-form Medium.jpeg',
  'https://sawfiz.github.io/sign-up-form/',
  'https://github.com/sawfiz/sign-up-form',
  'https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form'
);
addToProjects(signUpPrj);

const calculatorPrj = new Project(
  'A calculator',
  'Foundations',
  'https://www.theodinproject.com/paths/foundations/courses/foundations',
  'A handy calculator, much like the first one you got as a kid years ago.',
  'images/calculator Medium.jpeg',
  'https://sawfiz.github.io/calculator/',
  'https://github.com/sawfiz/calculator',
  'https://www.theodinproject.com/lessons/foundations-calculator'
);
addToProjects(calculatorPrj);

const sketchPrj = new Project(
  'Etch-a-sketch',
  'Foundations',
  'https://www.theodinproject.com/paths/foundations/courses/foundations',
  'A neat toy to flex your drawing skills. <br>Remember to save some screenshots!',
  'images/Etch-a-sketch Medium.jpeg',
  'https://sawfiz.github.io/Etch-A-Sketch/',
  'https://github.com/sawfiz/Etch-A-Sketch',
  'https://www.theodinproject.com/lessons/foundations-etch-a-sketch'
);
addToProjects(sketchPrj);

const rockPrj = new Project(
  'Rock Paper Scissors',
  'Foundations',
  'https://www.theodinproject.com/paths/foundations/courses/foundations',
  'That grade-school classic. Still handy when you and your buddies find it difficult to agree on something.',
  'images/rock-paper-scissors Medium.jpeg',
  'https://sawfiz.github.io/rock_paper_scissors/',
  'https://github.com/sawfiz/rock_paper_scissors',
  'https://www.theodinproject.com/lessons/foundations-rock-paper-scissors'
);
addToProjects(rockPrj);

console.log(projects);

function displayProjects() {
  projects.forEach((project) => {
    const projectEl = document.createElement('div');
    projectEl.className = 'project';

    const nameEl = document.createElement('div');
    nameEl.className = 'project-name';
    nameEl.innerText = project.name;
    projectEl.appendChild(nameEl);

    const courseEl = document.createElement('a');
    courseEl.className = 'course';
    courseEl.href = project.courseLink;
    courseEl.innerText = project.course;
    projectEl.appendChild(courseEl);

    const descriptionEl = document.createElement('div');
    descriptionEl.className = 'project-intro';
    descriptionEl.innerHTML = project.description;
    projectEl.appendChild(descriptionEl);

    const thumbnailEl = document.createElement('img');
    thumbnailEl.className = 'project-thumbnail';
    thumbnailEl.src = project.thumbnail;
    projectEl.appendChild(thumbnailEl);
    console.log(thumbnailEl);

    const liveLinkEl = document.createElement('a');
    liveLinkEl.className = 'live-link';
    liveLinkEl.title = 'Open web page';
    liveLinkEl.innerHTML =
      '<img src="icons/icons8-external-link-48.svg" width="32px" alt="link to live site">';
    liveLinkEl.href = project.liveLink;
    liveLinkEl.target = '_blank';
    projectEl.appendChild(liveLinkEl);
    console.log('liveLink ', liveLinkEl);

    const githubLinkEl = document.createElement('a');
    githubLinkEl.className = 'github-link';
    githubLinkEl.title = 'Open github repository';
    githubLinkEl.innerHTML =
      '<img src="icons/icons8-github-64.svg" width="32px" alt="link to github">';
    githubLinkEl.href = project.githubLink;
    githubLinkEl.target = '_blank';
    projectEl.appendChild(githubLinkEl);
    console.log('githubLinkEl ', githubLinkEl);

    const odinLinkEl = document.createElement('a');
    odinLinkEl.className = 'odin-link';
    odinLinkEl.title = 'Open the Odin Project page';
    odinLinkEl.innerHTML =
      '<img src="icons/odin-64.png" height="32px" alt="link to the Odin Project">';
    odinLinkEl.href = project.odinLink;
    odinLinkEl.target = '_blank';
    projectEl.appendChild(odinLinkEl);
    console.log('odinLinkEl ', odinLinkEl);

    projectsEl.appendChild(projectEl);
  });
}

displayProjects();

// Click on a project thumbnail the live link in a new tab.
const projectEls = Array.from(document.querySelectorAll('.project'));
projectEls.forEach((projectEl) => {
  const thumbnail = projectEl.querySelector('.project-thumbnail');
  const liveLink = projectEl.querySelector('.live-link');
  thumbnail.addEventListener('click', () => {
    window.open(liveLink);
  });
});
