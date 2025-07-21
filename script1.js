
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // semakin kecil semakin cepat

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;

        const updateCount = () => {
            const increment = Math.ceil(target / speed);

            if (count < target) {
                count += increment;
                counter.innerText = count > target ? target : count;
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

