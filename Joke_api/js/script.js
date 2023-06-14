const getJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    
    document.getElementById('div_joke').innerHTML = data.setup;
    // now after 2 seconds displaying punchline below not overwriting it

    setTimeout(() => {
        document.getElementById('div_joke').innerHTML += `<br><br><br>${data.punchline}`;
    }, 2000);

   
}