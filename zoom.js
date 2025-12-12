
function zoom(element) {
    const isZoomed = element.classList.contains("zoom");

    const images = document.querySelectorAll('.zoom');
    images.forEach(img => img.classList.remove('zoom'));

    if (!isZoomed) {
        element.classList.add("zoom");
    }
}
