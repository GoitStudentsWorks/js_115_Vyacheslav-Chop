//Константи

// wallet
import walletImg1x from '../img/projects/wallet.avif';
import walletImg2x from '../img/projects/wallet@2x.avif';
// green
import greenImg1x from '../img/projects/green-harvest.avif';
import greenImg2x from '../img/projects/green-harvest@2x.avif';
// english
import englishImg1x from '../img/projects/english.avif';
import englishImg2x from '../img/projects/english@2x.avif';
// fruitbox
import fruitBoxImg1x from '../img/projects/fruitbox.avif';
import fruitBoxImg2x from '../img/projects/fruitbox@2x.avif';
// vysshyvanka
import vyshyvankaImg1x from '../img/projects/vyshyvanka.avif';
import vyshyvankaImg2x from '../img/projects/vyshyvanka.avif';
// energy
import energyImg1x from '../img/projects/energy.avif';
import energyImg2x from '../img/projects/energy@2x.avif';
// chego
import chegoImg1x from '../img/projects/chego.avif';
import chegoImg2x from '../img/projects/chego@2x.avif';
// mimino
import miminoImg1x from '../img/projects/mimino.avif';
import miminoImg2x from '../img/projects/mimino@2x.avif';
// power
import powerImg1x from '../img/projects/power-puls.avif';
import powerImg2x from '../img/projects/power-puls@2x.avif';
// starlight
import starlightImg1x from '../img/projects/starlight.avif';
import starlightImg2x from '../img/projects/starlight@2x.avif';

import iconLink from '../img/sprite-svg/visit-icon.svg';


// ключі для локального сховища
export const STORAGE_KEYS = {
  theme: 'theme',
  themeText: 'themeText',
  formData: 'formData',
};

// об'єкт для отримання даних з форми

export let requestData = {
  email: '',
  comment: '',
};


// об'єкт налаштувань для анімації
export const options = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: 'random',
    },
    shape: {
      type: ['polygon', 'star', 'triangle'],
      stroke: {
        width: 2,
        color: '#00ff80',
      },
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
      },
    },
    size: {
      value: 2,
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: '#00ff80',
      opacity: 0.6,
    },
    move: {
      enable: true,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      modes: {
        repulse: {
          distance: 250,
          duration: 1.5,
        },
      },
      resize: true,
    },
  },
  retina_detect: true,
};


// об'єкт для збережень проектів
export const projects = [
  {
    title: 'Wallet Webservice',
    stack: 'React, JavaScript, Node.js, Git',
    img1x: walletImg1x,
    img2x: walletImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Green Harvest Online Store',
    stack: 'React, JavaScript, Node.js, Git',
    img1x: greenImg1x,
    img2x: greenImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'English Excellence Website',
    stack: 'HTML, CSS, JS',
    img1x: englishImg1x,
    img2x: englishImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Fruitbox Online Store',
    stack: 'HTML, CSS, JS',
    img1x: fruitBoxImg1x,
    img2x: fruitBoxImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Vyshyvanka Vibes Landing Page',
    stack: 'React, Tailwind CSS',
    img1x: vyshyvankaImg1x,
    img2x: vyshyvankaImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Energy Flow Webservice',
    stack: 'React, SCSS',
    img1x: energyImg1x,
    img2x: energyImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Chego Jewelry Website',
    stack: 'React, SCSS',
    img1x: chegoImg1x,
    img2x: chegoImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Mimino Website',
    stack: 'HTML, CSS',
    img1x: miminoImg1x,
    img2x: miminoImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Power Pulse',
    stack: 'JS, Node.js',
    img1x: powerImg1x,
    img2x: powerImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
  {
    title: 'Starlight Studio Landing Page',
    stack: 'JS, Node.js, Git',
    img1x: starlightImg1x,
    img2x: starlightImg2x,
    link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio/',
    visitIcon: iconLink,
  },
];
