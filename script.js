const spaceImages = [
  ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85', 'Cozinha Montaggio'],
  ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85', 'Sala Montaggio'],
  ['https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=85', 'Dormitório Montaggio'],
  ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', 'Ambiente corporativo Montaggio']
];

document.querySelectorAll('.space-list button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.space-list .active')?.classList.remove('active');
    button.classList.add('active');
    const [src, alt] = spaceImages[Number(button.dataset.space)];
    const image = document.querySelector('#space-image');
    image.src = src;
    image.alt = alt;
  });
});

const carouselImages = [
  'photo-1600607687920-4e2a09cf159d', 'photo-1600210492486-724fe5c67fb0',
  'photo-1618221195710-dd6b41faaea6', 'photo-1600566753086-00f18fb6b3ea',
  'photo-1600607688969-a5bfcd646154'
].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`);

const stage = document.querySelector('.carousel-stage');
carouselImages.forEach((src, index) => {
  const img = document.createElement('img');
  img.className = 'carousel-card';
  img.src = src;
  img.alt = `Ambiente personalizado ${index + 1}`;
  stage.append(img);
});

let active = 0;
function renderCarousel() {
  document.querySelectorAll('.carousel-card').forEach((card, index) => {
    let offset = index - active;
    if (offset > 2) offset -= carouselImages.length;
    if (offset < -2) offset += carouselImages.length;
    const abs = Math.abs(offset);
    const x = offset * 63;
    const rotation = offset === 0 ? 0 : (offset > 0 ? -1 : 1) * (abs === 1 ? 16 : 24);
    const z = offset === 0 ? 120 : abs === 1 ? 20 : -80;
    card.style.transform = `translate(-50%, -50%) translateX(${x}%) rotateY(${rotation}deg) translateZ(${z}px) scale(${abs === 0 ? 1 : .82})`;
    card.style.opacity = abs > 2 ? 0 : abs === 2 ? .35 : abs === 1 ? .7 : 1;
    card.style.zIndex = String(5 - abs);
  });
  document.querySelector('.carousel-controls .current').textContent = String(active + 1).padStart(2, '0');
  document.querySelector('.track i').style.width = `${((active + 1) / carouselImages.length) * 100}%`;
}
document.querySelector('.carousel-arrow.next').addEventListener('click', () => { active = (active + 1) % carouselImages.length; renderCarousel(); });
document.querySelector('.carousel-arrow.prev').addEventListener('click', () => { active = (active - 1 + carouselImages.length) % carouselImages.length; renderCarousel(); });
renderCarousel();
