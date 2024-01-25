document.getElementById('marks-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const subjectName = document.getElementById('subject-name').value;
    const marksScored = parseFloat(document.getElementById('marks-scored').value);
    const totalMarks = parseFloat(document.getElementById('total-marks').value);

    if (isNaN(marksScored) || isNaN(totalMarks) || marksScored < 0 || marksScored > totalMarks || totalMarks < 0 || totalMarks > 100) {
        alert('Please enter valid marks.');
        return;
    }

    const percentage = (marksScored / totalMarks) * 100;

    document.getElementById('result-text').innerText = `Subject: ${subjectName}\nMarks Scored: ${marksScored}\nTotal Marks: ${totalMarks}\nPercentage: ${percentage.toFixed(2)}%`;
});