const myImage1 = document.getElementById('myImage1');

function bigShow() {
    myImage1.style.display = "flex";
    myImage1.style.animationName = "first";
    history.pushState({image : true}, "");

    document.addEventListener('keydown', function(e) {
        if(e.key==='Escape') {
            closePhoto();
        }
    });

    myImage1.addEventListener('click', (e) => {
        if (e.target === myImage1) {
          closePhoto();
        }
    });

    window.addEventListener('popstate', (event) => {
        if (myImage1.style.display === 'flex') {
            closePhoto();
        }
    });
}

function closePhoto() {
    myImage1.style.display = "none";
}

function openLink(Id) {
    if(Id.id==='l') {
        window.open("https://www.linkedin.com/in/sinha-milan-325940321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
    }
    else if(Id.id==='g') {
        window.open("https://github.com/Jarvish1xyz")
    }
    else {
        window.open("https://www.instagram.com/sinha__milan6")
    }
}