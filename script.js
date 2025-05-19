function bigShow(name) {
    name+='1';
    document.getElementById(name).style.display = "flex";
    document.getElementById(name).style.animationName = "first";

    document.addEventListener('keydown', function(e) {
        if(e.key==='Escape') {
            document.getElementById(name).style.display = "none";
            document.getElementById(name).style.animationName = "";
        }
    })
}