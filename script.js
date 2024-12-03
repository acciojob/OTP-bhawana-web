//your JS code here. If required.
// Selecting all input elements
const otpInputs = document.querySelectorAll('.code');

// Adding event listener to each OTP input field
otpInputs.forEach((input, index) => {
  // On input, move focus to the next input
  input.addEventListener('input', () => {
    // If the current input is filled, focus on the next input field
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  // On keydown (backspace handling)
  input.addEventListener('keydown', (e) => {
    // If backspace is pressed, move focus to the previous input
    if (e.key === 'Backspace' && input.value === '') {
      if (index > 0) {
        otpInputs[index - 1].focus();
      }
    }
  });
});
