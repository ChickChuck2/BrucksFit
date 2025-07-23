document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const bars = document.querySelectorAll('.carousel-progress .progress-bar');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;
    let interval;
    let progressInterval;
    const duration = 5000; // 5 segundos

    function resetProgressBars() {
        bars.forEach(bar => {
            bar.innerHTML = '<span class="fill"></span>';
            bar.classList.remove('active');
        });
    }

    function animateProgressBar(idx) {
        const fill = bars[idx].querySelector('.fill');
        let start = null;
        bars[idx].classList.add('active');
        function animate(ts) {
            if (!start) start = ts;
            const elapsed = ts - start;
            const percent = Math.min((elapsed / duration) * 100, 100);
            fill.style.width = percent + '%';
            if (percent < 100) {
                progressInterval = requestAnimationFrame(animate);
            }
        }
        progressInterval = requestAnimationFrame(animate);
    }

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        resetProgressBars();
        animateProgressBar(idx);
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    function startAuto() {
        interval = setInterval(nextSlide, duration);
    }

    function stopAuto() {
        clearInterval(interval);
        cancelAnimationFrame(progressInterval);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAuto();
        startAuto();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAuto();
        startAuto();
    });

    bars.forEach((bar, idx) => {
        bar.addEventListener('click', () => {
            showSlide(idx);
            stopAuto();
            startAuto();
        });
    });

    // Inicialização
    resetProgressBars();
    showSlide(0);
    startAuto();
});