alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");

let grade = prompt("اكتب درجتك بالأرقام");
console.log(grade);

if (grade > 100) {
  console.log("%cيرجى كتابة الدرجة بشكل صحيح", "color: red; background: white");
} else if (grade >= 90) {
  console.log("%cلقد حصلت على امتياز 🥳", "color: indigo; background: white");
} else if (grade >= 80) {
  console.log("%cلقد حصلت على جيد جداً 🤩", "color: indigo; background: white");
} else if (grade >= 70) {
  console.log("%cلقد حصلت على جيد 🙂", "color: indigo; background: white");
} else if (grade >= 60) {
  console.log("%cلقد حصلت على ضعيف 🙁", "color: indigo; background: white");
} else if (grade < 50) {
  console.log("%cراسب 💔", "color: indigo; background: white");
}

// JavaScript is not a Java
