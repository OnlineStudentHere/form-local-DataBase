       

import users from "./database-form.js";

         
  //  Registration <button>Send</button>       
const registration_button = document.querySelector('.registration-button')
registration_button.addEventListener('click', () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    
    if (username.value === '' || password.value === '') {
        alert('input is empty')
    }

    if (username.value !== '' && password.value !== '') {
         registerUser();
    }
});
      
       // logIn <button>Send</button> 
      const logIN_button = document.querySelector('.logIN-button')
      logIN_button.addEventListener('click', () => {
          loginUser();
     })


        // registration <form>
        function registerUser() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            users.push({ name: username, password: password });
            document.getElementById('registrationForm').reset();
            updateTable();

            alert("Your new account has been created !");
          };
        

         // LogIN <form>  
        function loginUser() {
            const loginUsername = document.getElementById('loginUsername').value;
            const loginPassword = document.getElementById('loginPassword').value;
            const user = users.find(user => user.name === loginUsername && user.password === loginPassword);
            if (user) {
                document.getElementById('message').innerText = "Welcome to Your Account";
            } else {
                document.getElementById('message').innerText = "Account doesn't exist";
                document.getElementById('loginForm').reset();
            }
          };
        

        function updateTable() {
            const table = document.createElement('table');
            table.innerText = 'DataBase of Users'
            table.style.backgroundColor = 'lightgrey'
            const headerRow = table.insertRow();
            const nameHeader = headerRow.insertCell(0);
            nameHeader.innerText = 'Name';
            const passwordHeader = headerRow.insertCell(1);
            passwordHeader.innerText = 'Password';

            for (let i = 0; i < 3; i++) {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

                if (i < users.length) {
                    cell1.innerText = users[i].name;
                    cell2.innerText = users[i].password;
                }
            }

            const oldTable = document.querySelector('table');
            if (oldTable) {
                oldTable.replaceWith(table);
            } else {
                document.body.appendChild(table);
            }
          };
         updateTable();


