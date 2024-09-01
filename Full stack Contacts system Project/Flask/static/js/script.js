

document.querySelectorAll('input, select').forEach(input => {
    const label = input.closest('div').querySelector('label');
    
    input.addEventListener('focus', () => {
        label.style.fontWeight = 'bold';
        input.style.color = 'black';
    });
    
    input.addEventListener('blur', () => {
        label.style.fontWeight = 'normal';
        input.style.color = 'green';
    });
});