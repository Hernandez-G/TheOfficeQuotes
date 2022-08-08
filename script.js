fetch('https://www.officeapi.dev/api/quotes/random')
.then(res => res.json())
// console logging what on JSON file
.then(data => {
    displayData(data);
    console.log(data);
});

function displayData(data) {
    const theMeta = data.data
    console.log(theMeta);
    const dataDiv = document.getElementById("data");


    // First Name

    const firstName = data.data.character.firstname;
    console.log(data.data.character.firstname)

    const lastName = data.data.character.lastname;
    console.log(data.data.character.lastname)

    
    const quote = data.data.content;
    console.log(data.data.content)
    const button = document.createElement("p");
    button.innerHTML = quote;
    dataDiv.appendChild(button)
}

    
