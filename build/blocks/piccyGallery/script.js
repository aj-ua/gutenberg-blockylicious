/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./src/blocks/piccyGallery/script.js ***!
  \*******************************************/
window.onload = () => {
  const galleries = Array.from(document.querySelectorAll('.wp-block-blockylicious-piccy-gallery'));
  galleries.forEach(gallery => {
    const thumbnails = Array.from(gallery.querySelectorAll('.thumb'));
    if (thumbnails?.[0]) {
      thumbnails[0].classList.add("selected");
      const imagePreview = gallery.querySelector('.image-preview');
      imagePreview.src = thumbnails[0].dataset.largeSize;
    }
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        gallery.querySelectorAll(".thumb.selected").forEach(el => el.classList.remove("selected"));
        thumbnail.classList.add("selected");
        const imagePreview = gallery.querySelector('.image-preview');
        imagePreview.src = thumbnail.dataset.largeSize;
      });
    });
  });
};
/******/ })()
;
//# sourceMappingURL=script.js.map