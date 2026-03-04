import React, { useEffect, useRef } from 'react';

const MapCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Основные города США
        const cities = [
            { name: 'Los Angeles', x: 0.15, y: 0.65, color: '#6366f1' },
            { name: 'Phoenix', x: 0.22, y: 0.68, color: '#8b5cf6' },
            { name: 'Dallas', x: 0.48, y: 0.68, color: '#ec4899' },
            { name: 'Chicago', x: 0.58, y: 0.42, color: '#22d3ee' },
            { name: 'Atlanta', x: 0.68, y: 0.65, color: '#10b981' },
            { name: 'New York', x: 0.82, y: 0.38, color: '#f59e0b' },
            { name: 'Miami', x: 0.75, y: 0.85, color: '#ef4444' },
            { name: 'Seattle', x: 0.12, y: 0.25, color: '#a78bfa' },
            { name: 'Denver', x: 0.35, y: 0.48, color: '#34d399' },
        ];

        // Маршруты
        const routes = [
            { from: 0, to: 1 },
            { from: 1, to: 2 },
            { from: 2, to: 3 },
            { from: 3, to: 4 },
            { from: 4, to: 5 },
            { from: 0, to: 8 },
            { from: 8, to: 3 },
            { from: 2, to: 4 },
            { from: 4, to: 6 },
            { from: 7, to: 8 },
            { from: 3, to: 5 },
        ];

        // Грузовики
        const trucks = routes.map(route => ({
            route,
            progress: Math.random(),
            speed: 0.0003 + Math.random() * 0.0002,
        }));

        const animate = () => {
            time++;

            // Градиентный фон
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0e1a');
            gradient.addColorStop(0.5, '#1a1f35');
            gradient.addColorStop(1, '#2a1f3f');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Рисуем маршруты
            routes.forEach(route => {
                const from = cities[route.from];
                const to = cities[route.to];

                const x1 = from.x * canvas.width;
                const y1 = from.y * canvas.height;
                const x2 = to.x * canvas.width;
                const y2 = to.y * canvas.height;

                // Свечение
                ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();

                // Линия
                ctx.strokeStyle = from.color;
                ctx.lineWidth = 2;
                ctx.setLineDash([10, 10]);
                ctx.lineDashOffset = -time * 2;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.setLineDash([]);
            });

            // Рисуем грузовики
            trucks.forEach(truck => {
                truck.progress += truck.speed;
                if (truck.progress > 1) truck.progress = 0;

                const from = cities[truck.route.from];
                const to = cities[truck.route.to];

                const x = (from.x + (to.x - from.x) * truck.progress) * canvas.width;
                const y = (from.y + (to.y - from.y) * truck.progress) * canvas.height;

                // Свечение грузовика
                const grd = ctx.createRadialGradient(x, y, 0, x, y, 15);
                grd.addColorStop(0, 'rgba(99, 102, 241, 0.8)');
                grd.addColorStop(1, 'rgba(99, 102, 241, 0)');
                ctx.fillStyle = grd;
                ctx.fillRect(x - 15, y - 15, 30, 30);

                // Точка
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                ctx.strokeStyle = from.color;
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            // Рисуем города
            cities.forEach(city => {
                const x = city.x * canvas.width;
                const y = city.y * canvas.height;

                // Пульсация
                const pulse = Math.sin(time * 0.002) * 0.3 + 0.7;
                const glowSize = 20 * pulse;

                const grd = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
                grd.addColorStop(0, city.color + '80');
                grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = grd;
                ctx.fillRect(x - glowSize, y - glowSize, glowSize * 2, glowSize * 2);

                // Круг города
                ctx.beginPath();
                ctx.arc(x, y, 8, 0, Math.PI * 2);
                ctx.strokeStyle = city.color;
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = city.color;
                ctx.fill();

                // Название
                ctx.font = '12px Inter, sans-serif';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.textAlign = 'center';
                ctx.fillText(city.name, x, y - 15);
            });

            // Панели с данными
            const panels = [
                { x: 0.1, y: 0.15, text: '$2,450', label: 'AVG RATE' },
                { x: 0.85, y: 0.2, text: '1,247', label: 'LOADS' },
                { x: 0.5, y: 0.9, text: '98.5%', label: 'ON-TIME' },
            ];

            panels.forEach(panel => {
                const x = panel.x * canvas.width;
                const y = panel.y * canvas.height;

                ctx.fillStyle = 'rgba(10, 10, 14, 0.7)';
                ctx.fillRect(x - 60, y - 25, 120, 50);

                ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
                ctx.lineWidth = 1;
                ctx.strokeRect(x - 60, y - 25, 120, 50);

                ctx.font = 'bold 16px Inter, sans-serif';
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.fillText(panel.text, x, y - 5);

                ctx.font = '10px Inter, sans-serif';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.fillText(panel.label, x, y + 12);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default MapCanvas;
