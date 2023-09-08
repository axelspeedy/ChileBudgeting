// Get references to HTML elements
const dailyBudgetInput = document.getElementById('daily-budget');
const tripDaysInput = document.getElementById('trip-days');
const remainingBudgetSpan = document.getElementById('remaining-budget');

// Set the initial total budget
let totalBudget = 5000;

// Add event listeners to input fields
dailyBudgetInput.addEventListener('input', updateRemainingBudget);
tripDaysInput.addEventListener('input', updateRemainingBudget);

function updateRemainingBudget() {
    // Get the daily budget and trip days values
    const dailyBudget = parseFloat(dailyBudgetInput.value) || 0;
    const tripDays = parseInt(tripDaysInput.value) || 1;

    // Calculate the remaining budget
    const remainingBudget = totalBudget - (dailyBudget * tripDays);

    // Update the remaining budget display
    remainingBudgetSpan.textContent = `$${remainingBudget.toFixed(2)}`;
}
