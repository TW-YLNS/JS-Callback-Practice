function move(element) {
    element.style.position = 'fixed';
    let x = parseFloat(element.style.left);
    let y = parseFloat(element.style.bottom);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            x -= 1;
            element.src = 'assets/green-character/west.gif';
        }
        if (e.key === 'ArrowUp') {
            y += 1;
            element.src = 'assets/green-character/north.gif';
        }
        if (e.key === 'ArrowRight') {
            x += 1;
            element.src = 'assets/green-character/east.gif';
        }
        if (e.key === 'ArrowDown') {
            y -= 1;
            element.src = 'assets/green-character/south.gif';
        }
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
    });

    document.addEventListener('keyup', function(e) {
        element.src = 'assets/green-character/static.gif';
    });
}
