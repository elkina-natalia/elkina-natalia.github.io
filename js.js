const avatar = document.querySelector('.header__avatar');

const cats = ['🐱', '😺', '😸', '😹', '😻', '😼', '😽', '🙀'];

avatar.addEventListener('dblclick', function () {
  const rect = avatar.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 24; i++) {
    const kitten = document.createElement('div');

    kitten.classList.add('kitten');
    kitten.textContent = cats[Math.floor(Math.random() * cats.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 400;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    kitten.style.left = centerX + 'px';
    kitten.style.top = centerY + 'px';

    kitten.style.setProperty('--x', x + 'px');
    kitten.style.setProperty('--y', y + 'px');
    kitten.style.setProperty(
      '--rotation',
      (Math.random() * 720 - 360) + 'deg'
    );

    kitten.style.fontSize = (18 + Math.random() * 22) + 'px';
    kitten.style.animationDuration = (2 + Math.random()) + 's';

    document.body.appendChild(kitten);

    setTimeout(() => {
      kitten.remove();
    }, 3000);
  }
});