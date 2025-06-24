var temp = 1;
var sidebar = document.getElementById("showsidebar");


function SideBar(){

    if(temp==1){
        sidebar.style.display = "block";
        temp = 0;
    }
    else{

        sidebar.style.display = "none";
        temp = 1;
    }
}

function checkIfHide(){

    if($(".nav_links_con").is(':hidden') == false)
    {

    sidebar.style.display = "none";

    }


}

setInterval(checkIfHide, 1);