const clients = [
    {name: "Princess Zelda", dateOfBirth: "20/12/1990", skill: "Blonde"},
    {name: "Jill Valentine", dateOfBirth: "05/03/1995", skill: "Brunette"},
    // Add other client data here
];

function populateTable() {
    let tableContent = "";
    for (let i = 0; i < clients.length; i++) {
        let client = clients[i];
        tableContent += `<tr><td>${client.name}</td><td>${client.dateOfBirth}</td><td>${client.skill}</td></tr>`;
    }
    document.getElementById("clientData").innerHTML = tableContent;
}

populateTable();
