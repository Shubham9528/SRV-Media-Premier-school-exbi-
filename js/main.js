console.log('Main JS loaded');

const setupSlider = (trackId, prevBtnId, nextBtnId, cardSelector, dotsId = null) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = dotsId ? document.getElementById(dotsId) : null;

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const cards = track.querySelectorAll(cardSelector);
    
    // Create Dots if container exists
    if (dotsContainer && cards.length > 0) {
        dotsContainer.innerHTML = ''; // Clear
        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const updateSlider = () => {
        const currentCards = track.querySelectorAll(cardSelector); // Re-query in case of dynamic changes?
        if (currentCards.length === 0) return;

        const cardWidth = currentCards[0].offsetWidth;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
        const slideAmount = cardWidth + gap;
        
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > currentCards.length - 1) currentIndex = currentCards.length - 1;

        track.style.transform = `translateX(-${currentIndex * slideAmount}px)`;
        
        // Update Buttons
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= currentCards.length - 1 ? '0.5' : '1';
        prevBtn.setAttribute('aria-disabled', currentIndex === 0);
        nextBtn.setAttribute('aria-disabled', currentIndex >= currentCards.length - 1);

        // Update Dots
        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }
    };
    
    // Initial update
    updateSlider();

    nextBtn.addEventListener('click', () => {
        const currentCards = track.querySelectorAll(cardSelector);
        if (currentIndex < currentCards.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener('resize', () => {
        currentIndex = 0;
        updateSlider();
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Features Slider (No dots passed)
    setupSlider('featuresTrack', 'featuresPrev', 'featuresNext', '.feature-card');
    
    // Choose School Slider (With dots)
    setupSlider('chooseTrack', 'choosePrev', 'chooseNext', '.choose-card', 'chooseDots');
});
