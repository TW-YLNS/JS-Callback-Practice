function newImage(src, left, bottom) {
    let img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left;
    img.style.bottom = bottom;
    document.body.append(img);
    return img;
}
