var cardToDelete;
function deleteCard(element){
    cardToDelete = element;
    confirmCardDeletion();

}

function confirmCardDeletion() {
    document.getElementById("confirm-box-modal").style.display="block";
}

function collapseConfirmation(answer) {
    document.getElementById("confirm-box-modal").style.display="none";
    if(answer===true){
        var x = document.getElementById(cardToDelete).parentNode.parentNode.parentNode.parentNode;
        x.remove();
    }
}

function assignID(){
    var trashElements = document.querySelectorAll('.fa-trash');
    var abcElements = document.querySelectorAll('.full-post-div');
    for (let i = 0; i < abcElements.length; i++){
        abcElements[i].id = 'full-post-div'+i;
        trashElements[i].id = 'fa-trash'+i;
    }
}