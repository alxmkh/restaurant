export function renderMenuTab() {
    const pillsTab = document.querySelector('#pills-tab');
    const liNavItem = document.createElement('li');
    const aItem = document.createElement('a');
    const iText = document.createElement('i');

    liNavItem.setAttribute('class', 'nav-item');
    aItem.setAttribute('class', 'nav-link mr-5 ml-5 text-light');
    aItem.setAttribute('id', 'pills-profile-tab');
    aItem.setAttribute('data-toggle', 'pill');
    aItem.setAttribute('href', '#pills-profile');
    aItem.setAttribute('role', 'tab');
    aItem.setAttribute('aria-controls', 'pills-profile');
    aItem.setAttribute('aria-selected', 'false');

    iText.textContent = 'Menu';

    pillsTab.appendChild(liNavItem);
    liNavItem.appendChild(aItem);
    aItem.appendChild(iText);
}

export function renderMenuContext() {
    const pillsTabContent = document.querySelector('#pills-tabContent');
    const row = document.createElement('div');
    const tabMenu = document.createElement('div');
    tabMenu.setAttribute('class','tab-pane fade');
    tabMenu.setAttribute('id', 'pills-profile');
    tabMenu.setAttribute('role', 'tabpanel');
    tabMenu.setAttribute('ria-labelledby','pills-profile-tab');
    row.setAttribute('id', 'itemGround');
    row.setAttribute('class','row');

    pillsTabContent.appendChild(tabMenu);
    tabMenu.appendChild(row);

    const burger = renderMenuItem("Burger", "2$", "./burg.jpg");
    const beer = renderMenuItem("Beer", "1$", "./beer.jpg");    
    const pizza = renderMenuItem("Pizza", "5$", "./pizza.jpg");

    row.appendChild(burger);
    row.appendChild(beer);
    row.appendChild(pizza);
}

function renderMenuItem(name, cost, image) {
    const itemArea = document.createElement('div');
    const itemHeader = document.createElement('div');
    const itemBody = document.createElement('div');
    const h5 = document.createElement('h5');
    const img = document.createElement('img');

    itemArea.setAttribute('class', 'card text-white bg-dark mb-3 m-1');
    itemArea.setAttribute('style', 'max-width: 18rem;');
    itemHeader.setAttribute('class', 'card-header');
    itemBody.setAttribute('class', 'card-body');
    h5.setAttribute('class', 'card-title');
    img.setAttribute('class', 'card-img-top');
    img.setAttribute('src', image);
    img.setAttribute('alt', 'card image');

    itemHeader.textContent = cost;
    h5.textContent = name;

    itemArea.appendChild(itemHeader);
    itemArea.appendChild(itemBody);
    itemBody.appendChild(h5);
    itemBody.appendChild(img);

    return itemArea;
}