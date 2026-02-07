// ===== PHÁO HOA TẾT - ENHANCED FIREWORKS ANIMATION =====
// Animated fireworks effect for Vietnamese Tet theme with multiple types and realistic effects

class Fireworks {
    constructor() {
        this.canvas = document.getElementById('fireworks-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.rockets = [];

        // Enhanced Tet theme colors (more vibrant)
        this.tetColors = [
            '#FF0000', // Bright red
            '#D32F2F', // Red
            '#FFD700', // Gold
            '#FFA000', // Orange gold
            '#FF6F00', // Deep orange
            '#FFEB3B', // Bright yellow
            '#FF5722', // Red-orange
            '#FFC107', // Amber
            '#FF9800', // Orange
            '#FFFF00'  // Pure yellow
        ];

        // Firework types for variety
        this.types = ['chrysanthemum', 'palm', 'ring', 'willow'];

        this.resize();
        this.setupEventListeners();
        this.autoLaunch();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());

        // Click to launch fireworks
        this.canvas.addEventListener('click', (e) => {
            this.createRocket(e.clientX, e.clientY);
        });
    }

    // Auto launch fireworks more frequently
    autoLaunch() {
        setInterval(() => {
            // Launch 1-2 fireworks at random positions
            const count = Math.random() > 0.5 ? 2 : 1;
            for (let i = 0; i < count; i++) {
                const x = Math.random() * this.canvas.width;
                const y = Math.random() * (this.canvas.height * 0.3) + 50;
                this.createRocket(x, y);
            }
        }, 1500 + Math.random() * 1500); // Every 1.5-3 seconds
    }

    createRocket(targetX, targetY) {
        const startX = Math.random() * this.canvas.width;
        const startY = this.canvas.height;

        this.rockets.push({
            x: startX,
            y: startY,
            targetX: targetX,
            targetY: targetY,
            velocity: 6 + Math.random() * 4, // Faster rockets
            trail: [],
            color: this.tetColors[Math.floor(Math.random() * this.tetColors.length)],
            type: this.types[Math.floor(Math.random() * this.types.length)]
        });
    }

