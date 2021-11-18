import {
  regUser,
  signInUser,
  AuthState,
  updateInUser,
  user,
} from './appFirebase';
import { refs } from '../refs/refs.js';
import { addSpinner, removeSpinner } from './spinner';
import { compile } from 'handlebars';
import { ref } from '@firebase/database';

refs.formLog.addEventListener('submit', e => {
  e.preventDefault();
  addSpinner();
  const formData = new FormData(e.currentTarget);
  const emailValue = formData.get('email');
  const passValue = formData.get('pass');
  signInUser(emailValue, passValue);
  clearInput(refs.formLog, 2);
  removeSpinner();
  addClass();
});

refs.formReg.addEventListener('submit', e => {
  e.preventDefault();
  addSpinner();
  const formData = new FormData(e.currentTarget);
  const emailValue = formData.get('email');
  const passValue = formData.get('pass');
  const nameValue = formData.get('name');
  regUser(emailValue, passValue);
  updateInUser(nameValue);
  AuthState(user);
  clearInput(refs.formReg, 3);
  removeSpinner();
  addClass();
});

function clearInput(ref, number) {
  for (let i = 0; i < number; i++) {
    ref.children[i].children[1].value = '';
  }
}

// function for render sing up sing in

refs.singUP.addEventListener('click', openSinUp);

function openSinUp(eve) {
  const item = eve.target.textContent.trim();
  if (item === 'Sign up Now') {
    refs.singOutMod.classList.remove('modal-singup--hidden');
    refs.singInMod.classList.add('modal-singin--hidden');
  }
}

// function close modal
refs.singinModal.addEventListener('click', mouseCloseMOdal);
window.addEventListener('keydown', onCloseModal);

function removeList() {
  window.removeEventListener('keydown', onCloseModal);
  addClass();
}

function onCloseModal(eve) {
  if (eve.code === 'Escape') {
    removeList();
  }
  return window.addEventListener('keydown', onCloseModal);
}
refs.modalSinInOpen.addEventListener('moseup', mouseUp);

function mouseUp(e) {
  if (
    e.target.className === 'backdrop-sing' ||
    e.target.className === 'cl-btn-mod-txt'
  ) {
    console.log(e.target);
    // refs.singinModal.classList.remove('modal-auth--hidden');
  }
}

function mouseCloseMOdal(event) {
  if (
    event.target.className === 'backdrop-sing' ||
    event.target.className === 'cl-btn-mod-txt'
  ) {
    return addClass();
  }

  return;
}

function addClass() {
  refs.singinModal.classList.add('modal-auth--hidden');
}

// back sing Up
refs.backModal.addEventListener('click', backSingOut);

function backSingOut() {
  toggleModalVisibility(refs.singOutMod, refs.singInMod, 'modal-singup--hidden', 'modal-singin--hidden')
}

export function logOutModalIsVisible(logOutFunction) {
  toggleModalVisibility(refs.singInMod, refs.modalLogOut, 'modal-singin--hidden', 'modal-logout--hidden')
  refs.btnLogOutYes.addEventListener('click', e => {
    logOutFunction();
    addClass();
    toggleModalVisibility( refs.modalLogOut, refs.singInMod,  'modal-logout--hidden', 'modal-singin--hidden')
  });
  refs.btnLogOutNo.addEventListener('click', addClass);
}
 
function toggleModalVisibility(elFirst, elSecond, addClass, removeClass) {
  elFirst.classList.add(addClass);
  elSecond.classList.remove(removeClass);
}
