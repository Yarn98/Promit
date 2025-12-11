class Animator {
    static play(element, animationName, duration = null) {
        if (!element) return;
        element.classList.remove(animationName);
        void element.offsetWidth;  
        element.classList.add(animationName);
        const onEnd = () => {
            element.classList.remove(animationName);
            element.removeEventListener('animationend', onEnd);
        };
        element.addEventListener('animationend', onEnd);
    }
}
window.Animator = Animator;