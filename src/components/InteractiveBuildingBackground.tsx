import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  RotateCw, 
  Layers, 
  Sun, 
  Moon, 
  Sparkles, 
  Plus, 
  Maximize2, 
  Minimize2, 
  Eye, 
  Compass,
  Sliders,
  RefreshCw
} from 'lucide-react';

export type BackgroundTheme = 'sandstone' | 'blueprint' | 'monochrome' | 'twilight';

interface BuildingBlock {
  id: string;
  x: number; // 3D local coords
  y: number;
  z: number;
  w: number; // width
  d: number; // depth
  h: number; // height
  targetH: number; // for animated growth
  currentH: number;
  type: 'villa' | 'cantilever' | 'column' | 'pergola' | 'tower' | 'courtyard' | 'pool' | 'glass_box';
  label?: string;
  dimension?: string;
  colorOffset?: number;
  stories?: number;
}

interface InteractiveBuildingBackgroundProps {
  className?: string;
  initialTheme?: BackgroundTheme;
  interactive?: boolean;
  showControls?: boolean;
  heightClass?: string;
  overlayGradient?: boolean;
  onBlockClick?: (block: BuildingBlock) => void;
}

export function InteractiveBuildingBackground({
  className = '',
  initialTheme = 'sandstone',
  interactive = true,
  showControls = true,
  heightClass = 'h-full',
  overlayGradient = true,
  onBlockClick
}: InteractiveBuildingBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // States for visual modes and controls
  const [theme, setTheme] = useState<BackgroundTheme>(initialTheme);
  const [autoRotate, setAutoRotate] = useState(true);
  const [sunAngle, setSunAngle] = useState(45); // Degrees
  const [showDimensions, setShowDimensions] = useState(true);
  const [showStructuralNodes, setShowStructuralNodes] = useState(true);
  const [activePreset, setActivePreset] = useState<'residence' | 'commercial' | 'skyline'>('residence');
  const [hoveredBlock, setHoveredBlock] = useState<BuildingBlock | null>(null);
  const [constructionCount, setConstructionCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // 3D Camera / Orbit state
  const cameraRef = useRef({
    rotX: 28 * (Math.PI / 180),
    rotY: -35 * (Math.PI / 180),
    targetRotX: 28 * (Math.PI / 180),
    targetRotY: -35 * (Math.PI / 180),
    zoom: 1.0,
    targetZoom: 1.0,
    panX: 0,
    panY: 20,
    isDragging: false,
    startX: 0,
    startY: 0,
    mouseX: 0,
    mouseY: 0
  });

  // Building geometry database
  const blocksRef = useRef<BuildingBlock[]>([]);
  const particlesRef = useRef<Array<{ x: number; y: number; z: number; vx: number; vy: number; vz: number; size: number; alpha: number }>>([]);
  const constructionPulsesRef = useRef<Array<{ x: number; y: number; z: number; radius: number; maxRadius: number; alpha: number }>>([]);

  // Preset Builders
  const generateArchitecture = useCallback((preset: 'residence' | 'commercial' | 'skyline') => {
    const blocks: BuildingBlock[] = [];

    if (preset === 'residence') {
      // Contemporary Ajmer Lakefront Residence with Cantilevers & Courtyard
      // Ground Podium / Plinth
      blocks.push({
        id: 'plinth',
        x: 0, y: 0, z: 0,
        w: 240, d: 200, h: 14,
        targetH: 14, currentH: 0,
        type: 'courtyard',
        label: 'Granite Plinth (+0.45m)',
        dimension: '24.0m × 20.0m'
      });

      // Central Courtyard Reflection Pool
      blocks.push({
        id: 'pool',
        x: 10, y: 14, z: 20,
        w: 70, d: 60, h: 4,
        targetH: 4, currentH: 0,
        type: 'pool',
        label: 'Aravalli Water Court',
        dimension: '7.0m × 6.0m'
      });

      // Ground Floor Living Pavilion (East Wing)
      blocks.push({
        id: 'gf_living',
        x: -60, y: 14, z: -20,
        w: 90, d: 110, h: 48,
        targetH: 48, currentH: 0,
        type: 'villa',
        label: 'Formal Living & Gallery',
        dimension: '9.0m × 11.0m · H:4.8m',
        stories: 1
      });

      // Ground Floor Family & Dining Wing (West Wing)
      blocks.push({
        id: 'gf_dining',
        x: 50, y: 14, z: -30,
        w: 80, d: 90, h: 45,
        targetH: 45, currentH: 0,
        type: 'villa',
        label: 'Courtyard Dining Suite',
        dimension: '8.0m × 9.0m'
      });

      // Structural RCC Columns (Exposed)
      const columnCoords = [
        [-100, -70], [-100, 30], [-20, -70], [-20, 30],
        [30, -80], [90, -80], [30, 20], [90, 20]
      ];
      columnCoords.forEach(([cx, cz], i) => {
        blocks.push({
          id: `col_${i}`,
          x: cx, y: 14, z: cz,
          w: 8, d: 8, h: 105,
          targetH: 105, currentH: 0,
          type: 'column',
          label: `IS 456 RCC Column C${i + 1}`,
          dimension: '450mm × 450mm'
        });
      });

      // First Floor Cantilevered Master Suite (Extending out 4.5m over garden)
      blocks.push({
        id: 'ff_master',
        x: -45, y: 62, z: 15,
        w: 125, d: 95, h: 45,
        targetH: 45, currentH: 0,
        type: 'cantilever',
        label: 'Cantilevered Master Suite (+6.20m)',
        dimension: '12.5m × 9.5m · 4.2m Overhang',
        stories: 2
      });

      // First Floor Studio & Library with Glass Louvers
      blocks.push({
        id: 'ff_studio',
        x: 40, y: 59, z: -15,
        w: 95, d: 80, h: 42,
        targetH: 42, currentH: 0,
        type: 'glass_box',
        label: 'Architectural Library & Terrace',
        dimension: '9.5m × 8.0m'
      });

      // Rooftop Pergola / Solar Louver Canopy
      blocks.push({
        id: 'pergola',
        x: -20, y: 107, z: 10,
        w: 110, d: 85, h: 12,
        targetH: 12, currentH: 0,
        type: 'pergola',
        label: 'Passive Thermal Solar Louver Grid',
        dimension: '11.0m × 8.5m'
      });

      // Second Floor Sky Terrace Pavilion
      blocks.push({
        id: 'sf_pavilion',
        x: 35, y: 101, z: -20,
        w: 60, d: 50, h: 36,
        targetH: 36, currentH: 0,
        type: 'villa',
        label: 'Sunset Sky Lounge (+10.1m)',
        dimension: '6.0m × 5.0m',
        stories: 3
      });

    } else if (preset === 'commercial') {
      // Commercial Complex with Atrium & Glass Tower
      // Podium Mall
      blocks.push({
        id: 'comm_podium',
        x: 0, y: 0, z: 0,
        w: 220, d: 180, h: 35,
        targetH: 35, currentH: 0,
        type: 'courtyard',
        label: 'Commercial Retail Podium',
        dimension: '44m × 36m'
      });

      // High Rise Office Tower
      blocks.push({
        id: 'comm_tower',
        x: -40, y: 35, z: -20,
        w: 110, d: 100, h: 160,
        targetH: 160, currentH: 0,
        type: 'tower',
        label: 'Corporate Office Tower (+19.5m)',
        dimension: '22m × 20m · 8 Floors',
        stories: 8
      });

      // Glass Atrium Cube
      blocks.push({
        id: 'comm_atrium',
        x: 45, y: 35, z: 15,
        w: 75, d: 75, h: 70,
        targetH: 70, currentH: 0,
        type: 'glass_box',
        label: 'Double-Height Glazed Atrium',
        dimension: '15m × 15m'
      });

      // Cantilever Skybridge
      blocks.push({
        id: 'comm_bridge',
        x: 5, y: 95, z: -5,
        w: 40, d: 30, h: 22,
        targetH: 22, currentH: 0,
        type: 'cantilever',
        label: 'Structural Skybridge Connection',
        dimension: '8m Span'
      });

    } else {
      // Skyline Matrix (Ajmer Urban Corridor)
      for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
          if (Math.abs(i) === 0 && Math.abs(j) === 0) continue;
          const h = 40 + Math.abs(i * 30) + Math.abs(j * 25) + ((i + j) % 3) * 20;
          blocks.push({
            id: `sky_${i}_${j}`,
            x: i * 55, y: 0, z: j * 50,
            w: 42, d: 38, h: h,
            targetH: h, currentH: 0,
            type: h > 90 ? 'tower' : 'villa',
            label: `Urban Plot G-${Math.abs(i + j * 5) + 1}`,
            dimension: `${(h / 10).toFixed(1)}m Height`
          });
        }
      }
      // Central Landmark Hub
      blocks.push({
        id: 'sky_hub',
        x: 0, y: 0, z: 0,
        w: 65, d: 65, h: 140,
        targetH: 140, currentH: 0,
        type: 'tower',
        label: 'Design Plus Civic Center',
        dimension: '65m Landmark'
      });
    }

    blocksRef.current = blocks;

    // Reset particles
    const particles = [];
    for (let p = 0; p < 45; p++) {
      particles.push({
        x: (Math.random() - 0.5) * 400,
        y: Math.random() * 200,
        z: (Math.random() - 0.5) * 400,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() * 0.15) + 0.05,
        vz: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }
    particlesRef.current = particles;
  }, []);

  // Initialize architecture on preset change
  useEffect(() => {
    generateArchitecture(activePreset);
  }, [activePreset, generateArchitecture]);

  // Click handler to build a new parametric block
  const handleConstructNewBlock = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left - rect.width / 2;
    const clickY = e.clientY - rect.top - rect.height / 2;

    // Spawn construction pulse
    constructionPulsesRef.current.push({
      x: 0,
      y: 0,
      z: 0,
      radius: 5,
      maxRadius: 180,
      alpha: 1.0
    });

    // Add a new dynamic architectural volume
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 90;
    const newX = Math.cos(angle) * dist;
    const newZ = Math.sin(angle) * dist;
    const height = 45 + Math.random() * 65;

    const newBlock: BuildingBlock = {
      id: `custom_${Date.now()}`,
      x: Math.round(newX),
      y: 0,
      z: Math.round(newZ),
      w: 40 + Math.round(Math.random() * 30),
      d: 35 + Math.round(Math.random() * 25),
      h: Math.round(height),
      targetH: Math.round(height),
      currentH: 0,
      type: Math.random() > 0.5 ? 'cantilever' : 'glass_box',
      label: `Parametric Extension #${constructionCount + 1}`,
      dimension: `+${(height / 10).toFixed(1)}m LVL`
    };

    blocksRef.current.push(newBlock);
    setConstructionCount(prev => prev + 1);
  }, [constructionCount]);

  // Canvas Main Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    // Theme color schemes
    const getColors = () => {
      switch (theme) {
        case 'blueprint':
          return {
            bg: '#0c1524',
            gridLine: 'rgba(56, 189, 248, 0.12)',
            gridSub: 'rgba(56, 189, 248, 0.05)',
            wireframe: 'rgba(56, 189, 248, 0.85)',
            wireframeHidden: 'rgba(14, 165, 233, 0.25)',
            faceTop: 'rgba(14, 165, 233, 0.22)',
            faceLeft: 'rgba(2, 132, 199, 0.35)',
            faceRight: 'rgba(3, 105, 161, 0.45)',
            node: '#38bdf8',
            accent: '#38bdf8',
            text: '#7dd3fc',
            particle: '#38bdf8',
            ambient: '#0284c7'
          };
        case 'monochrome':
          return {
            bg: '#141414',
            gridLine: 'rgba(255, 255, 255, 0.08)',
            gridSub: 'rgba(255, 255, 255, 0.03)',
            wireframe: 'rgba(240, 240, 240, 0.75)',
            wireframeHidden: 'rgba(180, 180, 180, 0.18)',
            faceTop: 'rgba(230, 230, 230, 0.15)',
            faceLeft: 'rgba(180, 180, 180, 0.22)',
            faceRight: 'rgba(120, 120, 120, 0.3)',
            node: '#f5f5f5',
            accent: '#ffffff',
            text: '#d4d4d4',
            particle: '#e5e5e5',
            ambient: '#a3a3a3'
          };
        case 'twilight':
          return {
            bg: '#161320',
            gridLine: 'rgba(192, 132, 252, 0.1)',
            gridSub: 'rgba(168, 85, 247, 0.04)',
            wireframe: 'rgba(216, 180, 254, 0.8)',
            wireframeHidden: 'rgba(168, 85, 247, 0.2)',
            faceTop: 'rgba(192, 132, 252, 0.22)',
            faceLeft: 'rgba(147, 51, 234, 0.32)',
            faceRight: 'rgba(107, 33, 168, 0.42)',
            node: '#e9d5ff',
            accent: '#c084fc',
            text: '#f3e8ff',
            particle: '#e9d5ff',
            ambient: '#9333ea'
          };
        case 'sandstone':
        default:
          return {
            bg: '#1a1612',
            gridLine: 'rgba(245, 158, 11, 0.12)',
            gridSub: 'rgba(217, 119, 6, 0.05)',
            wireframe: 'rgba(251, 191, 36, 0.85)',
            wireframeHidden: 'rgba(217, 119, 6, 0.25)',
            faceTop: 'rgba(245, 158, 11, 0.22)',
            faceLeft: 'rgba(180, 83, 9, 0.38)',
            faceRight: 'rgba(120, 53, 15, 0.48)',
            node: '#fde68a',
            accent: '#fbbf24',
            text: '#fef3c7',
            particle: '#fde047',
            ambient: '#d97706'
          };
      }
    };

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    // 3D Projection Helpers
    const project3D = (
      x: number, y: number, z: number,
      rotX: number, rotY: number,
      centerX: number, centerY: number,
      scale: number
    ) => {
      // Yaw (Y axis)
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Pitch (X axis)
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Isometric / Axonometric perspective with subtle depth
      const perspective = 1000 / (1000 + z2 * 0.4);
      const projX = centerX + x1 * scale * perspective;
      const projY = centerY - y2 * scale * perspective;

      return { x: projX, y: projY, depth: z2 };
    };

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const colors = getColors();
      const width = containerRef.current?.clientWidth || 800;
      const height = containerRef.current?.clientHeight || 600;
      const centerX = width / 2 + cameraRef.current.panX;
      const centerY = height / 2 + cameraRef.current.panY + 40;
      const scale = Math.min(width, height) / 480 * cameraRef.current.zoom;

      // Smooth camera interpolation
      if (autoRotate && !cameraRef.current.isDragging) {
        cameraRef.current.targetRotY += 0.08 * dt;
      }

      cameraRef.current.rotX += (cameraRef.current.targetRotX - cameraRef.current.rotX) * 0.08;
      cameraRef.current.rotY += (cameraRef.current.targetRotY - cameraRef.current.rotY) * 0.08;
      cameraRef.current.zoom += (cameraRef.current.targetZoom - cameraRef.current.zoom) * 0.1;

      const rotX = cameraRef.current.rotX;
      const rotY = cameraRef.current.rotY;

      // Clear Canvas
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Render Dynamic Architectural Atmospheric Background Glow
      const sunRad = (sunAngle * Math.PI) / 180;
      const sunGradX = centerX + Math.cos(sunRad) * width * 0.4;
      const sunGradY = centerY - Math.sin(sunRad) * height * 0.3;
      const radialGrad = ctx.createRadialGradient(sunGradX, sunGradY, 10, centerX, centerY, Math.max(width, height) * 0.8);
      radialGrad.addColorStop(0, colors.ambient + '30');
      radialGrad.addColorStop(0.5, colors.ambient + '10');
      radialGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Architectural Coordinate Grid Plinth
      const gridSize = 320;
      const gridSteps = 8;
      const step = gridSize / gridSteps;

      ctx.lineWidth = 1;

      // Sub-grid
      ctx.strokeStyle = colors.gridSub;
      ctx.beginPath();
      for (let i = -gridSize; i <= gridSize; i += step / 2) {
        const p1 = project3D(i, 0, -gridSize, rotX, rotY, centerX, centerY, scale);
        const p2 = project3D(i, 0, gridSize, rotX, rotY, centerX, centerY, scale);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        const p3 = project3D(-gridSize, 0, i, rotX, rotY, centerX, centerY, scale);
        const p4 = project3D(gridSize, 0, i, rotX, rotY, centerX, centerY, scale);
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
      }
      ctx.stroke();

      // Major Structural Grid with Labels (A-H, 1-8)
      ctx.strokeStyle = colors.gridLine;
      ctx.beginPath();
      for (let i = -gridSize; i <= gridSize; i += step) {
        const p1 = project3D(i, 0, -gridSize, rotX, rotY, centerX, centerY, scale);
        const p2 = project3D(i, 0, gridSize, rotX, rotY, centerX, centerY, scale);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        const p3 = project3D(-gridSize, 0, i, rotX, rotY, centerX, centerY, scale);
        const p4 = project3D(gridSize, 0, i, rotX, rotY, centerX, centerY, scale);
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
      }
      ctx.stroke();

      // Grid Coordinates Labels
      if (showDimensions) {
        ctx.font = '9px monospace';
        ctx.fillStyle = colors.text + '80';
        ctx.textAlign = 'center';
        const labels = ['GRID A', 'GRID B', 'GRID C', 'GRID D', 'GRID E', 'GRID F', 'GRID G'];
        labels.forEach((lbl, idx) => {
          const gx = -gridSize + (idx + 1) * (gridSize * 2 / 8);
          const gp = project3D(gx, 0, gridSize + 15, rotX, rotY, centerX, centerY, scale);
          ctx.fillText(lbl, gp.x, gp.y);
        });
      }

      // 2. Animate and Draw Construction Pulses
      constructionPulsesRef.current.forEach((pulse, idx) => {
        pulse.radius += 120 * dt;
        pulse.alpha -= 0.8 * dt;
        if (pulse.alpha > 0) {
          ctx.save();
          ctx.strokeStyle = colors.accent + Math.round(pulse.alpha * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);

          // Draw expanding circular ellipse in 3D ground plane
          ctx.beginPath();
          const segments = 24;
          for (let s = 0; s <= segments; s++) {
            const rad = (s / segments) * Math.PI * 2;
            const px = pulse.x + Math.cos(rad) * pulse.radius;
            const pz = pulse.z + Math.sin(rad) * pulse.radius;
            const proj = project3D(px, pulse.y, pz, rotX, rotY, centerX, centerY, scale);
            if (s === 0) ctx.moveTo(proj.x, proj.y);
            else ctx.lineTo(proj.x, proj.y);
          }
          ctx.stroke();
          ctx.restore();
        }
      });
      constructionPulsesRef.current = constructionPulsesRef.current.filter(p => p.alpha > 0);

      // 3. Sort Building Blocks by Camera Depth (Painter's Algorithm)
      const blocksWithDepth = blocksRef.current.map(block => {
        // Animate block height growth
        if (block.currentH < block.targetH) {
          block.currentH += (block.targetH - block.currentH) * 0.12 + 0.5;
          if (block.currentH > block.targetH) block.currentH = block.targetH;
        }

        const center = project3D(block.x, block.y + block.currentH / 2, block.z, rotX, rotY, centerX, centerY, scale);
        return { block, depth: center.depth };
      });

      // Sort from back to front
      blocksWithDepth.sort((a, b) => a.depth - b.depth);

      // Render Each Building Volume
      blocksWithDepth.forEach(({ block }) => {
        const { x, y, z, w, d, currentH, type } = block;
        const hw = w / 2;
        const hd = d / 2;
        const h = currentH;

        // 8 Corners of the Cuboid Box
        const c = [
          project3D(x - hw, y, z - hd, rotX, rotY, centerX, centerY, scale),     // 0: Bottom-Back-Left
          project3D(x + hw, y, z - hd, rotX, rotY, centerX, centerY, scale),     // 1: Bottom-Back-Right
          project3D(x + hw, y, z + hd, rotX, rotY, centerX, centerY, scale),     // 2: Bottom-Front-Right
          project3D(x - hw, y, z + hd, rotX, rotY, centerX, centerY, scale),     // 3: Bottom-Front-Left
          project3D(x - hw, y + h, z - hd, rotX, rotY, centerX, centerY, scale), // 4: Top-Back-Left
          project3D(x + hw, y + h, z - hd, rotX, rotY, centerX, centerY, scale), // 5: Top-Back-Right
          project3D(x + hw, y + h, z + hd, rotX, rotY, centerX, centerY, scale), // 6: Top-Front-Right
          project3D(x - hw, y + h, z + hd, rotX, rotY, centerX, centerY, scale)  // 7: Top-Front-Left
        ];

        // Draw Translucent Isometric Shading Faces
        if (type !== 'pergola' && type !== 'column') {
          // Top Face (4-5-6-7)
          ctx.beginPath();
          ctx.moveTo(c[4].x, c[4].y);
          ctx.lineTo(c[5].x, c[5].y);
          ctx.lineTo(c[6].x, c[6].y);
          ctx.lineTo(c[7].x, c[7].y);
          ctx.closePath();
          ctx.fillStyle = type === 'pool' ? 'rgba(56, 189, 248, 0.45)' : colors.faceTop;
          ctx.fill();

          // Left/Front Face (3-2-6-7)
          ctx.beginPath();
          ctx.moveTo(c[3].x, c[3].y);
          ctx.lineTo(c[2].x, c[2].y);
          ctx.lineTo(c[6].x, c[6].y);
          ctx.lineTo(c[7].x, c[7].y);
          ctx.closePath();
          ctx.fillStyle = colors.faceLeft;
          ctx.fill();

          // Right Face (2-1-5-6)
          ctx.beginPath();
          ctx.moveTo(c[2].x, c[2].y);
          ctx.lineTo(c[1].x, c[1].y);
          ctx.lineTo(c[5].x, c[5].y);
          ctx.lineTo(c[6].x, c[6].y);
          ctx.closePath();
          ctx.fillStyle = colors.faceRight;
          ctx.fill();
        }

        // Draw Architectural Floor Slab Dividers & Glass Louvers
        if (block.stories && block.stories > 1) {
          ctx.strokeStyle = colors.wireframeHidden;
          ctx.lineWidth = 1;
          for (let s = 1; s < block.stories; s++) {
            const storyY = y + (h / block.stories) * s;
            const sc1 = project3D(x - hw, storyY, z + hd, rotX, rotY, centerX, centerY, scale);
            const sc2 = project3D(x + hw, storyY, z + hd, rotX, rotY, centerX, centerY, scale);
            const sc3 = project3D(x + hw, storyY, z - hd, rotX, rotY, centerX, centerY, scale);
            ctx.beginPath();
            ctx.moveTo(sc1.x, sc1.y);
            ctx.lineTo(sc2.x, sc2.y);
            ctx.lineTo(sc3.x, sc3.y);
            ctx.stroke();
          }
        }

        // Draw Pergola Louver Ribs
        if (type === 'pergola') {
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 1.5;
          const ribs = 6;
          for (let r = 0; r <= ribs; r++) {
            const rx = x - hw + (w / ribs) * r;
            const rp1 = project3D(rx, y + h, z - hd, rotX, rotY, centerX, centerY, scale);
            const rp2 = project3D(rx, y + h, z + hd, rotX, rotY, centerX, centerY, scale);
            ctx.beginPath();
            ctx.moveTo(rp1.x, rp1.y);
            ctx.lineTo(rp2.x, rp2.y);
            ctx.stroke();
          }
        }

        // Draw Primary Structural Wireframe Edges
        ctx.strokeStyle = colors.wireframe;
        ctx.lineWidth = type === 'column' ? 1.8 : 1.2;

        // Base rectangle
        ctx.beginPath();
        ctx.moveTo(c[0].x, c[0].y);
        ctx.lineTo(c[1].x, c[1].y);
        ctx.lineTo(c[2].x, c[2].y);
        ctx.lineTo(c[3].x, c[3].y);
        ctx.closePath();
        ctx.stroke();

        // Top rectangle
        ctx.beginPath();
        ctx.moveTo(c[4].x, c[4].y);
        ctx.lineTo(c[5].x, c[5].y);
        ctx.lineTo(c[6].x, c[6].y);
        ctx.lineTo(c[7].x, c[7].y);
        ctx.closePath();
        ctx.stroke();

        // Vertical corner pillars
        ctx.beginPath();
        ctx.moveTo(c[0].x, c[0].y); ctx.lineTo(c[4].x, c[4].y);
        ctx.moveTo(c[1].x, c[1].y); ctx.lineTo(c[5].x, c[5].y);
        ctx.moveTo(c[2].x, c[2].y); ctx.lineTo(c[6].x, c[6].y);
        ctx.moveTo(c[3].x, c[3].y); ctx.lineTo(c[7].x, c[7].y);
        ctx.stroke();

        // Structural Nodes / Vertices
        if (showStructuralNodes) {
          ctx.fillStyle = colors.node;
          [c[4], c[5], c[6], c[7]].forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2.2, 0, Math.PI * 2);
            ctx.fill();
          });
        }

        // Draw Dimension Markers & Dynamic Elevation Labels
        if (showDimensions && block.label && type !== 'column') {
          const topCenter = project3D(x, y + h + 8, z, rotX, rotY, centerX, centerY, scale);
          
          // Subtle architectural leader line
          ctx.strokeStyle = colors.accent + '60';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(topCenter.x, topCenter.y);
          ctx.lineTo(topCenter.x, topCenter.y - 12);
          ctx.stroke();

          // Label Pill
          ctx.font = '10px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = colors.text;
          ctx.fillText(block.label, topCenter.x, topCenter.y - 16);

          if (block.dimension) {
            ctx.font = '8.5px monospace';
            ctx.fillStyle = colors.accent;
            ctx.fillText(block.dimension, topCenter.x, topCenter.y - 6);
          }
        }
      });

      // 4. Draw Atmospheric Dust / Floating Motes
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if (p.y > 220) p.y = 0;
        if (p.x > 200 || p.x < -200) p.vx *= -1;
        if (p.z > 200 || p.z < -200) p.vz *= -1;

        const pp = project3D(p.x, p.y, p.z, rotX, rotY, centerX, centerY, scale);
        ctx.fillStyle = colors.particle + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(pp.x, pp.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5. Draw Compass / Elevation North Indicator (Bottom-left on mobile, top-left on desktop)
      const isMobile = width < 640;
      const compassX = isMobile ? 36 : 50;
      const compassY = isMobile ? height - 36 : 50;
      const northAngle = -rotY - Math.PI / 2;
      const nx = compassX + Math.cos(northAngle) * (isMobile ? 18 : 22);
      const ny = compassY + Math.sin(northAngle) * (isMobile ? 18 : 22);

      ctx.save();
      ctx.strokeStyle = colors.gridLine;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(compassX, compassY, isMobile ? 20 : 26, 0, Math.PI * 2);
      ctx.stroke();

      // North Arrow
      ctx.strokeStyle = colors.accent;
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.moveTo(compassX, compassY);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('N', nx, ny - 5);
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [theme, autoRotate, sunAngle, showDimensions, showStructuralNodes, activePreset]);

  // Pointer Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!interactive) return;
    cameraRef.current.isDragging = true;
    cameraRef.current.startX = e.clientX;
    cameraRef.current.startY = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!interactive) return;
    if (cameraRef.current.isDragging) {
      const dx = e.clientX - cameraRef.current.startX;
      const dy = e.clientY - cameraRef.current.startY;
      cameraRef.current.startX = e.clientX;
      cameraRef.current.startY = e.clientY;

      cameraRef.current.targetRotY += dx * 0.008;
      cameraRef.current.targetRotX = Math.max(
        5 * (Math.PI / 180),
        Math.min(75 * (Math.PI / 180), cameraRef.current.targetRotX - dy * 0.008)
      );
    }
  };

  const handlePointerUp = () => {
    cameraRef.current.isDragging = false;
  };

  const resetCamera = () => {
    cameraRef.current.targetRotX = 28 * (Math.PI / 180);
    cameraRef.current.targetRotY = -35 * (Math.PI / 180);
    cameraRef.current.targetZoom = 1.0;
    cameraRef.current.panX = 0;
    cameraRef.current.panY = 20;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none bg-gradient-to-b from-[#1c1916] via-[#12100e] to-[#0a0908] ${heightClass} ${className} ${
        isExpanded ? 'fixed inset-0 z-50 h-screen w-screen' : ''
      }`}
    >
      {/* 3D Architectural Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onClick={handleConstructNewBlock}
        className="w-full h-full cursor-grab active:cursor-grabbing block touch-none"
        title="Interactive 3D Architectural Canvas — Click to build, Drag to orbit"
      />

      {/* Subtle Ambient Vignette Overlay */}
      {overlayGradient && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />
      )}

      {/* Floating Interactive Controls HUD - Responsive Mobile Placement */}
      {showControls && (
        <div className="absolute top-14 sm:top-4 right-2 sm:right-4 z-20 flex flex-col items-end gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
          
          {/* Main Quick Action Bar */}
          <div className="bg-stone-900/95 backdrop-blur-md border border-stone-700/80 rounded-xs shadow-2xl p-1 sm:p-1.5 flex items-center gap-1 sm:gap-1.5 text-stone-200">
            
            {/* Typology Selector */}
            <div className="flex items-center bg-stone-950/80 p-0.5 rounded-xs border border-stone-800 text-[10px] sm:text-xs">
              <button
                onClick={() => setActivePreset('residence')}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xs uppercase tracking-wider font-semibold transition-colors ${
                  activePreset === 'residence' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Lakefront Residence & Cantilevers"
              >
                Villa
              </button>
              <button
                onClick={() => setActivePreset('commercial')}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xs uppercase tracking-wider font-semibold transition-colors ${
                  activePreset === 'commercial' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Commercial Tower & Atrium"
              >
                Tower
              </button>
              <button
                onClick={() => setActivePreset('skyline')}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xs uppercase tracking-wider font-semibold transition-colors ${
                  activePreset === 'skyline' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Ajmer Urban Masterplan Matrix"
              >
                City
              </button>
            </div>

            {/* Orbit / Auto-Rotate Toggle */}
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-1 sm:p-1.5 rounded-xs border transition-colors ${
                autoRotate 
                  ? 'bg-amber-950/80 border-amber-500/60 text-amber-300' 
                  : 'bg-stone-800 border-stone-700 text-stone-400'
              }`}
              title={autoRotate ? 'Pause 3D Orbit' : 'Enable 3D Orbit'}
            >
              <RotateCw className={`w-3 sm:w-3.5 h-3 sm:h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            </button>

            {/* Camera Reset */}
            <button
              onClick={resetCamera}
              className="p-1 sm:p-1.5 bg-stone-800 hover:bg-stone-700 rounded-xs border border-stone-700 text-stone-300 transition-colors"
              title="Reset Architectural Perspective"
            >
              <RefreshCw className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </button>

            {/* Settings & Shading Drawer Toggle */}
            <button
              onClick={() => setShowPanel(!showPanel)}
              className={`p-1 sm:p-1.5 rounded-xs border transition-colors ${
                showPanel ? 'bg-amber-600 text-white border-amber-500' : 'bg-stone-800 border-stone-700 text-stone-300'
              }`}
              title="Architectural Shading & Theme Studio"
            >
              <Sliders className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </button>

            {/* Expand / Fullscreen */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 sm:p-1.5 bg-stone-800 hover:bg-stone-700 rounded-xs border border-stone-700 text-stone-300 transition-colors"
              title={isExpanded ? 'Exit Immersive View' : 'Enter Immersive View'}
            >
              {isExpanded ? <Minimize2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> : <Maximize2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />}
            </button>
          </div>

          {/* Interactive Instructions Badge (Hidden on mobile to keep 3D view clean) */}
          <div className="hidden sm:flex bg-black/70 backdrop-blur-sm border border-stone-800 px-3 py-1.5 rounded-xs text-[10px] text-stone-300 items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>Click canvas to build volumes · Drag to orbit 3D</span>
          </div>

          {/* Expanded Shading & Material Settings Panel */}
          {showPanel && (
            <div className="bg-stone-900/95 backdrop-blur-md border border-stone-700 p-3.5 rounded-xs shadow-2xl w-64 text-stone-200 space-y-3 mt-1">
              
              {/* Theme Palette */}
              <div>
                <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                  Architectural Material
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['sandstone', 'blueprint', 'monochrome', 'twilight'] as BackgroundTheme[]).map(t => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`px-2 py-1 text-[11px] uppercase tracking-wider rounded-xs border text-left transition-colors flex items-center justify-between ${
                        theme === t 
                          ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-semibold' 
                          : 'bg-stone-800/80 border-stone-700 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      <span className="capitalize">{t}</span>
                      {theme === t && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sun Solar Study Slider */}
              <div>
                <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1">
                  <span className="uppercase tracking-wider font-semibold">Sun / Azimuth Study</span>
                  <span className="font-mono text-amber-300">{sunAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={sunAngle}
                  onChange={e => setSunAngle(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Toggles */}
              <div className="space-y-1.5 pt-1 border-t border-stone-800">
                <button
                  onClick={() => setShowDimensions(!showDimensions)}
                  className="w-full flex items-center justify-between text-[11px] py-1 text-stone-300 hover:text-white"
                >
                  <span>Dimension Annotations</span>
                  <span className={`w-2.5 h-2.5 rounded-xs border ${showDimensions ? 'bg-amber-500 border-amber-400' : 'border-stone-600'}`} />
                </button>

                <button
                  onClick={() => setShowStructuralNodes(!showStructuralNodes)}
                  className="w-full flex items-center justify-between text-[11px] py-1 text-stone-300 hover:text-white"
                >
                  <span>Structural IS 456 Nodes</span>
                  <span className={`w-2.5 h-2.5 rounded-xs border ${showStructuralNodes ? 'bg-amber-500 border-amber-400' : 'border-stone-600'}`} />
                </button>
              </div>

              {/* Dynamic Added Blocks Count */}
              {constructionCount > 0 && (
                <div className="pt-2 border-t border-stone-800 text-[10px] text-amber-300 flex items-center justify-between">
                  <span>Custom Parametric Blocks:</span>
                  <span className="font-mono font-bold bg-amber-950 px-1.5 py-0.5 rounded-xs border border-amber-800">
                    +{constructionCount}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Floating Blueprint Stamp (Bottom Left) */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:block">
        <div className="bg-stone-900/80 backdrop-blur-md border border-stone-800 px-3.5 py-2 text-[10px] text-stone-400 rounded-xs font-mono">
          <div className="text-amber-400 font-semibold uppercase tracking-wider">Design Plus Architectural Engine</div>
          <div className="text-stone-500">IS 456 · IS 13920 · Axonometric Wireframe Projection</div>
        </div>
      </div>
    </div>
  );
}
