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


    const quote = data.data.content;
    console.log(data.data.content)
    const heading = document.createElement("p");
    heading.innerHTML = quote
    dataDiv.appendChild(heading)
    
    const firstName = data.data.character.firstname;
    console.log(data.data.character.firstname)
    const fn = document.getElementById("firstname")
    fn.innerHTML = firstName;
    
    const lastName = data.data.character.lastname;
    console.log(data.data.character.lastname)
    const ln = document.getElementById("lastname")
    ln.innerHTML = lastName;

}