const input = document.getElementById('input-box');
const list = document.getElementById('list-container');

function addTask() {
    if(input.value === '') {
        alert('Please enter a task!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.style.display = 'none';
    }
}, false);

function saveData() {
    localStorage.setItem('list', list.innerHTML);
}