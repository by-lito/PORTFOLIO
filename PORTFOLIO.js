function expandBlock(id) {
    const block = document.getElementById(id);
    const bg = getComputedStyle(block).backgroundImage;

    const imgUrl = bg.slice(5, -2);

    document.getElementById('expandedImage').src = imgUrl;
    document.getElementById('expandedTitle').textContent =
        block.querySelector('h3').textContent;
    document.getElementById('expandedDescription').textContent =
        block.querySelector('.desc').textContent;

    document.getElementById('expandedView').classList.add('active');
}

function closeExpandedView() {
    document.getElementById('expandedView').classList.remove('active');
}


function closeExpandedView() {
    const expandedView = document.getElementById('expandedView');
    expandedView.classList.remove('active');
}
