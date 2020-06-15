var likeCount=0;
var commentCount=0;
function updateData(){
    document.getElementById("save-button").style.display = 'none';
    var title = sessionStorage.getItem('title');
    var author =  sessionStorage.getItem('author');
    var content = sessionStorage.getItem('content');
        document.getElementById("post-title").innerHTML = title;
        document.getElementById("post-author").innerHTML = author;
        document.getElementById("post-content").innerHTML = content;


}

function edit(){
    document.getElementById("save-button").style.display = 'block';
    document.getElementById("edit-button").style.display = 'none';
    document.getElementById("post-title").contentEditable = true;
    document.getElementById("post-title").style.border = "1px solid #e13956";
    document.getElementById("post-content").contentEditable = true;
    document.getElementById("post-content").style.border = "1px solid #e13956";
}

function save() {
    document.getElementById("save-button").style.display = 'none';
    document.getElementById("edit-button").style.display = 'block';
    document.getElementById("post-title").contentEditable = false;
    document.getElementById("post-title").style.border = "none";
    document.getElementById("post-content").contentEditable = false;
    document.getElementById("post-content").style.border = "none";
}

function like() {
    document.getElementById("like-button").innerHTML="<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>"+"Liked";
    document.getElementById("like-notes").innerText = ++likeCount + " person likes this!";
}

function addComment(){
var comment= document.getElementById("comment-textarea").value;
if(comment===""){
    return false;
}
var commentp = document.createTextNode(comment);
var newComment = document.createElement('div');
newComment.setAttribute('id',"comment_number_"+ ++commentCount);
newComment.setAttribute('class',"individual-comment-box")
newComment.appendChild(commentp);
document.getElementById("existing-comments").appendChild(newComment);
document.getElementById("comment-textarea").value ="";
}