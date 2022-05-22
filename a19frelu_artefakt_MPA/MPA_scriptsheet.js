      
    function showPage(p){
        // Step 1 - Hide all pages
        pageArr=document.getElementsByClassName("page");
        for(let i=0;i<pageArr.length;i++){
            let page=pageArr[i];
            page.style.display="none";
    }
    // Step 2 - Show the selected page
    document.getElementById("page"+p).style.display="block";

    console.log("Sida ett visas på inladdning.")
    }
    function init () {
        showPage (1);
    }

    function hidePagination() {
        var pHide = document.getElementById("footContainer");
        if (pHide.style.display === "block") {
            pHide.style.display = "none";
        } else {
            pHide.style.display = "none";
        }
    }

    function showPagination() {
        var pShow = document.getElementById("footContainer");
        if (pShow.style.display === "none") {
            pShow.style.display = "block";
        } else {
            pShow.style.display = "none";
        }
    }