alert("Allow microphone to get started")
window.onload = function () {
    responsiveVoice.speak("hey i m sagggnik, the bot. ", "US English Male", { rate: 0.8, volume: 1, pitch: 0.9 });
};
function a() {
    var ans = document.getElementById("input").value.toLowerCase();
    if (ans.match("hello") || ans.match("hi") || ans.match("hii") || ans.match("hey")) {
        b = "hi, how are you?";
    }
    else if (ans.match("thanks") || ans.match("thank you")) {
        b = "You are welcomed"
    }
    else if (ans.match("your name") || ans.match("ur name") || ans.match("who r u") || ans.match("who are you")) {
        b = "i am sagnik";
    }
    else if (ans.match("owner") || ans.match("created") || ans.match("made you")) {
        b = "i was created by Sagnik";
    }
    else if (ans.match("how are you") || ans.match("how r u")) {
        b = "fine, and you??";
    }
    else if (ans.match("how going")) {
        b = "good";
    }
    else if (ans.match("u live") || ans.match("you live")) {
        b = "in computer's memory'";
    }
    else if (ans.match("u doing") || ans.match("youu doing")) {
        b = "chatting with you";
    }
    else if (ans.match("fine")) {
        b = "good";
    }
    else if (ans.match("age of Sagnik")) {
        b = "he is 20 now";
    }
    else if (ans.match("u like") || ans.match("you like")) {
        b = "I like to help";
    }
    else if (ans.match("be my friend")) {
        b = "that's okay from me";
    }
    else if (ans.match("whats going on")) {
        b = "nothing";
    }
    else if (ans.match("ur hobbies") || ans.match("your hobby")) {
        b = "helping my sir and you";
    }
    else if (ans.match("good") || ans.match("awesome") || ans.match("wonderful") || ans.match("outstanding") || ans.match("brilliant")) {
        b = "thanks alot";
    }
    else if (ans.match("what ur age") || ans.match("your age") || ans.match("old are you") || ans.match("old r u")) {
        b = "I am not a human";
    }
    else if (ans.match("ok") || ans.match("ohk") || ans.match("okay")) {
        b = "okay";
    }

    else if (ans.match("who is Sagnik")) {
        b = "he is a learner and he likes to code, he only made me";
    }
    else if (ans.match("bye") || ans.match("see u") || ans.match("see you") || ans.match("talk to you ") || ans.match("talk to u later")) {
        b = "see you";
    }
    else if (ans.match("about urself") || ans.match("about yourself") || ans.match("about u")) {
        b = "i am sagnik the bot. created by Sagnik to assist and help him";
    }
    else if (ans.match("can we meet") || ans.match("v meet") || ans.match("lets meet")) {
        b = "okay, lets meet in the computer hard disk";
    }
    else if (ans.match("my") || ans.match("me")) {
        b = "Sorry,I dont know you";
    }
    else {
        b = "Sorry,I can't understand you";

    };
    responsiveVoice.speak(b, "US English Male", { rate: 0.8, volume: 1, pitch: 0.9 });
    document.getElementById("input").value = "";
}
