const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const suggestions = document.querySelectorAll("#suggestions li");

const responses = {
    headache: "For headaches, drink water, rest in a dark room, and try gentle neck stretches.",
    stress: "Manage stress with breathing exercises, meditation, and regular physical activity.",
    skin: "Keep your skin healthy by staying hydrated and using sunscreen daily.",
    diabetes: "Include high-fiber foods, whole grains, and avoid sugary snacks.",
    fever: "Rest well, stay hydrated, and take paracetamol if needed. Consult a doctor if high.",
    tip: "Drink at least 8 glasses of water daily for optimal health."
};


window.onload = () => {
    appendMessage("👋 Hello! I'm your Health Tips Bot. Ask me anything about health, fitness, or wellness!", "bot");
};

function sendMessage(message = null) {
    const input = message || userInput.value;
    if (!input.trim()) return;

    appendMessage(input, "user");
    userInput.value = "";

    const lowerInput = input.toLowerCase();
    let reply = "🤖 I'm here to help! Please rephrase or ask another health-related question.";

    if (lowerInput.includes("headache")) reply = responses.headache;
    else if (lowerInput.includes("stress")) reply = responses.stress;
    else if (lowerInput.includes("skin")) reply = responses.skin;
    else if (lowerInput.includes("diabetes")) reply = responses.diabetes;
    else if (lowerInput.includes("fever")) reply = responses.fever;
    else if (lowerInput.includes("tip")) reply = responses.tip;

    setTimeout(() => appendMessage(reply, "bot"), 600);
}

function appendMessage(message, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}`;
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


suggestions.forEach(item => {
    item.addEventListener("click", () => {
        sendMessage(item.textContent);
    });
});


userInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
