function showPage(p){
    // Step 1 - Hide all pages
    pageArr=document.getElementsByClassName("page");
    for(let i=0;i<pageArr.length;i++){
        let page=pageArr[i];
        page.style.display="none";
    }
    // Step 2 - Show the selected page
    document.getElementById("page"+p).style.display="block";

}

// Scrolling to top of page
function goToTop() {
    window.scrollTo(0, 0);
}

function init () {
showPage (1);
}