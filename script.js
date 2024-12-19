// Get all OTP input fields
const otpInputs = document.querySelectorAll('.code');

// Function to handle typing in OTP inputs
otpInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        // Move focus to next input on key input
        if (event.target.value !== '') {
            // If not the last input, move to the next
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        }
    });

    // Handle the backspace key
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            // If current input is empty and backspace is pressed, focus the previous input
            if (input.value === '' && index > 0) {
                otpInputs[index - 1].focus();
            }
        }
    });
});

// Focus on the first input initially
otpInputs[0].focus();
