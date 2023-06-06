

// Define the username-password and HTML file path mappings
var userCredentials = {
    admin1: {
      password: "El mendigo",
      htmlFile: "dash.html"
    },

    user2: {
      password: "pass2",
      htmlFile: "dash.html"
    },

    user3: {
        password: "pass3",
        htmlFile: "dash.html"
      },
    // Add more username-password mappings as needed
  };
  
  function authenticateUser(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the entered credentials exist in the userCredentials object
    if (username in userCredentials && password === userCredentials[username].password) {
      alert("Authentication successful! Redirecting to the dashboard...");
  
      // Redirect to the corresponding HTML file
      window.location.href = userCredentials[username].htmlFile;
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  
  var form = document.getElementById("login-form");
  form.addEventListener("submit", authenticateUser);
  

  function updateTime() {
    const date = new Date();
  
    // Get the time in HH:MM format
    const timeElement = document.getElementById('time');
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeElement.textContent = time;
  
    // Get the day of the week
    const dayElement = document.getElementById('day');
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    dayElement.textContent = day;
  
    // Get the day of the month
    const numberElement = document.getElementById('number');
    const number = date.getDate();
    numberElement.textContent = number;
  
    // Get the month
    const monthElement = document.getElementById('month');
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    monthElement.textContent = month;
  }
  
  // Call the function to initially set the values
  updateTime();
  
  // Update the time every second
  setInterval(updateTime, 1000);
  