var skills = document.getElementById("skill-stack");

var mq = window.matchMedia( "(max-width: 600px)" );
if (mq.matches) {
    skills.innerHTML=`<img
    src="https://skillicons.dev/icons?i=html,css,js,jquery,react"
  /><br><br><img src="https://skillicons.dev/icons?i=nodejs,express,vscode,bootstrap,git" />`
}

// https://skillicons.dev/icons?i=html,css,js,jquery,react,nodejs,express,vscode,bootstrap,git,postgres