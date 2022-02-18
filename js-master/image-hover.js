window.addEventListener("load", function () {
    var options={
        width: 500,
        height: 500,
        zoomWidth: 500,
        offset: {vertical: 0, horizontal: 10},
        scale: 1.5
    }
    new ImageZoom(document.getElementById("img-container"),options);
});
