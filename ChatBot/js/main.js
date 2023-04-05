var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

var user = { message: "" };
let courseArray = [];
let branchesArray = [];

async function getBranchDetails() {
  try {
    const response = await fetch("http://localhost:5000/get-branches");
    const jsonData = await response.json();
    jsonData.map((data) => branchesArray.push(data.branchName));

    jsonData.map((data) =>
      arrayOfPossibleMessage.push({
        message: `phone number of  ${data.branchName} branch?`,
        response: ` ${data.phoneNumber}`,
      })
    );

    jsonData.map((data) =>
      arrayOfPossibleMessage.push({
        message: `contact number of ${data.branchName} branch?`,
        response: ` ${data.phoneNumber}`,
      })
    );

    jsonData.map((data) =>
      arrayOfPossibleMessage.push({
        message: `contact number of ${data.branchName} branch?`,
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
        message: `what is the price of ${data.courseName}?`,
        response: `LKR ${data.coursePrice}`,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

getCourseDetails();
getBranchDetails();

console.log(branchesArray);

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
  { message: "How are you", response: "I'm Good" },
  {
    message: "course details",
    response: courseArray,
  },
  {
    message: "branches details",
    response: branchesArray,
  },
  { message: "how are you?", response: "I'm Good" },
  { message: "how are u?", response: "I'm Fine" },
  { message: "hi", response: "hi" },
  //   { message: "Hi", response: "hi" },
  { message: "who are you ?", response: "I'm your assistant" },
  {
    message: "Are you a robot?",
    response:
      "Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?",
  },
  {
    message: "are you a robot?",
    response:
      "Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?",
  },
  {
    message: "more details",
    response: "<a href='https://esoft.lk/' target='_blank'>Click here</a>",
  },
  { message: "today's date", response: getDate() },
  { message: "today is", response: getDate() },
  { message: "today date", response: getDate() },
];

console.log(arrayOfPossibleMessage);

setTimeout(function () {
  chatbotSendMessage(" Hi, How can i help you ?");
}, 1000);

function chatbotSendMessage(messageText) {
  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-left");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  if (typeof messageText == "object") {
    messageText.map((text, i) => {
      messageElement.innerHTML +=
        "<span>Chatbot: </span>" +
        "<span style=" +
        "margin-top:10px; padding:10px" +
        ">" +
        `${i + 1}. ${text}` +
        "</span>" +
        "<br>";
    });
  } else {
    messageElement.innerHTML =
      "<span>Chatbot:</span>" +
      "<span style=" +
      "margin-top:10px; padding:10px" +
      ">" +
      messageText +
      "</span>";
  }

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  );

  chatContainer.appendChild(messageElement);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {
  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-right");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  messageElement.innerHTML =
    "<span>You :</span>" +
    "<span style=" +
    "margin-top:10px; padding:10px" +
    ">" +
    messageText +
    "</span>";

  chatContainer.appendChild(messageElement);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendBtn.addEventListener("click", function (e) {
  if (textbox.value == "") {
    alert("Please type in a message");
  } else {
    let messageText = textbox.value.trim().toLocaleLowerCase();
    user.message = messageText;
    console.log(user.message);
    sendMessage(messageText);
    textbox.value = "";
  }

  procesMessage();
});

function procesMessage() {
  //array of result

  if (
    user.message.length > 6 ||
    user.message.includes("hi") ||
    user.message.includes("Hi")
  ) {
    var result = arrayOfPossibleMessage.filter((val) =>
      val.message.includes(user.message.toLocaleLowerCase())
    );

    // console.log(result);
    if (result.length > 0) {
      var response = result[0].response;

      //   console.log(response);

      setTimeout(function () {
        chatbotSendMessage(response);
      }, 500);
    } else {
      setTimeout(function () {
        chatbotSendMessage("I don't understand !!");
      }, 1000);
    }
  } else if (user.message == "how" || user.message == "who") {
    setTimeout(function () {
      chatbotSendMessage(" ?");
    }, 1000);
  } else {
    setTimeout(function () {
      chatbotSendMessage("Please send me a complete sentence");
    }, 1000);
  }
}

textbox.addEventListener("keypress", function (e) {
  if (e.which == 13) {
    if (textbox.value == "") {
      alert("Please type in a message");
    } else {
      let messageText = textbox.value.trim().toLocaleLowerCase();
      user.message = messageText;
      sendMessage(user.message);
      textbox.value = "";
    }

    procesMessage();
  }
});
