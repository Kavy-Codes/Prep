const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewerImg');

document.querySelectorAll('.grid img').forEach(img => {
  img.addEventListener('click', () => {
    viewerImg.src = img.src;
    viewer.classList.remove('hidden');
  });
});

viewer.addEventListener('click', () => {
  viewer.classList.add('hidden');
  viewerImg.src = '';
});
