// Get Input Element
let filterInput = document.getElementById('filterInput');
// Add Event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){ 
    // Get Value of Input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get Names ul
    let ul = document.getElementById('names');

    // Get li from ul
    let li = ul.querySelectorAll('li.collection-item');

    // loop through collection-items li
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toLocaleUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

}