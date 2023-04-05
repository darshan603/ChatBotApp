var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = { message: "" };

function getDate() {
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();

    var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
    var monthArray = ['Jan', 'Fed', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return dayArray[day] + " , " + monthArray[month] + " " + dayOfMonth + " ," + year;

};


var arrayOfPissibleMessage = [
    { "message": "How are you", "response": "I'm Good" },
    { "message": "how are you", "response": "I'm Good" },
    { "message": "how are u", "response": "I'm Fine" },
    { "message": "what’s up", "response": "Nothing" },
    { "message": "hi", "response": "hi" },
    { "message": "Hi", "response": "hi" },
    { "message": "who are you", "response": "I'm your assistant" },
    { "message": "Are you a robot?", "response": "Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?" },
    { "message": "are you a robot?", "response": "Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?" },
    { "message": "more details", "response": "<a href='https://esoft.lk/' target='_blank'>Click here</a>" },
    { "message": "today's date", "response": getDate() },
    { "message": "today is", "response": getDate() },
    { "message": "today date", "response": getDate() },
    { "message": "good morning", "response": "Good Morning !! Have a grate day !!" },
    { "message": "thank you", "response": "Thank you !!" },
    { "message": "are you single", "response": "Yes !! I'm single" },
    { "message": "do you know a joke", "response": "You’re funny!" },
    { "message": "you’re smart", "response": "Wow !! You too" },
    { "message": "you are smart", "response": "Wow !! You too" },
];


setTimeout(function () {
    chatbotSendMessage(" Hi, How can i help you ?");
}, 1000);


function chatbotSendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    const botimg = document.createElement("img");
    //botimg.setAttribute("src", "./image/smily.png");

    messageElement.innerHTML = "<span>Chatbot :</span>" +
        "<span style=" + "margin-top:10px; padding:10px" + ">" + messageText + "</span>";

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });

    if (user.message == "Good Morning") {
        botimg.setAttribute("src", "./image/smily.png");
        messageElement.appendChild(botimg);
    }
    if (user.message == "good morning") {
        botimg.setAttribute("src", "./image/smily.png");
        messageElement.appendChild(botimg);
    }
    if (user.message.trim() == "thank you") {
        botimg.setAttribute("src", "./image/present.png");
        messageElement.appendChild(botimg);
    }
    if (user.message.trim() == "are you single") {
        botimg.setAttribute("src", "./image/sad-face.png");
        messageElement.appendChild(botimg);
    }
    if (user.message.trim() == "do you know a joke") {
        botimg.setAttribute("src", "./image/funny.png");
        messageElement.appendChild(botimg);
    }
    if (user.message.trim() == "you’re smart") {
        botimg.setAttribute("src", "./image/surprised.png");
        messageElement.appendChild(botimg);
    }
    if (user.message.trim() == "you are smart") {
        botimg.setAttribute("src", "./image/surprised.png");
        messageElement.appendChild(botimg);
    }


    chatContainer.appendChild(messageElement);


    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>You :</span>" +
        "<span style=" + "margin-top:10px; padding:10px" + ">" + messageText + "</span>";

    chatContainer.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;


}

sendBtn.addEventListener('click', function (e) {

    if (textbox.value == "") {
        alert('Please type in a message');
    }
    else {
        let messageText = textbox.value.trim();
        user.message = messageText;
        sendMessage(messageText);
        textbox.value = "";
        procesMessage();
    }



});

function procesMessage() {
    //array of result

    if (user.message.length > 6 || user.message.includes('hi') || user.message.includes('Hi')) {
        var result = arrayOfPissibleMessage.filter(val => val.message.includes(user.message.toLocaleLowerCase()));
        if (result.length > 0) {
            var response = result[0].response;
            setTimeout(function () {
                chatbotSendMessage(response);
            }, 1000);

        }
        else {
            setTimeout(function () {
                chatbotSendMessage("I don't understand !!");
            }, 1000);
        }

    }
    else if (user.message == "how" || user.message == "who" || user.message == "hey") {
        setTimeout(function () {
            chatbotSendMessage(" ?");
        }, 1000);
    }

    else {
        setTimeout(function () {
            chatbotSendMessage("Please send me a complete sentence");
        }, 1000);

    }


};

textbox.addEventListener('keypress', function (e) {

    if (e.which == 13) {
        if (textbox.value == "") {
            alert('Please type in a message');
        }
        else {
            let messageText = textbox.value.trim();
            user.message = messageText;
            sendMessage(messageText);
            textbox.value = "";
        }

        procesMessage();
    }

})