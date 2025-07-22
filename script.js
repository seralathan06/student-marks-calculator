document.getElementById("marksForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  let marks = [
    parseFloat(document.getElementById("sub1").value),
    parseFloat(document.getElementById("sub2").value),
    parseFloat(document.getElementById("sub3").value),
    parseFloat(document.getElementById("sub4").value),
    parseFloat(document.getElementById("sub5").value)
  ];

  // Check for invalid input
  if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
    document.getElementById("result").innerHTML = "Please enter valid marks (0–100).";
    return;
  }

  // Check individual pass condition
  let allPassed = marks.every(mark => mark >= 40);

  // Calculate total and percentage
  let total = marks.reduce((acc, mark) => acc + mark, 0);
  let percentage = total / marks.length;

  // Determine grade
  let grade;
  if (!allPassed) {
    grade = "Fail";
  } else if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 75) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else {
    grade = "C";
  }

  // Display result
  document.getElementById("result").innerHTML = `
    Total Marks: ${total}/500<br>
    Percentage: ${percentage.toFixed(2)}%<br>
    Grade: <strong>${grade}</strong>
  `;
});