    updateRockets() {
        for (let i = this.rockets.length - 1; i >= 0; i--) {
            const rocket = this.rockets[i];

            // Calculate direction to target
            const dx = rocket.targetX - rocket.x;
            const dy = rocket.targetY - rocket.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 5) {
                // Rocket reached target, create explosion
                this.createExplosion(rocket.x, rocket.y, rocket.color, rocket.type);
                this.rockets.splice(i, 1);
            } else {
                // Move rocket towards target
                rocket.x += (dx / distance) * rocket.velocity;
                rocket.y += (dy / distance) * rocket.velocity;

                // Add trail with sparkles
                rocket.trail.push({ x: rocket.x, y: rocket.y, alpha: 1 });
                if (rocket.trail.length > 15) {
                    rocket.trail.shift();
                }
            }
        }
    }

    drawRockets() {
        this.rockets.forEach(rocket => {
            // Draw glowing trail
            rocket.trail.forEach((point, index) => {
                const alpha = (index / rocket.trail.length) * 0.8;
                const size = (index / rocket.trail.length) * 3;

                // Glow effect
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = rocket.color;
                this.ctx.fillStyle = rocket.color;
                this.ctx.globalAlpha = alpha;
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                this.ctx.fill();
            });

            // Draw rocket head with glow
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = rocket.color;
            this.ctx.fillStyle = rocket.color;
            this.ctx.globalAlpha = 1;
            this.ctx.beginPath();
            this.ctx.arc(rocket.x, rocket.y, 3, 0, Math.PI * 2);
            this.ctx.fill();

            // Reset shadow
            this.ctx.shadowBlur = 0;
            this.ctx.globalAlpha = 1;
        });
    }

    createExplosion(x, y, baseColor, type) {
        const particleCount = 80 + Math.random() * 120; // 80-200 particles

        for (let i = 0; i < particleCount; i++) {
            let angle, velocity, particle;

            switch (type) {
                case 'chrysanthemum':
                    // Classic burst in all directions
                    angle = (Math.PI * 2 * i) / particleCount;
                    velocity = 2 + Math.random() * 5;
                    particle = this.createParticle(x, y, angle, velocity, baseColor);
                    particle.sparkle = Math.random() > 0.7; // 30% sparkle
                    break;

                case 'palm':
                    // Palm tree effect - curves downward
                    angle = (Math.PI * 2 * i) / particleCount;
                    velocity = 3 + Math.random() * 4;
                    particle = this.createParticle(x, y, angle, velocity, baseColor);
                    particle.gravity = 0.15; // More gravity
                    particle.drag = 0.98; // Air resistance
                    break;

                case 'ring':
                    // Ring explosion
                    angle = (Math.PI * 2 * i) / particleCount;
                    velocity = 4 + Math.random() * 2; // Uniform velocity
                    particle = this.createParticle(x, y, angle, velocity, baseColor);
                    particle.life = 100; // Longer life
                    break;

                case 'willow':
                    // Willow effect - trails downward
                    angle = (Math.PI * 2 * i) / particleCount;
                    velocity = 2 + Math.random() * 3;
                    particle = this.createParticle(x, y, angle, velocity, baseColor);
                    particle.trail = [];
                    particle.hasTrail = true;
                    particle.gravity = 0.2;
                    break;
            }

            this.particles.push(particle);
        }
    }

    createParticle(x, y, angle, velocity, baseColor) {
        // Vary color slightly for more realistic effect
        const colorVariations = [baseColor, this.tetColors[Math.floor(Math.random() * this.tetColors.length)]];
        const color = Math.random() > 0.3 ? baseColor : colorVariations[1];

        return {
            x: x,
            y: y,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            alpha: 1,
            color: color,
            size: 2 + Math.random() * 3,
            decay: 0.012 + Math.random() * 0.008,
            gravity: 0.08,
            drag: 0.99,
            sparkle: false,
            hasTrail: false,
            trail: [],
            life: 80
        };
    }

    updateParticles() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            // Store trail for willow effect
            if (p.hasTrail) {
                p.trail.push({ x: p.x, y: p.y, alpha: p.alpha });
                if (p.trail.length > 10) p.trail.shift();
            }

            // Apply drag
            if (p.drag) {
                p.vx *= p.drag;
                p.vy *= p.drag;
            }

            // Update position
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;

            // Reduce alpha
            p.alpha -= p.decay;
            p.life--;

            // Remove dead particles
            if (p.alpha <= 0 || p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    drawParticles() {
        this.particles.forEach(p => {
            // Draw trail for willow effect
            if (p.hasTrail && p.trail.length > 0) {
                p.trail.forEach((t, index) => {
                    const trailAlpha = (index / p.trail.length) * t.alpha * 0.5;
                    this.ctx.fillStyle = p.color;
                    this.ctx.globalAlpha = trailAlpha;
                    this.ctx.beginPath();
                    this.ctx.arc(t.x, t.y, 1, 0, Math.PI * 2);
                    this.ctx.fill();
                });
            }

            // Draw main particle with glow
            this.ctx.save();
            this.ctx.shadowBlur = p.sparkle ? 15 : 8;
            this.ctx.shadowColor = p.color;
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Extra sparkle effect
            if (p.sparkle && p.alpha > 0.5) {
                this.ctx.strokeStyle = '#FFFFFF';
                this.ctx.lineWidth = 1;
                this.ctx.globalAlpha = p.alpha * 0.5;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x - p.size * 2, p.y);
                this.ctx.lineTo(p.x + p.size * 2, p.y);
                this.ctx.moveTo(p.x, p.y - p.size * 2);
                this.ctx.lineTo(p.x, p.y + p.size * 2);
                this.ctx.stroke();
            }

            this.ctx.restore();
        });
    }

    animate() {
        // Clear canvas completely for transparency (no dark overlay)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw
        this.updateRockets();
        this.updateParticles();
        this.drawRockets();
        this.drawParticles();

        requestAnimationFrame(() => this.animate());
    }

    start() {
        this.animate();
    }
}

// Initialize fireworks when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const fireworks = new Fireworks();
    fireworks.start();
});
