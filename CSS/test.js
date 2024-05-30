let cards = document.querySelectorAll('.card')
let buttons = document.querySelectorAll('.pageLink')
let pageNumber = document.querySelector('.divPagination p')
let cardsPerPage = 4
let currentPage = 1

function displayPage(page){
    let startIndex = (page - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage
    cards.forEach(function(card, index){
        if(index >= startIndex && index < endIndex){
            card.style.display = 'block';
        }
        else{
            card.style.display = 'none';
        }
    })
}

function updatePagination(page){
    if(page == 1){
        buttons[0].setAttribute('disabled', 'true')
    }
    else{
        buttons[0].removeAttribute('disabled')
    }

    if(page == 3){
        buttons[4].setAttribute('disabled', 'true')
    }
    else{
        buttons[4].removeAttribute('disabled')
    }

    pageNumber.textContent = `Page ${page} of 3`;
}

buttons.forEach(function(btn, index){
    btn.addEventListener('click', function(e){
        let btnClicked = e.target.id;
        if(btnClicked == 'one'){
            currentPage = 1;
        }
        else if(btnClicked == 'two'){
            currentPage = 2;
        }
        else if(btnClicked == 'three'){
            currentPage = 3;
        }
        else if(btnClicked == 'prev' && currentPage > 1){
            currentPage--;
        }
        else if(btnClicked == 'next' && currentPage < 3){
            currentPage++;
        }
        let active = document.querySelector('.active')
        active.classList.remove('active')
        console.log(currentPage);
        displayPage(currentPage);
        updatePagination(currentPage)
    })
})

displayPage(currentPage);
updatePagination(currentPage);