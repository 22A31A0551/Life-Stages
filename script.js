document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get input values
    const birthYear = parseInt(document.getElementById('birth_year').value);
    const gender = document.getElementById('gender').value;

    // Calculate the user's age
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    // Get recommendations based on age and gender
    const education = getEducationStage(age);
    const food = getFoodRecommendation(age, gender);
    const exercise = getExerciseRecommendation(age, gender);

    // Display results
    displayResults(age, gender, education, food, exercise);
});

// Function to determine education stage based on age
function getEducationStage(age) {
    if (age >= 5 && age <= 12) return "Elementary School";
    if (age >= 13 && age <= 18) return "High School";
    if (age >= 19 && age <= 22) return "College/University";
    if (age >= 23 && age <= 30) return "Young Adult/Start of Career";
    if (age > 30) return "Adult";
    return "Too young for education stage";
}

// Function to get food recommendations based on age and gender
function getFoodRecommendation(age, gender) {
    if (age >= 5 && age <= 12) return "Eat more fruits, vegetables, and whole grains.";
    if (age >= 13 && age <= 18) {
        return gender === "male" 
            ? "Eat protein-rich foods like lean meats, eggs, and legumes."
            : "Consume iron-rich foods like leafy greens and legumes.";
    }
    if (age >= 19 && age <= 30) return "Focus on a balanced diet with proteins, vegetables, and whole grains.";
    if (age > 30) return "Eat plenty of fiber-rich foods and lean proteins.";
    return "Eat healthy foods to fuel your growth!";
}

// Function to get exercise recommendations based on age and gender
function getExerciseRecommendation(age, gender) {
    if (age >= 5 && age <= 12) return "Engage in fun physical activities like playing outside or swimming.";
    if (age >= 13 && age <= 18) {
        return gender === "male"
            ? "Try running, swimming, or playing team sports."
            : "Consider yoga, swimming, or light sports.";
    }
    if (age >= 19 && age <= 30) return "Incorporate strength training and cardio into your routine.";
    if (age > 30) return "Focus on walking, yoga, or light strength exercises.";
    return "Stay active and move around to support growth!";
}

// Function to dynamically display the results on the page
function displayResults(age, gender, education, food, exercise) {
    const resultsDiv = document.getElementById('results');

    // Display the results dynamically
    resultsDiv.innerHTML = `
        <h2>Age: ${age}</h2>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Education Stage:</strong> ${education}</p>
        <p><strong>Food Recommendation:</strong> ${food}</p>
        <p><strong>Exercise Recommendation:</strong> ${exercise}</p>
    `;
}
