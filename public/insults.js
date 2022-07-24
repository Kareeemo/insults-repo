document
 .querySelector('.request-insult')
 .addEventListener('click', function(){
    console.log('adha');
    fetch("/insults") 
     .then(function(res){
        return res.json()
    })
    .then(function(data){
        document.querySelector('.Insults').innerText = data.insults;
        console.log(data);
    })
    .catch(function(err) {
        console.error(err);
    });
 })
 
