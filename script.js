// Get references to HTML elements
const dailyBudgetInput = document.getElementById('daily-budget');
const tripDayInput = document.getElementById('trip-day');
const amountSpentInput = document.getElementById('amount-spent');
const dayNumberSpan = document.getElementById('day-number');
const remainingBudgetSpan = document.getElementById('remaining-budget');

// Set the initial total budget
let totalBudget = 5000;

// Initialize day number
let dayNumber = 1;

// Add event listeners to input fields
dailyBudgetInput.addEventListener('input', updateRemainingBudget);
tripDayInput.addEventListener('input', updateRemainingBudget);
amountSpentInput.addEventListener('input', updateRemainingBudget);

function updateRemainingBudget() {
    // Get the daily budget, trip day, and amount spent values
    const dailyBudget = parseFloat(dailyBudgetInput.value) || 0;
    const tripDay = parseInt(tripDayInput.value) || 1;
    const amountSpent = parseFloat(amountSpentInput.value) || 0;

    // Calculate the remaining budget for the specified day
    if (tripDay >= 1 && tripDay <= 106) {
        dayNumber = tripDay;
        const remainingBudget = totalBudget - (dailyBudget * (dayNumber - 1)) - amountSpent;
        totalBudget += dailyBudget - amountSpent; // Apply rollover if amount spent is less than the daily budget
        remainingBudgetSpan.textContent = `${remainingBudget.toFixed(2)}`;
    } else {
        // Invalid day number, reset to day 1
        dayNumber = 1;
        remainingBudgetSpan.textContent = `Invalid day number`;
    }

    // Update the displayed day number
    dayNumberSpan.textContent = `${dayNumber}`;
}
