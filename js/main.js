console.log('Main JS loaded');

// Features Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('featuresTrack');
    const prevBtn = document.getElementById('featuresPrev');
    const nextBtn = document.getElementById('featuresNext');

    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;

        const updateSlider = () => {
            const cards = track.querySelectorAll('.feature-card');
            if (cards.length === 0) return;

            const cardWidth = cards[0].offsetWidth;
            const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
            const slideAmount = cardWidth + gap;
            
            // Limit index
            if (currentIndex < 0) currentIndex = 0;
            if (currentIndex > cards.length - 1) currentIndex = cards.length - 1;

            track.style.transform = `translateX(-${currentIndex * slideAmount}px)`;
            
            // Optional: Disable buttons visual state
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex >= cards.length - 1 ? '0.5' : '1';
        };
        
        // Initial update
        updateSlider();

        nextBtn.addEventListener('click', () => {
            const cards = track.querySelectorAll('.feature-card');
            if (currentIndex < cards.length - 1) {
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
    }
});
