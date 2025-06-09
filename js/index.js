window.addEventListener('DOMContentLoaded', () => {
    const introSection = document.querySelector('.introduction');
    const originalParticle = introSection.querySelector('.circleParticle');

    if (!introSection || !originalParticle) return;

    // Hide the original SVG
    originalParticle.style.display = 'none';

    // Create a container for the particles
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'absolute';
    particleContainer.style.left = '0';
    particleContainer.style.top = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = -1;

    // Animate the container's rotation
    particleContainer.animate(
        [
            { transform: 'rotate(-30deg)' },
            { transform: 'rotate(0deg)' }
        ],
        {
            duration: 1800,
            easing: 'cubic-bezier(0.15, 0.85, 0.35, 1.1)',
            fill: 'forwards'
        }
    );

    // Get the center of the introduction section
    const introRect = introSection.getBoundingClientRect();
    const centerX = introRect.width / 2;
    const centerY = introRect.height / 2;

    for (let i = 0; i < 15; i++) {
        const clone = originalParticle.cloneNode(true);
        clone.setAttribute('aria-label', 'none');
        clone.style.display = 'block';
        clone.style.position = 'absolute';
        clone.style.zIndex = -1;
        clone.style.pointerEvents = 'none';

        // Random angle and decreased distance
        const angle = Math.random() * 2 * Math.PI;
        const radius = 140 + Math.random() * 130; // 120–220px

        // Random scale between 0.5x and 2x
        const scale = 0.5 + Math.random() * 1.5;

        // Final position
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Start at center
        clone.style.left = `${centerX}px`;
        clone.style.top = `${centerY}px`;

        // Random opacity
        const opacity = 0.3 + Math.random() * 0.7;
        clone.style.opacity = opacity;

        // Animate to final position
        clone.animate(
            [
                { left: `${centerX}px`, top: `${centerY}px`, transform: `scale(${scale})` },
                { left: `${x}px`, top: `${y}px`, transform: `scale(${scale})` }
            ],
            {
                duration: 1800,
                easing: 'cubic-bezier(0.15, 0.85, 0.35, 1.1)',
                fill: 'forwards',
                delay: Math.random() * 400
            }
        );

        // Set final position after animation for accessibility
        setTimeout(() => {
            clone.style.left = `${x}px`;
            clone.style.top = `${y}px`;
            clone.style.transform = `scale(${scale})`;
        }, 2200);

        particleContainer.appendChild(clone);
    }

    introSection.appendChild(particleContainer);
});