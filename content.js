function hideElements() {

    if (!path.startsWith("/problems/") || !path.startsWith("/problemset/")) return;

    // Problemset page difficulty
    document.querySelectorAll('.text-sd-easy, .text-sd-medium, .text-sd-hard')
        .forEach(el => el.style.display = "none");

    // Problem page difficulty
    document.querySelectorAll('.text-difficulty-easy, .text-difficulty-medium, .text-difficulty-hard')
        .forEach(el => el.parentElement.style.display = "none");

    // Acceptance rate
    document.querySelectorAll('div:has(> .text-xs)').forEach(el => {
        if (el.innerText.includes("%")) {
            el.style.display = "none";
        }
    });

    document.querySelectorAll('.text-sd-muted-foreground').forEach(el => {
        if (el.innerText.includes("%")) {
            el.style.display = "none";
        }
    });
}

hideElements();

// TODO : find a better way to do this
let elapsed = 0;
const interval = setInterval(() => {
    hideElements();
    elapsed += 300;
    if (elapsed >= 10000) clearInterval(interval);
}, 300);