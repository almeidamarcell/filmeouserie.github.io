var typed2 = new Typed('#strike', {
  strings: [
    'um filme pra ficar de boinha no sofá',
    'uma série para maratonar',
    'um filme de ação',
    'uma série de comédia pra relaxar',
    'um filme clássico',
    'um filme de terror',
    'uma série com mais de 5 temporadas',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
