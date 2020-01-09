import React from 'react';

import recepiesImg1 from '../assets/projects-imgs/recepies-img-1.png';
import recepiesImg2 from '../assets/projects-imgs/recepies-img-2.png';
import savingsImg1 from '../assets/projects-imgs/savings-img-1.png';
import savingsImg2 from '../assets/projects-imgs/savings-img-2.png';
import savingsImg3 from '../assets/projects-imgs/savings-img-3.png';
import notesImg1 from '../assets/projects-imgs/notes-img-1.png';
import weatherImg1 from '../assets/projects-imgs/weather-img-1.png';
import weatherImg2 from '../assets/projects-imgs/weather-img-2.png';
import weatherImg3 from '../assets/projects-imgs/weather-img-3.png';
import weatherImg4 from '../assets/projects-imgs/weather-img-4.png';
import todoappImg1 from '../assets/projects-imgs/todoapp-img-1.png';
import todoappImg2 from '../assets/projects-imgs/todoapp-img-2.png';
import miniblogImg1 from '../assets/projects-imgs/miniblog-img-1.png';
import miniblogImg2 from '../assets/projects-imgs/miniblog-img-2.png';
import miniblogImg3 from '../assets/projects-imgs/miniblog-img-3.png';
import miniblogImg4 from '../assets/projects-imgs/miniblog-img-4.png';
import miniblogImg5 from '../assets/projects-imgs/miniblog-img-5.png';
import hangmanImg1 from '../assets/projects-imgs/hangman-img-1.png';
import hangmanImg2 from '../assets/projects-imgs/hangman-img-2.png';
import hangmanImg3 from '../assets/projects-imgs/hangman-img-3.png';
import hangmanImg4 from '../assets/projects-imgs/hangman-img-4.png';
import hangmanImg5 from '../assets/projects-imgs/hangman-img-5.png';
import hangmanImg6 from '../assets/projects-imgs/hangman-img-6.png';
import mywebsiteImg1 from '../assets/projects-imgs/mywebsite-img-1.png';
import mywebsiteImg2 from '../assets/projects-imgs/mywebsite-img-2.png';
import mywebsiteImg3 from '../assets/projects-imgs/mywebsite-img-3.png';
import mywebsiteImg4 from '../assets/projects-imgs/mywebsite-img-4.png';
import mywebsiteImg5 from '../assets/projects-imgs/mywebsite-img-5.png';
import mywebsiteImg6 from '../assets/projects-imgs/mywebsite-img-6.png';


const html = <span title="HTML" className="iconify projects__project__describe-technologies-tech-icon" data-icon="logos:html-5" data-inline="false"></span>
const css = <span title="CSS" className="iconify projects__project__describe-technologies-tech-icon" data-icon="logos:css-3" data-inline="false"></span>
const javaScript = <span title="javaScript" className="iconify projects__project__describe-technologies-tech-icon" data-icon="logos:javascript" data-inline="false"></span>
const react = <span title="React" className="iconify iconify projects__project__describe-technologies-tech-icon" data-icon="logos:react" data-inline="false"></span>;
const sass = <span title="SASS" className="iconify projects__project__describe-technologies-tech-icon" data-icon="logos:sass" data-inline="false"></span>
const redux = <span title="Redux" className="iconify projects__project__describe-technologies-tech-icon" data-icon="logos-redux" data-inline="false"></span>
const firebase = <span title="Firebase" className="iconify projects__project__describe-technologies-tech-icon" data-icon="logos:firebase" data-inline="false"></span>


export const projectsData = [
  {
    title: 'Recepies',
    describe: 'You can add recepies and later modify them.',
    technologies: [html, css, javaScript],
    images: [recepiesImg1, recepiesImg2],
    githubLink: 'https://github.com/ssebaa9/recepies',
  },
  {
    title: 'Savings/Expenses Formular',
    describe: 'Small app where you can add your savings and expenses for every month.',
    technologies: [html, css, javaScript],
    images: [savingsImg1, savingsImg2, savingsImg3],
    githubLink: 'https://github.com/ssebaa9/savings-expenses-formular'
  },
  {
    title: 'Notes Making App',
    describe: 'You can store your notes here and edit them later.',
    technologies: [html, css, javaScript, react, sass],
    images: [notesImg1],
    githubLink: 'https://github.com/ssebaa9/note-making-app'
  },
  {
    title: 'Weather App',
    describe: 'You can check the weather in your city.',
    technologies: [html, css, javaScript, react, sass],
    images: [weatherImg1, weatherImg2, weatherImg3, weatherImg4],
    githubLink: 'https://github.com/ssebaa9/Weather-app'
  },
  {
    title: 'To Do App',
    describe: 'Simple to-do-application, you can store here every your ideas.',
    technologies: [html, css, javaScript, react, sass],
    images: [todoappImg1, todoappImg2],
    githubLink: 'https://github.com/ssebaa9/To-do-app'
  },
  {
    title: 'Mini Blog',
    describe: 'You can store here your articles and later modify them. Login: admin, Password: admin',
    technologies: [html, css, javaScript, react, sass],
    images: [miniblogImg1, miniblogImg2, miniblogImg3, miniblogImg4, miniblogImg5],
    githubLink: 'https://github.com/ssebaa9/Mini-blog'
  },
  {
    title: 'Hangman Game',
    describe: 'Try to guess the word.',
    technologies: [html, css, javaScript, react, sass, redux, firebase],
    images: [hangmanImg1, hangmanImg2, hangmanImg3, hangmanImg4, hangmanImg5, hangmanImg6],
    githubLink: 'https://github.com/ssebaa9/Hangman-game'
  },
  {
    title: 'My Website',
    describe: 'Website about me, all creted by me',
    technologies: [html, css, javaScript, react, sass, firebase],
    images: [mywebsiteImg1, mywebsiteImg2, mywebsiteImg3, mywebsiteImg4, mywebsiteImg5, mywebsiteImg6],
    githubLink: 'https://github.com/ssebaa9/My-website.git'
  }
]