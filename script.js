const textarea = document.getElementById('notes');
const opacitySlider = document.getElementById('opacity');
const container = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', () => {
  const savedNotes = localStorage.getItem('notes');
  const savedOpacity = localStorage.getItem('opacity');
  
  if (savedNotes) {
    textarea.value = savedNotes;
  }
  
  if (savedOpacity) {
    opacitySlider.value = savedOpacity;
    updateOpacity(savedOpacity);
  }
});

textarea.addEventListener('input', () => {
  localStorage.setItem('notes', textarea.value);
});

opacitySlider.addEventListener('input', (e) => {
  const opacity = e.target.value;
  updateOpacity(opacity);
  localStorage.setItem('opacity', opacity);
});

function updateOpacity(value) {
  const opacityValue = value / 100;
  container.style.background = `rgba(0, 0, 0, ${opacityValue})`;
}

function clearNotes() {
  if (confirm('Clear all notes?')) {
    textarea.value = '';
    localStorage.removeItem('notes');
  }
}