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
    var fullCards = document.querySelectorAll('.full-post-div');
    var authors = document.querySelectorAll('.author-name');
    var titles = document.querySelectorAll('.title-post-p');
    var contents = document.querySelectorAll('.content-post-p');//
    var ellipsis = document.querySelectorAll('.fa-ellipsis-h');
    for (var i = 0; i < trashElements.length; i++){
        fullCards[i].id = 'full-post-div_'+ i;
        trashElements[i].id = 'fa-trash_'+ i;
        authors[i].id = 'author_'+ i;
        titles[i].id = 'title_'+ i;
        contents[i].id = 'content_'+ i;
        ellipsis[i].id = 'ellipsis_'+i;
    }
}

function navigatePost(elementId){
var number = elementId.split('_')[1];
var author = document.getElementById("author_"+number).innerHTML;
var title = document.getElementById("title_"+number).innerHTML;
var content = document.getElementById("content_"+number).innerHTML;
sessionStorage.setItem('author',author);
sessionStorage.setItem('title',title);
sessionStorage.setItem('content',content);
window.location="../html/post.html";
}
