document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const res = JSON.parse(this.responseText);
            let output = '';
            if(res.type='success'){
                res.value.forEach(function(item){
                    output += `
                        <li>${item.joke}</li>
                    `;
                });
            } else {
                output += '<li>Something went wrong...</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
            let githubPages;
        }
    };
    xhr.send();

    e.preventDefault();
}