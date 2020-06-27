export function renderContactTab() {
    const pillsTab = document.querySelector('#pills-tab');
    const liNavItem = document.createElement('li');
    const aItem = document.createElement('a');
    const iText = document.createElement('i');

    liNavItem.setAttribute('class','nav-item');
    aItem.setAttribute('class','nav-link ml-5 text-light');
    aItem.setAttribute('id','pills-contact-tab');
    aItem.setAttribute('data-toggle','pill');
    aItem.setAttribute('href','#pills-contact');
    aItem.setAttribute('role','tab');
    aItem.setAttribute('aria-controls','pills-contact');
    aItem.setAttribute('aria-selected','true');

    iText.textContent = 'Contact';

    pillsTab.appendChild(liNavItem);
    liNavItem.appendChild(aItem);
    aItem.appendChild(iText);
}

export function renderContactContent() {
    const pillsTabContent = document.querySelector('#pills-tabContent');
    const divPillsContactContent = document.createElement('div');
    const pOne = document.createElement('p');
    const pTwo = document.createElement('p');
    const pThree = document.createElement('p');
    const pFour = document.createElement('p');
    const pFive = document.createElement('p');
    const pSix = document.createElement('p');

    divPillsContactContent.setAttribute('class','tab-pane fade text-right');
    divPillsContactContent.setAttribute('id','pills-contact');
    divPillsContactContent.setAttribute('role','tabpanel');
    divPillsContactContent.setAttribute('aria-labelledby','pills-contact-tab');

    pOne.textContent = 'FastFood, Inc.';
    pTwo.textContent = '1355 Market St, Suite 900';
    pThree.textContent = 'San Francisco, CA 94103';
    pFour.textContent = 'P: (123) 456-7890';
    pFive.textContent = 'FastFood Restaurant';
    pSix.textContent = 'FastFood@yahoo.com';

    pillsTabContent.appendChild(divPillsContactContent);
    divPillsContactContent.appendChild(pOne);
    divPillsContactContent.appendChild(pTwo);
    divPillsContactContent.appendChild(pThree);
    divPillsContactContent.appendChild(pFour);
    divPillsContactContent.appendChild(pFive);
    divPillsContactContent.appendChild(pSix);
 
}