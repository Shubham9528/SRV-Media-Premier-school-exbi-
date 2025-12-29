document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.hero__image-column');
    
    columns.forEach(col => {
        // Clone all children to ensure seamless loop
        const children = Array.from(col.children);
        
        // Clone children to create the infinite buffer
        // We append duplicates so the animation can slide up seamlessly
        children.forEach(child => {
            const clone = child.cloneNode(true);
            col.appendChild(clone);
        });
    });
    
    console.log('Hero animations initialized');
});
