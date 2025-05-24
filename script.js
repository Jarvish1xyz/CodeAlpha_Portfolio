function bigShow(name) {
    name+='1';
    document.getElementById(name).style.display = "flex";
    document.getElementById(name).style.animationName = "first";

    document.addEventListener('keydown', function(e) {
        if(e.key==='Escape') {
            closeIt();
        }
    })
    document.getElementById(name).addEventListener('click', (e) => {
        if (e.target === document.getElementById(name)) {
            closeIt();
        }
    });
}

function closeIt() {
    document.getElementById(name).style.display = "none";
    document.getElementById(name).style.animationName = "";
}


function openLink(Id) {
    if(Id.id==='l') {
        window.open("https://www.linkedin.com/in/sinha-milan-325940321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
    }
    else if(Id.id==='g') {
        window.open("https://github.com/Jarvish1xyz")
    }
    else {
        window.open("https://www.instagram.com/sinha__milan6/profilecard/?igsh=MXNuMGRyMTQ1aDNnaA==")
    }
}