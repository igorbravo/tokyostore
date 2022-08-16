document.getElementById("#pictures").addEventListener("wheel", event => { 
    if(event.deltaY > 0) {
        event.target.scrollby(300,0)
        console.log('entrou')
    }
    else {
        event.target.scrollBy(-300,0)
    }
});