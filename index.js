function appendImage(src, x, y) {
    let imgTile = document.createElement('img');
    imgTile.src = src;
    imgTile.style.position = 'absolute';
    imgTile.style.left = x + 'px';
    imgTile.style.top = y + 'px';
    document.body.appendChild(imgTile);
}

const skyLimit = window.innerHeight / 2;
for(let y = 0; y < skyLimit; y += 100) {
    for(let x = 0; x < window.innerWidth; x += 100) {
        appendImage('assets/sky.png', x, y);
    }
}

for(let y = skyLimit; y < window.innerHeight; y += 100) {
    for(let x = 0; x < window.innerWidth; x += 100) {
        appendImage('assets/grass.png', x, y);
    }
}

const character = newImage('assets/green-character/static.gif', '100px', '250px');
move(character);

newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');
newItem('assets/sword.png', '500px', '405px');

function newImage(src, left, bottom) {
    let img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left;
    img.style.bottom = bottom;
    document.body.append(img);
    return img;
}

function newItem(src, left, bottom) {
    let item = newImage(src, left, bottom);
    item.addEventListener('dblclick', function() {
        item.remove();
    });
    return item;
}

function newInventory() {
    let inventory = document.createElement('div');
    inventory.style.width = '100%';
    inventory.style.height = '100px';
    inventory.style.display = 'flex';
    inventory.style.flexDirection = 'row';
    inventory.style.alignItems = 'center';
    inventory.style.justifyContent = 'space-evenly';
    inventory.style.border = '2px solid black';
    inventory.style.backgroundColor = 'brown';
    document.body.append(inventory);
    return inventory;
}

function move(element) {
    element.style.position = 'fixed';
    let x = parseFloat(element.style.left);
    let y = parseFloat(element.style.bottom);
    const speed = 5;  

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            x -= speed;
            element.src = 'assets/green-character/west.gif';
        }
        if (e.key === 'ArrowUp') {
            y += speed;
            element.src = 'assets/green-character/north.gif';
        }
        if (e.key === 'ArrowRight') {
            x += speed;
            element.src = 'assets/green-character/east.gif';
        }
        if (e.key === 'ArrowDown') {
            y -= speed;
            element.src = 'assets/green-character/south.gif';
        }
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
    });

    document.addEventListener('keyup', function(e) {
        element.src = 'assets/green-character/static.gif';
    });
}
