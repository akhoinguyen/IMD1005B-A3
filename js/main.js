function WowClick() {
    const button = document.querySelector('.wow-btn');
    if (!button) return;

    // Add class and change text
    document.body.classList.add('wow-clicked');
    const originalText = button.innerText;
    button.innerText = 'Thanksss! :)';

    // After 2 seconds, revert changes
    setTimeout(() => {
        document.body.classList.remove('wow-clicked');
        button.innerText = originalText;
    }, 2000);
}