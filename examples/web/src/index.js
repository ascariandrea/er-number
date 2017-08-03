import ErNumber from 'er-number';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('input').addEventListener('keyup', (e) => {
    document.querySelector('.roman-numerals').innerHTML = e.target.value && ErNumber(e.target.value) || '';
  });
})

