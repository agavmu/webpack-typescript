import $ = require ('jquery');
import { showMessage } from './message';

import './style.scss';

document.getElementById('btn-alert')
    .addEventListener('click', showMessage);
$('#btn-jq').click(() => alert('asdaw'));

