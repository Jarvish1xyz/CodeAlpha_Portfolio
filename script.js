const photoOverlay = document.getElementById('myImage1');

function closePhoto() {
  photoOverlay.style.display = 'none';
  if (history.state && history.state.photoOpen) {
    history.back();
  }
}

document.addEventListener('keydown', function(e) {
        if(e.key==='Escape') {
            photoOverlay.style.display = "none";
            photoOverlay.style.animationName = "";
       }
})

photoOverlay.addEventListener('click', (e) => {
  if (e.target === photoOverlay) {
    closePhoto();
  }
});

window.addEventListener('popstate', (event) => {
  if (photoOverlay.style.display === 'flex') {
    photoOverlay.style.display = 'none';
  }
});


function bigShow(name) {
    name+='1';
    document.getElementById(name).style.display = "flex";
    document.getElementById(name).style.animationName = "first";
    history.pushState({ photoOpen: true }, "");
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