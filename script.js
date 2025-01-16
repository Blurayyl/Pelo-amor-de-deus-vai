// Espera o DOM carregar completamente antes de adicionar o evento ao botão
window.addEventListener('DOMContentLoaded', function() {
    // Pega o botão e o container da imagem
    const btnAmor = document.getElementById('btn-amor');
    const imagemContainer = document.getElementById('imagem-container');

    // Adiciona o evento de clique no botão
    btnAmor.addEventListener('click', function() {
        // Remove a classe 'hidden' do container da imagem para exibi-la
        imagemContainer.classList.remove('hidden');
    });
});
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Firework {
    constructor(x, y, colors) {
        this.x = x;
        this.y = y;
        this.colors = colors;
        this.particles = [];
        this.createParticles();
    }

    createParticles() {
        const count = 100;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.particles.push({
                x: this.x,
                y: this.y,
                vx: vx,
                vy: vy,
                alpha: 1,
                color: color,
            });
        }
    }

    update() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.alpha -= 0.02;
        });

        this.particles = this.particles.filter(p => p.alpha > 0);
    }

    draw() {
        this.particles.forEach(particle => {
            ctx.globalAlpha = particle.alpha;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }
}

const fireworks = [];
const colors = ['#ff4d4d', '#4d94ff', '#4dff88', '#ffff4d', '#ff944d'];

function spawnFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    fireworks.push(new Firework(x, y, colors));
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.particles.length === 0) {
            fireworks.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

// Spawning fireworks infinitely
setInterval(spawnFirework, 500);
animate();
