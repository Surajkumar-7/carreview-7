function compareCars() {
    const car1 = document.getElementById('car1').value;
    const car2 = document.getElementById('car2').value;
    const comparisonResults = document.getElementById('comparison-results');

    if (car1 && car2) {
        // Sample comparison logic, in real application, you would fetch this data from a server
        comparisonResults.innerHTML = `
            <h4>Comparison between ${car1} and ${car2}</h4>
            <p>${car1} has better fuel efficiency.</p>
            <p>${car2} has better safety features.</p>
            <p>${car1} has better speed than ${car2}.</p>
        `;
    } else {
        comparisonResults.innerHTML = '<p>Please enter both car models to compare.</p>';
    }
}

function submitUserContent() {
    const username = document.getElementById('username').value;
    const userReview = document.getElementById('user-review').value;
    const userContentDisplay = document.getElementById('user-content-display');

    if (username && userReview) {
        const newUserContent = document.createElement('div');
        newUserContent.className = 'user-review';
        newUserContent.innerHTML = `
            <h4>${username}</h4>
            <p>${userReview}</p>
        `;
        userContentDisplay.appendChild(newUserContent);

        // Clear the form
        document.getElementById('username').value = '';
        document.getElementById('user-review').value = '';
    } else {
        alert('Please fill out both fields.');
    }
}

function startTypingAnimation() {
    const messageElement = document.getElementById("welcome-message");
    messageElement.style.width = "0"; // Reset width for new animation
    messageElement.style.animation = "none"; // Reset animation
    setTimeout(() => {
        messageElement.style.animation = "typing 4s steps(22, end), blink-caret 0.75s step-end infinite"; // Start typing animation
    }, 10);

    setTimeout(() => {
        messageElement.style.width = "0"; // Hide message after typing
        messageElement.style.animation = "none"; // Reset animation for disappearing
    }, 5000); // Adjust time for how long the message stays before disappearing

    setTimeout(() => {
        startTypingAnimation(); // Restart animation
    }, 6000); // Time before the message starts typing again
}

// Start the typing animation on page load
window.onload = startTypingAnimation;


document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('click', function () {
      const value = this.getAttribute('data-value');
      
      stars.forEach(s => {
        s.classList.remove('selected');
      });
      
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('selected');
      }
    });
  });
});


function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');

    if (userInput.value.trim() === '') {
        return;
    }

    // Append user's message to the chatbox
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatbox.appendChild(userMessage);

    // Get AI response
    const botResponse = getBotResponse(userInput.value);

    // Append bot's response to the chatbox
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = botResponse;
    chatbox.appendChild(botMessage);

    // Scroll chatbox to the bottom
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear the input field
    userInput.value = '';
}

function getBotResponse(userMessage) {
    // Sample responses for demonstration
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'help': 'Sure, I can help you. What do you need assistance with?',
        'price': 'The price of the car depends on the model and year. Please provide more details.',
        'features': 'Our cars come with various features like air conditioning, power windows, and advanced safety features.',
        'mileage': 'The mileage of the car depends on the model. Please specify the model for more details.',
        'bmw':'The mileage of the BMW ranges from 11 to 16 kmpl',
        'availability': 'Please check our website for the latest availability of models.',
        'warranty': 'We offer a 2-year warranty on all our used cars.',
        'service': 'Our cars come with free servicing for the first year.',
        'insurance': 'We offer comprehensive insurance plans for all our vehicles.',
        'default': 'I am not sure about that. Could you please rephrase your question?'
    };

    // Expanding to simulate 1000 responses
    for (let i = 1; i <= 1000; i++) {
        responses[`question${i}`] = `This is the answer to question ${i}.`;
    }

    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || responses['default'];
}


