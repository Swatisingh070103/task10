document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if (userText) {
      addMessage(userText, "user-message");
      const botResponse = getBotResponse(userText);
      setTimeout(() => {
        addMessage(botResponse, "bot-message");
      }, 500);
    }
    userInput.value = "";
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });

  function addMessage(text, className) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getBotResponse(input) {
    let botResponse;

    switch (input.toLowerCase()) {
      case "i need help":
        botResponse = "How can I assist you?";
        break;
      case "credit card":
        botResponse =
          "Please email us at infoneedcreditcard@bank.com for assistance with credit cards.";
        break;
      case "address":
        botResponse =
          "Our office address is 72/10, Ville Parle, Mumbai, India.";
        break;
      case "hello":
        botResponse = "Hi! How can I help you?";
        break;
      case "goodbye":
        botResponse = "Goodbye! Have a great day!";
        break;
      case "services":
        botResponse =
          "We offer a range of services including banking, loans, investments, and more.";
        break;
      case "hours":
        botResponse =
          "Our business hours are from 9:00 AM to 5:00 PM, Monday to Friday.";
        break;
      case "contact":
        botResponse =
          "You can reach us at +91-1234567890 or email us at info@bank.com.";
        break;
      case "website":
        botResponse = "Visit our website at www.bank.com for more information.";
        break;
      case "net banking":
      case "banking":
        botResponse =
          "You can access net banking services through our website.";
        break;
      case "loan application":
      case "loan":
      case "application":
        botResponse =
          "To apply for a loan, please visit our nearest branch or apply online on our website.";
        break;
      case "investment options":
      case "investment":
      case "options":
        botResponse =
          "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
        break;
      case "balance inquiry":
      case "balance":
      case "inquiry":
        botResponse =
          "You can check your account balance through our mobile app or by visiting an ATM.";
        break;
      case "mortgage":
        botResponse =
          "For mortgage inquiries, please contact our mortgage department at mortgageteam@bank.com.";
        break;
      default:
        botResponse =
          "I'm sorry, I didn't quite catch that. Could you please ask something else?";
        break;
    }

    return botResponse;
  }
});
