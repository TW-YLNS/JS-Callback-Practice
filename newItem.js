function newItem(src, left, bottom, inventory) {
    let item = newImage(src, left, bottom);
    item.addEventListener('dblclick', function() {
        item.style.width = '50px';  
        item.style.height = '50px'; 
        inventory.append(item);
        item.removeEventListener('dblclick', arguments.callee); 
    });
    return item;
}
