document.addEventListener('DOMContentLoaded', () => {
    // Ensure JavaScript runs only after the DOM is fully loaded
    const submitButton = document.getElementById('submitButton');
    const responseBox = document.getElementById('responseBox');
    const userInput = document.getElementById('userInput');

    submitButton.addEventListener('click', () => {
      // Get the input value
      const inputValue = userInput.value.trim();

      // Display the response or an error message
      responseBox.textContent = inputValue ? `kindly wait for our team to contact you` : 'Please enter something!';
      if (inputValue) {
        // Hide input section
        

        // Show the response box with user input
       
        responseBox.classList.remove('hidden');
      } else {
        // Show an alert if input is empty
        alert('Please enter something before submitting.');
      } // Show the response box
    });
  });