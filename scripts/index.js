function showAllPosts(){
    window.location.replace("html/bloglist.html")
}

function showCreatePost() {
    document.getElementById("create-post-modal").style.display = "block";
}
function hideCreatePostModal() {
    document.getElementById("create-post-modal").style.display = "none";
}