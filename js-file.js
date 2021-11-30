const gridContainer = document.querySelector('#grid');

for (i = 1; i < (12 * 12) + 1; i++) {
    gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    gridContainer.appendChild(gridBox);

}