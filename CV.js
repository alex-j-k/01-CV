const images = document.querySelectorAll('.upscale');
console.log(images);

function toggleUpsizeClass() {
    this.classList.toggle('upsize')
};

images.forEach((image) => {image.addEventListener('mouseover', toggleUpsizeClass)});
images.forEach((image) => {image.addEventListener('mouseleave', toggleUpsizeClass)});

