//chatbox script

// Toggle chatbot
function toggleChatbot() {
  const chatBox = document.getElementById("chatbot-box");
  chatBox.classList.toggle("hidden");
}

// Send message
function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();

  if (message === "") return;

  const chatMessages = document.getElementById("chat-messages");

  // User message
  const userMsg = document.createElement("div");
  userMsg.className =
    "bg-blue-200 text-gray-700 p-2 rounded-t-2xl rounded-bl-2xl max-w-[75%] ml-auto";
  userMsg.innerText = message;
  chatMessages.appendChild(userMsg);

  // Clear input
  input.value = "";

  // Auto scroll
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Fake bot reply
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className =
      "text-gray-500 bg-[#f2f2f0] p-2 rounded-t-2xl rounded-br-2xl max-w-56";
    botMsg.innerHTML = getBotReply(message);

    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
}

// Enter key support
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("chat-input");

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});

// Simple bot logic
function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hello 👋 Do you want to ask something ?";
  } else if (message.includes("course")) {
    return "We offer B.tech, M.tech Engineering courses.";
  } else if (message.includes("how are you")) {
    return "I'm doing good what about you ?";
  } else if (message.includes("fees")) {
    return 'This is our <a href="https://walchandsangli.in/docs/students/July25/UG%20Aided%20Fee%20Structure%2025-26.pdf" class="text-blue-600 underline">Fee structure</a>';
  } else if (message.includes("placement")) {
    return 'Visit our <a href="placements.html" class="text-blue-600 underline">Placement</a> page for details.';
  } else if (message.includes("admission")) {
    return 'Visit our <a href="admissions.html" class="text-blue-600 underline">Admission</a> page for details.';
  } else if (message.includes("contact")) {
    return "<p>Phone: +91 233 2300383 <br /> Email: info@walchandsangli.ac.in</p>";
  } else {
    return "Sorry, I didn't understand that.";
  }
}
