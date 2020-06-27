export function renderContainer() {
    const content = document.querySelector('#content');
    const divContainer = document.createElement('div');
    const divContainerForTabs = document.createElement('div');
    const divRowJustifyContentMdCenter = document.createElement('ul');
    const mainDivContentTabs = document.createElement('div');
    const divTabsContent = document.createElement('div');

    divContainer.setAttribute('class','container');
    divContainerForTabs.setAttribute('class','row justify-content-md-center');
    divRowJustifyContentMdCenter.setAttribute('class','nav nav-pills mb-3 pt-5');
    divRowJustifyContentMdCenter.setAttribute('id','pills-tab');
    divRowJustifyContentMdCenter.setAttribute('role','tablist');
    mainDivContentTabs.setAttribute('class','row justify-content-md-center pt-5 text-light');
    divTabsContent.setAttribute('class','tab-content');
    divTabsContent.setAttribute('id','pills-tabContent');
   
    content.appendChild(divContainer);
    divContainer.appendChild(divContainerForTabs);
    divContainer.appendChild(mainDivContentTabs);
    divContainerForTabs.appendChild(divRowJustifyContentMdCenter);
    mainDivContentTabs.appendChild(divTabsContent);
    return divContainer;
}


export function renderHomeTab() {
    const pillsTab = document.querySelector('#pills-tab');
    const liNavItem = document.createElement('li');
    const aItem = document.createElement('a');
    const iText = document.createElement('i');

    liNavItem.setAttribute('class','nav-item');
    aItem.setAttribute('class','nav-link active mr-5 text-light');
    aItem.setAttribute('id','pills-home-tab');
    aItem.setAttribute('data-toggle','pill');
    aItem.setAttribute('href','#pills-home');
    aItem.setAttribute('role','tab');
    aItem.setAttribute('aria-controls','pills-home');
    aItem.setAttribute('aria-selected','true');

    iText.textContent = 'Home';

    pillsTab.appendChild(liNavItem);
    liNavItem.appendChild(aItem);
    aItem.appendChild(iText);
}

export function renderHomeContent() {
    const pillsTabContent = document.querySelector('#pills-tabContent');
    const divHomeContext = document.createElement('div');
    const h1 = document.createElement('h1');
    const iText = document.createElement('i');

    divHomeContext.setAttribute('class','tab-pane fade show active');
    divHomeContext.setAttribute('role','tabpanel');
    divHomeContext.setAttribute('aria-labelledby','pills-home-tab');
    divHomeContext.setAttribute('id','pills-home');
    
    iText.textContent = 'Welcome to our restaurant!';

    pillsTabContent.appendChild(divHomeContext);
    divHomeContext.appendChild(h1);
    h1.appendChild(iText);
}
