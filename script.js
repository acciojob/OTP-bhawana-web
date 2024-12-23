// Get all OTP input fields
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

    // Move focus automatically to the next input
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });

    // Handle backspace to focus the previous input
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});
