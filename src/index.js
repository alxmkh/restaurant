import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/popper-utils.min';
import 'bootstrap/dist/js/bootstrap.min';

import {renderContainer, renderHomeTab, renderHomeContent} from './home.js';
import {renderMenuTab, renderMenuContext}  from './menu.js';
import {renderContactTab, renderContactContent} from './contacts.js';

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    document.body.style.backgroundImage = "url('./backgrounndImage.jpg')";

    renderContainer();

    renderHomeContent(); 
    renderMenuContext();   
    renderContactContent();

    renderHomeTab();
    renderMenuTab();
    renderContactTab();

    

    

});