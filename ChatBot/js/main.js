var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

var user = { message: "", counter: 0 };
let courseArray = [];
let branchesArray = [];

async function getBranchDetails() {
  try {
    const response = await fetch("http://localhost:5000/get-branches");
    const jsonData = await response.json();
    jsonData.map((data) => branchesArray.push(data.branchName));

    jsonData.map((data) =>
      arrayOfPossibleMessage.push({
        message:
          `phone number of ${data.branchName} branch`.toLocaleLowerCase(),
        response: ` ${data.phoneNumber}`,
      })
    );

    jsonData.map((data) =>
      arrayOfPossibleMessage.push({
        message:
          `contact number of ${data.branchName} branch`.toLocaleLowerCase(),
        response: ` ${data.phoneNumber}`,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

async function getCourseDetails() {
  try {
    const response = await fetch("http://localhost:5000/get-courses");
    const jsonData = await response.json();
    jsonData.map((data) => courseArray.push(data.courseName));

    jsonData.map((data) =>
      arrayOfPossibleMessage.push({
        message: `what is the price of ${data.courseName}`.toLocaleLowerCase(),
        response: `LKR ${data.coursePrice}`,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

getCourseDetails();

getBranchDetails();

function getDate() {
  var date = new Date();
  var day = date.getDay();
  var month = date.getMonth();
  var dayOfMonth = date.getDate();
  var year = date.getFullYear();

  var dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var monthArray = [
    "Jan",
    "Fed",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    dayArray[day] + " , " + monthArray[month] + " " + dayOfMonth + " ," + year
  );
}

var arrayOfPossibleMessage = [
  {
    message: "hi",
    response: [
      "Hello! How can I assist you today?",
      "Hi,how can i help you?",
      "Hello,you can ask something",
      "hi,what can I help you?",
    ],
  },
  {
    message: "how are you",
    response: [
      "iam good",
      "iam fine.Thank you!",
      "iam doing greate!",
      "doing good!",
      "Not Bad",
    ],
  },
  {
    message: "what programs do you offer",
    response:
      "We offer a variety of programs in areas such as business, healthcare, technology, and more. You can find a complete list of our programs on our website.",
  },
  {
    message: "what financial aid options are available?",
    response:
      "We offer a variety of financial aid options, including scholarships, grants, and loans. You can find more information on our website or by contacting our financial aid office.",
  },
  {
    message: "what campus resources are available to students?",
    response:
      "We offer a variety of resources to support our students, including tutoring, career services, counseling, and more. You can find more information on our website or by contacting our student services office.",
  },
  {
    message: "what events are happening on campus this week?",
    response:
      "You can find a calendar of events on our website or by checking with our student activities office.",
  },
  {
    message: "how do i register for classes?",
    response:
      "You can register for classes through our online registration system or by contacting our registrar's office. You will need to meet with your academic advisor before registering for classes to ensure that you are taking the appropriate courses.",
  },
  {
    message: "how do i access my grades?",
    response:
      "You can access your grades through our online learning management system or by requesting an official transcript from our registrar's office.",
  },
  {
    message: "how do i reset my password for my student account?",
    response:
      "You can reset your password through our online password reset system or by contacting our IT support team.",
  },

  {
    message: "what can you do?",
    response:
      "I can help answer your questions and provide information on a variety of topics. Just let me know what you need help with!",
  },
  {
    message: "what is your availability?",
    response:
      ": I am available 24/7 to assist you with your questions and concerns",
  },

  {
    message: "what’s your age? ",
    response:
      "I do not have an age.Is there anything else you would like me to help you with?",
  },

  {
    message: "who’s your boss",
    response: "muaz & dharshan",
  },

  {
    message: "are you a robot?",
    response:
      "yes iam a robot,i can processes natural language inputs and generates responses based on my training data and algorithms.Is there anything else you would like me to help you with?",
  },
  { message: "course details", response: courseArray },
  {
    message: "what are the courses available",
    response: courseArray,
  },
  { message: "branches details", response: branchesArray },
  { message: "can you tell the branches you have", response: branchesArray },

  { message: "how are you", response: "I'm Good" },
  { message: "how are u", response: "I'm Fine" },

  {
    message: "which languages can you speak?",
    response: "",
  },
  { message: "who are you?", response: "I'm your assistant" },
  {
    message: "are you a robot",
    response:
      "Yes I am a robot, but I’m a good one. Let me prove it. How can I help you ",
  },
  {
    message: "more details",
    response: "<a href='https://esoft.lk/' target='_blank'>Click here</a>",
  },
  { message: "today's date", response: getDate() },
  { message: "today is", response: getDate() },
  { message: "today date", response: getDate() },

  { message: "good morning", response: "Good Morning !! Have a grate day !!" },
  { message: "good evening", response: "Good Evening!" },
  { message: "what is your name", response: "iam Chity.how can i help you?" },
  { message: "are you single", response: "Yes !! I'm single" },
  { message: "do you know a joke", response: "You’re funny!" },
  { message: "you are smart", response: "Wow !! You too" },
];

var questionsToAsk = [
  { question: "Hello,may i know your name to assist you today?", answer: "" },
];

let questionsToFeed = [{ question: "", answer: "" }];

askQuestion();

function askQuestion() {
  if (questionsToAsk.length > user.counter) {
    setTimeout(function () {
      chatbotSendMessage(questionsToAsk[user.counter].question);
      user.counter++;
    }, 1000);
  }
}

function chatbotSendMessage(messageText) {
  console.log(messageText);

  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-left");
  messageElement.classList.add("shadow");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";
  messageElement.style.backgroundColor = "#242e4c";

  if (typeof messageText == "object") {
    messageElement.innerHTML = `<span><img  class="rounded-circle " style="width:45px;"  src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-2-580x435.jpg"/></span> <br>`;
    messageText.map((text, i) => {
      messageElement.innerHTML +=
        "<span style=" +
        "margin-top:10px; padding:10px" +
        ">" +
        `${i + 1}. ${text}` +
        "</span>" +
        "<br>";
    });
  } else {
    messageElement.innerHTML = `<img  class="rounded-circle " style="width:45px;"  src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-2-580x435.jpg"/>
    <span style="margin-top: 10px; padding: 10px;">${messageText}</span>`;
  }

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  );

  if (user.message.trim() == "good morning") {
    document.getElementById("imgid").src = "../ChatBot/image/boy2.png";
    messageElement.innerHTML = `<img  class="rounded-circle " style="width:45px;"  src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-2-580x435.jpg"/>
    <span style="margin-top: 10px; padding: 10px;">${messageText}</span>`;
  }
  if (user.message.trim() == "thank you") {
    document.getElementById("imgid").src = "../ChatBot/image/boy4.png";
    messageElement.innerHTML = `<img  class="rounded-circle " style="width:45px;"  src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-2-580x435.jpg"/>
    <span style="margin-top: 10px; padding: 10px;">${messageText}</span>`;
  }
  if (user.message.trim() == "are you single") {
    document.getElementById("imgid").src = "../ChatBot/image/boy3.png";
    messageElement.innerHTML = `<img  class="rounded-circle " style="width:45px;"  src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-2-580x435.jpg"/>
    <span style="margin-top: 10px; padding: 10px;">${messageText}</span>`;
  }
  if (user.message.trim() == "do you know a joke") {
    document.getElementById("imgid").src = "../ChatBot/image/boy5.png";
    messageElement.innerHTML = `<img  class="rounded-circle " style="width:45px;"  src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-2-580x435.jpg"/>
    <span style="margin-top: 10px; padding: 10px;">${messageText}</span>`;
  }
  if (user.message.trim() == "you are smart") {
    document.getElementById("imgid").src = "../ChatBot/image/boy4.png";
    messageElement.innerHTML = `<img  class="rounded-circle " style="width:45px;"  src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-2-580x435.jpg"/>
    <span style="margin-top: 10px; padding: 10px;">${messageText}</span>`;
  }

  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {
  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-right");
  messageElement.classList.add("shadow");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";
  messageElement.style.backgroundColor = "#242e4c";

  messageElement.innerHTML = `<img  class="rounded-circle " style="width:35px;" src="./image/user/user.png"/>
  <span style="margin-top:10px; padding:10px">${messageText}</span>`;

  chatContainer.appendChild(messageElement);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendBtn.addEventListener("click", function (e) {
  if (textbox.value == "") {
    alert("Please type in a message");
  } else {
    let messageText = textbox.value.trim().toLocaleLowerCase();
    user.message = messageText;
    sendMessage(messageText);
    textbox.value = "";
    if (questionsToAsk[0].answer == "") {
      questionsToAsk[user.counter - 1].answer = user.message;
      questionsToAsk.push({
        question: `Hello ${user.message}. How can i assist you today?`,
        answer: "",
      });
    }

    askQuestion();
  }

  if (user.counter != 1) {
    procesMessage();
  }
});

function procesMessage() {
  //array of result
  var result = arrayOfPossibleMessage.filter((val) =>
    val.message.includes(user.message.toLocaleLowerCase())
  );

  if (
    result.length != 0 ||
    user.message.includes("hi") ||
    user.message.includes("how are you")
  ) {
    if (result.length > 0) {
      var response = result[0].response;

      var num = Math.floor(Math.random() * response.length);
      if (typeof response == "object" && user.message == "hi") {
        chatbotSendMessage(response[num]);
      } else if (typeof response == "object" && user.message == "how are you") {
        chatbotSendMessage(response[num]);
      } else {
        setTimeout(function () {
          chatbotSendMessage(response);
        }, 500);
      }
    }
  } else if (user.message == "bye") {
    setTimeout(function () {
      chatbotSendMessage(`bye ${questionsToAsk[0].answer}... nice to meet you`);
    }, 1000);
  } else if (
    user.message == "thankyou" ||
    user.message == "thank you" ||
    user.message == "thanks"
  ) {
    setTimeout(function () {
      chatbotSendMessage(`You are welcome ${questionsToAsk[0].answer}.`);
    }, 1000);
  } else {
    setTimeout(function () {
      if (questionsToFeed[0].question == user.message) {
        chatbotSendMessage(questionsToFeed[0].answer);
      } else if (questionsToFeed[0].question == "") {
        chatbotSendMessage("I don't know... can you tell me ?");
        questionsToFeed[0].question = user.message;
      } else if (questionsToFeed[0].answer == "") {
        questionsToFeed[0].answer = user.message;
        chatbotSendMessage("Thank you for updating....");
      } else {
        chatbotSendMessage("I don't know... please dont ask");
      }
    }, 1000);
  }
}

textbox.addEventListener("keypress", function (e) {
  if (e.which == 13) {
    if (textbox.value == "") {
      alert("Please type in a message");
    } else {
      let messageText = textbox.value.trim().toLocaleLowerCase();
      user.message = messageText.toString();
      sendMessage(user.message);
      textbox.value = "";
      if (questionsToAsk[0].answer == "") {
        questionsToAsk[user.counter - 1].answer = user.message;
        questionsToAsk.push({
          question: `Hello ${user.message}.  How can i assist you today?`,
          answer: "",
        });
      }
      askQuestion();
    }

    if (user.counter != 1) {
      procesMessage();
    }
  }
});
