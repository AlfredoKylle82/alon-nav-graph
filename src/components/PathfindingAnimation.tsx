import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  connections: number[];
}

interface Particle {
  x: number;
  y: number;
  targetIndex: number;
  progress: number;
  speed: number;
  pathIndex: number[];
}

export const PathfindingAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create a grid of nodes representing rooms/waypoints
    const nodes: Node[] = [];
    const gridCols = 8;
    const gridRows = 5;
    const marginX = canvas.width * 0.1;
    const marginY = canvas.height * 0.15;
    const spacingX = (canvas.width - marginX * 2) / (gridCols - 1);
    const spacingY = (canvas.height - marginY * 2) / (gridRows - 1);

    // Generate nodes
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        nodes.push({
          x: marginX + col * spacingX + (Math.random() - 0.5) * 30,
          y: marginY + row * spacingY + (Math.random() - 0.5) * 30,
          connections: []
        });
      }
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < spacingX * 1.5 && Math.random() > 0.3) {
            node.connections.push(j);
          }
        }
      });
    });

    // Create particles that travel along paths
    const particles: Particle[] = [];
    const numParticles = 15;

    for (let i = 0; i < numParticles; i++) {
      const startNode = Math.floor(Math.random() * nodes.length);
      const pathLength = 5 + Math.floor(Math.random() * 8);
      const pathIndex = [startNode];
      
      let currentNode = startNode;
      for (let j = 0; j < pathLength; j++) {
        const connections = nodes[currentNode].connections;
        if (connections.length > 0) {
          currentNode = connections[Math.floor(Math.random() * connections.length)];
          pathIndex.push(currentNode);
        }
      }

      particles.push({
        x: nodes[startNode].x,
        y: nodes[startNode].y,
        targetIndex: 1,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        pathIndex
      });
    }

    // Animation frame counter for pulsing effect
    let frame = 0;

    // Animation loop
    const animate = () => {
      frame++;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections (paths)
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.15)';
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const targetNode = nodes[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes (waypoints)
      nodes.forEach((node) => {
        const pulse = Math.sin(frame * 0.02) * 0.3 + 0.7;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 15);
        gradient.addColorStop(0, `rgba(100, 200, 255, ${0.4 * pulse})`);
        gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 15, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.fillStyle = `rgba(100, 200, 255, ${0.8 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw particles
      particles.forEach((particle) => {
        if (particle.targetIndex >= particle.pathIndex.length) {
          // Reset particle to start
          particle.targetIndex = 1;
          particle.progress = 0;
          particle.x = nodes[particle.pathIndex[0]].x;
          particle.y = nodes[particle.pathIndex[0]].y;
          return;
        }

        const startNodeIndex = particle.pathIndex[particle.targetIndex - 1];
        const endNodeIndex = particle.pathIndex[particle.targetIndex];
        const startNode = nodes[startNodeIndex];
        const endNode = nodes[endNodeIndex];

        // Move particle
        particle.progress += particle.speed;
        if (particle.progress >= 1) {
          particle.progress = 0;
          particle.targetIndex++;
          if (particle.targetIndex >= particle.pathIndex.length) return;
        }

        // Interpolate position
        particle.x = startNode.x + (endNode.x - startNode.x) * particle.progress;
        particle.y = startNode.y + (endNode.y - startNode.y) * particle.progress;

        // Draw particle with trail
        const trailGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, 20
        );
        trailGradient.addColorStop(0, 'rgba(100, 230, 255, 0.8)');
        trailGradient.addColorStop(0.5, 'rgba(100, 200, 255, 0.4)');
        trailGradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
        ctx.fillStyle = trailGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.fillStyle = 'rgba(150, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw active path segment
        ctx.strokeStyle = 'rgba(100, 230, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startNode.x, startNode.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};
