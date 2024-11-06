function dateChecker(event) {
    event.preventDefault();

    const inputValue = document.getElementById('userInput').value;
    const successDiv = document.getElementById('success');
    const errorDiv = document.getElementById('error');
    const body = document.body;

    successDiv.textContent = "";
    errorDiv.textContent = "";

    if (isNaN(inputValue)) {        
        errorDiv.textContent = "Please enter a number.";
        body.style.backgroundColor = 'url("")';
    }

    if (inputValue > 1900 && inputValue <= 1924) {
        successDiv.textContent = 'The Greatest Generation';
        body.style.backgroundImage = 'url("/public/img/greatest generation.jpg")'
    }
     else if (inputValue >= 1925 && inputValue <= 1945) {
        successDiv.textContent = 'The Silent Generation';
        body.style.backgroundImage = 'url("/public/img/greatest generation.jpg")'
    }
     else if (inputValue >= 1946 && inputValue <= 1964) {
        successDiv.textContent = 'Baby Boomers';
        body.style.backgroundImage = 'url("/public/img/baby boomers.jpg")'
    }
    else if (inputValue >= 1965 && inputValue <= 1979) {
        successDiv.textContent = 'Generation X';
        body.style.backgroundImage = 'url("/public/img/gen X.jpg")'
    } 
    else if (inputValue >= 1980 && inputValue <= 1994) {
        successDiv.textContent = 'Millennials';
        body.style.backgroundImage = 'url("/public/img/millenials.jpg")'
    } 
    else if (inputValue >= 1995 && inputValue <= 2012) {
        successDiv.textContent = 'Gen Z';
        body.style.backgroundImage = 'url("/public/img/gen Z.jpg")'
    } 
    else if (inputValue >= 2013 && inputValue <= 2024) {
        successDiv.textContent = 'Gen Alpha';
        body.style.backgroundImage = 'url("/public/img/gen Alpha.jpg")'
    } else {
        errorDiv.textContent = 'Please enter a year between 1901 and 2024.';
    }
}
