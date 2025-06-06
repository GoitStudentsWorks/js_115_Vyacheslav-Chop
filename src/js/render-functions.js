import { sendFormData } from './api';
import { showErrorMessage } from './helpers';
import { refs } from './refs';
import { appendProjects, checkEndOfCollection, hideBtn } from './helpers';

let displayedProjectsCount = 0;
const count = 3;

const { modalAnswer, closeCollectionBtn } = refs;

//Функцію для створення, рендеру або видалення розмітки


// розмітка відповіді з бекенду
function createAnswer(title, message) {
  return `
    <h3 class="work-modal-title text-accent">
      ${title}
    </h3>
    <p class="work-modal-text">
      ${message}
    </p>
`;
}


// відмалювання відповіді з бекенду
export async function renderAnswer(value) {
  if (!value) return;
  try {
    const { title, message } = await sendFormData(value);

    modalAnswer.innerHTML = createAnswer(title, message);
  } catch (error) {
    showErrorMessage('Something went wrong!');
  }
}

// Розмітка reviews
export function createMarkUpReviews(reviews) {
  return reviews
    .map(
      ({ author, avatar_url, review }) => `
      <li class="swiper-slide">
        <div class="review-card">
          <p class="text">"${review}"</p>
          <div class="review-author">
            <img src="${avatar_url}" alt="${author}'s avatar" class="avatar" loading="lazy"/>
            <p class="author">${author}</p>
          </div>
        </div>
      </li>`
    )
    .join('');
}

// розмітка проекту
export function createProjectsMarkup(array) {
  return array
    .map(
      ({ title, stack, img1x, img2x, link, visitIcon }) => `
      <li class="projects-item">
        <picture>
          <source media="(min-width: 1280px)" srcset="${img1x} 1x, ${img2x} 2x" />
          <source media="(min-width: 768px)" srcset="${img1x} 1x, ${img2x} 2x" />
          <source media="(max-width: 767px)" srcset="${img1x} 1x, ${img2x} 2x" />
          <img class="projects-image" src="${img1x}" alt="${title}" width="320" height="180" />
        </picture>
        <p class="projects-stack">${stack}</p>
        <div class="projects-inner">
          <h3 class="projects-name">${title.toUpperCase()}</h3>
          <a class="projects-link" href="${link}" target="_blank" aria-label="Visit the project website">
            VISIT
            <img class="project-link-icon" src="${visitIcon}" alt ="Visit Icon"/>
          </a>
        </div>
      </li>
    `
    )
    .join('');
}


// відмалювання проектів на сторінці
export function renderProjects(element, array) {
  hideBtn(closeCollectionBtn);
  const projectsToShow = array.slice(
    displayedProjectsCount,
    displayedProjectsCount + count
  );

  const projectsMarkup = createProjectsMarkup(projectsToShow);
  appendProjects(element, projectsMarkup);

  displayedProjectsCount += count;

  checkEndOfCollection(displayedProjectsCount, array);
}

// видалення всіх проектів та відмалювання лише 3-х перших
export function resetProjects(element, array) {
  // оновлюємо лічильник
  displayedProjectsCount = 0;
  renderProjects(element, array);
}
