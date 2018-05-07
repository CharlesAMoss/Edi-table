function tableRow(rowNum, firstName, lastName, userName) {
    return `<tr><th scope="row">${rowNum}</th><td contenteditable="true" >${firstName}</td><td contenteditable="true">${lastName}</td><td contenteditable="true">${userName}</td></tr>`
} 

document.addEventListener('DOMContentLoaded', function() {
const tBody = document.querySelector('#tbody-insert');
let content = '';
let userData = [];
fetch('/data/MOCK_DATA.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        userData = myJson;   
        for (let i = 0; i < userData.length; i++) {
            content += tableRow(i+1, userData[i].first_name, userData[i].last_name, userData[i].user_name);
        }
        console.log(content)
        tBody.innerHTML = content;
    });
});