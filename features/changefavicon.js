var temp = 1;
var link = document.querySelector("link[rel~='icon']");

if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
function changefavi(){

    if(temp==1){

        link.href = '../assets/icons/logowithbg.svg';
        temp = 0;

    }
    else{

        link.href = '../assets/icons/logo.svg';
        temp = 1;

    }

}

setInterval(changefavi, 8000);