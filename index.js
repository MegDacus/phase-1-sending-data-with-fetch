// Add your code here


    function submitData(name1, email1) {
        let p = document.createElement('p');
        let body = document.querySelector('body');

        return fetch ('http://localhost:3000/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name1,
            email: email1,
        })
    })
        .then(resp => resp.json())

        .then((json) => {
            p.textContent = json.id;
            body.appendChild(p);
        })

        .catch((e) => {
            let message = e.message;
            p.textContent = message;

            body.appendChild(p);
        })

}












