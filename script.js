/**
 * ==========================================================================
 * HIGH-PERFORMANCE AMBIENT MATRIX: FIRE EMBERS, DRAGON SMOKE & LIGHTNING
 * ==========================================================================
 */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
const lightningOverlay = document.getElementById('lightning-overlay');

let particles = [];
let width, height;

// Resize execution framework
function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Particle Architectural Blueprint
class Particle {
    constructor() {
        this.reset();
        // Stagger spawn locations evenly across initial run
        this.y = Math.random() * height;
    }

    reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 20;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1;
        this.alpha = 1;
        // Cycle colors between pure neon red, crimson, and deep golden accents
        this.colorType = Math.random(); 
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        
        // Dynamic drag/fade architecture simulating cooling embers
        this.alpha -= 0.0025;

        if (this.alpha <= 0 || this.y < 0) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        let color = 'rgba(255, 0, 60, '; // Neon Red
        if (this.colorType > 0.7) color = 'rgba(212, 175, 55, '; // Gold Embers
        else if (this.colorType > 0.4) color = 'rgba(163, 0, 34, '; // Crimson Smoke Core

        ctx.fillStyle = color + this.alpha + ')';
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = color + '1)';
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Populate structural matrix
const totalParticles = 75;
for (let i = 0; i < totalParticles; i++) {
    particles.push(new Particle());
}

// Dramatic Lightning Generation Engine
function triggerLightning() {
    const isDoubleStrike = Math.random() > 0.5;
    
    const strike = () => {
        // High voltage flash intensity variation
        lightningOverlay.style.background = 'rgba(255, 0, 50, 0.25)';
        setTimeout(() => {
            lightningOverlay.style.background = 'rgba(255, 0, 50, 0)';
            setTimeout(() => {
                lightningOverlay.style.background = 'rgba(255, 0, 50, 0.15)';
                setTimeout(() => {
                    lightningOverlay.style.background = 'rgba(255, 0, 50, 0)';
                }, 60);
            }, 40);
        }, 80);
    };

    strike();
    if (isDoubleStrike) {
        setTimeout(strike, 350);
    }

    // Schedule next random atmospheric rupture (between 6 and 15 seconds)
    setTimeout(triggerLightning, Math.random() * 9000 + 6000);
}
// Start lightning lifecycle shortly after startup
setTimeout(triggerLightning, 4000);

// Unified Render Engine
function animate() {
    // Semi-transparent clearing loop creates custom dark motion blur smoke trails
    ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
    ctx.fillRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}
animate();


/**
 * ==========================================================================
 * INTERACTION RULES & CIPHER VERIFICATION
 * ==========================================================================
 */

// Toggle field visibility structure
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        // Swap into open eye aesthetic dynamically
        eyeIcon.innerHTML = `<path fill="currentColor" d="M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1 12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>`;
    } else {
        passwordInput.type = 'password';
        // Restore locked closed-eye state
        eyeIcon.innerHTML = `<path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,4.5C7,4.5 2.73,7.61 1 12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>`;
    }
}

// Authentication Interception Execution
function handleLogin(event) {
    event.preventDefault(); // Lock browser reload payload

    const userField = document.getElementById('username');
    const passField = document.getElementById('password');
    const loginCard = document.getElementById('login-card');
    const errorPopup = document.getElementById('error-popup');

    const targetUser = "sosoAK47";
    const targetPass = "findbugwithoutool's";

    if (userField.value === targetUser && passField.value === targetPass) {
        // SUCCESS ROUTE
        executeSecureTransition();
    } else {
        // CRITICAL FAULT ROUTE
        
        // 1. Add shake physics mechanics and red error alert colors
        loginCard.classList.add('shake', 'card-error-border');
        
        // 2. Fire up the presentation error notification bar
        errorPopup.classList.remove('error-popup-hidden');
        errorPopup.classList.add('error-popup-visible');

        // 3. Clear the bad payload inputs to let the presenter try again cleanly
        passField.value = '';
        
        // 4. Teardown alert state anomalies after short window
        setTimeout(() => {
            loginCard.classList.remove('shake');
        }, 400);

        setTimeout(() => {
            errorPopup.classList.remove('error-popup-visible');
            errorPopup.classList.add('error-popup-hidden');
            loginCard.classList.remove('card-error-border');
        }, 3500);
    }
}

// Smooth Scene Cross-Fade Controller
function executeSecureTransition() {
    const loginScreen = document.getElementById('login-screen');
    const successScreen = document.getElementById('success-screen');

    // Fade and scale down login view
    loginScreen.classList.remove('active-screen');
    loginScreen.classList.add('hidden-screen');

    // Bring up the premium achievement dashboard matrix smoothly
    setTimeout(() => {
        successScreen.classList.remove('hidden-screen');
        successScreen.classList.add('active-screen');
        
        // Dynamic cosmetic execution: Trigger massive background energy event upon access initialization
        lightningOverlay.style.background = 'rgba(255, 215, 0, 0.2)';
        setTimeout(() => {
            lightningOverlay.style.background = 'rgba(255, 215, 0, 0)';
        }, 400);
        
    }, 400);
}

// Audio Presentation Engine Trigger
function toggleAudio() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('audio-toggle');
    
    if (music.paused) {
        music.play().catch(err => console.log("Audio activation requires standard explicit gesture validation baseline first."));
        btn.style.color = 'var(--gold)';
        btn.style.borderColor = 'var(--gold)';
        btn.style.boxShadow = '0 0 10px var(--gold)';
    } else {
        music.pause();
        btn.style.color = 'var(--text-muted)';
        btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        btn.style.boxShadow = 'none';
    }
}