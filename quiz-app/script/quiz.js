const currentQuizId = parseInt(localStorage.getItem("currentQuizId"));
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const currentUserEmail = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users")) || [];


const allQuestions = {
  1: [
    {
      question: "1+1?",
      options: ["3", "1", "2"],
      answer: "2"
    },
    {
      question: "2+2?",
      options: ["4", "2", "1"],
      answer: "4"
    },
    {
      question: "4+4?",
      options: ["8", "4", "2"],
      answer: "8"
    }
  ],
  2: [
    {
      question: "moving car is??",
      options: ["moving", "swimming", "jumping"],
      answer: "moving"
    },
    {
      question: "who are u?",
      options: ["nabiha", "abed", "taha"],
      answer: "taha"
    },
    {
      question: "how much are u getting",
      options: ["3.5", "4", "4.5"],
      answer: "4"
    }
  ],
  3: [
    {
      question: "Capital of Lebanon?",
      options: ["Berlin", "Beirut", "Madrid"],
      answer: "Beirut"
    },
    {
      question: "How old is nabiha",
      options: ["3", "21", "5"],
      answer: "21"
    },
    {
      question: "Which planet is the best for coding",
      options: ["Venus", "Mercury", "Earth"],
      answer: "Mercury"
    }
  ]
};
