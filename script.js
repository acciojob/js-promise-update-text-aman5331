//your JS code here. If required.
 function getMessage() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hello, world!');
        }, 1000);
      });
    }

    // Function to update the text of the output element with the resolved message
    function updateOutput() {
      const outputElement = document.getElementById('output');
      getMessage()
        .then((message) => {
          outputElement.textContent = message;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // Call the updateOutput() function to start the process
    updateOutput();
