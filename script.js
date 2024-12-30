// Get all OTP input fields
// Get all the OTP input fields
const inputs = document.querySelectorAll('.code');

// Add event listeners to each input field to handle the focus and backspace
inputs.forEach((input, index) => {
  // Move focus to the next input when a digit is entered
  input.addEventListener('input', (e) => {
    if (e.target.value !== '') {
      // Focus the next input field if the current one is filled
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  // Focus the previous input field if the backspace key is pressed
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
      // Focus the previous input field
      const prevInput = inputs[index - 1];
      prevInput.focus();
    }
  });
});
