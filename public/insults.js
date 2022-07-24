document
 .querySelector('request-insult')
 .addEventListener('click', function(){
    fetch("/insults")
     .then(function(res){
        return res.json()
    })
    .then(function(data){
        document.querySelector('.insults').innertext = data.insults;
    })
    .catch(function(err) {
        console.error(err);
    });
 })
 console.log('kgjho')
