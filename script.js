const apiUrl = 'https://meowfacts.herokuapp.com/';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const catFactElement = document.getElementById('catFact');
    catFactElement.innerText = data.data[0];
  })
  .catch(error => {
    console.error('Error:', error);
  });

  