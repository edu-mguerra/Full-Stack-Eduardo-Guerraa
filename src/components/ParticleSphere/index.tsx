"use client";

import * as React from "react";
import { useEffect, useRef } from "react";

export interface InteractiveParticleSphereProps {
    particleCount?: number;
    particleSize?: number;
    sphereSize?: number;
    rotationSpeed?: number;
    particleColor?: string;
    backgroundColor?: string;
    mouseRepulsion?: number;
    mouseRadius?: number;
    clickExplosion?: boolean;
    glowEffect?: boolean;
    trailEffect?: boolean;
    autoRotate?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

type State = {
    n: number;
    bx: Float32Array;
    by: Float32Array;
    bz: Float32Array;
    ph: Float32Array;
    sv: Float32Array;
    av: Float32Array;
    ox: Float32Array;
    oy: Float32Array;
    oz: Float32Array;
    vx: Float32Array;
    vy: Float32Array;
    vz: Float32Array;
    sx: Float32Array;
    sy: Float32Array;
    sw: Float32Array;
    sa: Float32Array;
    sz: Float32Array;
};

type Sprite = { canvas: HTMLCanvasElement; scale: number };
type Wave = { x: number; y: number; t: number };

const TAU = Math.PI * 2;
const SPRING_K = 14;
const SPRING_C = 3.8;
const WAVE_LIFE = 1.6;
const MAX_WAVES = 4;

const LX = -0.42;
const LY = -0.5;
const LZ = 0.75;

function buildState(n: number): State {
    const f = () => new Float32Array(n);
    const s: State = {
        n,
        bx: f(), by: f(), bz: f(),
        ph: f(), sv: f(), av: f(),
        ox: f(), oy: f(), oz: f(),
        vx: f(), vy: f(), vz: f(),
        sx: f(), sy: f(), sw: f(), sa: f(), sz: f(),
    };
    const ga = Math.PI * (3 - Math.sqrt(5));
    const jit = 0.22 * Math.sqrt(4 / n);
    for (let i = 0; i < n; i++) {
        const y = 1 - (2 * (i + 0.5)) / n;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const th = ga * i;
        let x = Math.cos(th) * r + (Math.random() - 0.5) * 2 * jit;
        let yy = y + (Math.random() - 0.5) * 2 * jit;
        let z = Math.sin(th) * r + (Math.random() - 0.5) * 2 * jit;
        const len = Math.sqrt(x * x + yy * yy + z * z) || 1;
        x /= len;
        yy /= len;
        z /= len;
        s.bx[i] = x;
        s.by[i] = yy;
        s.bz[i] = z;
        s.ph[i] = Math.random() * TAU;
        s.sv[i] = 0.6 + Math.pow(Math.random(), 2) * 1.1;
        s.av[i] = 0.55 + Math.random() * 0.45;
    }
    return s;
}

function resolveColor(color: string, host: HTMLElement) {
    try {
        const el = document.createElement("span");
        el.style.color = color;
        el.style.display = "none";
        host.appendChild(el);
        const c = getComputedStyle(el).color;
        host.removeChild(el);
        const m = c.match(/[\d.]+/g);
        if (m && m.length >= 3) {
            const k = c.startsWith("color(") ? 255 : 1;
            return { r: +m[0] * k, g: +m[1] * k, b: +m[2] * k };
        }
    } catch {
    }
    return { r: 139, g: 233, b: 255 };
}

function buildSprite(
    color: { r: number; g: number; b: number },
    glow: boolean
): Sprite {
    const S = 96;
    const h = S / 2;
    const cv = document.createElement("canvas");
    cv.width = cv.height = S;
    const ctx = cv.getContext("2d")!;
    const { r, g, b } = color;
    const lr = Math.round(r + (255 - r) * 0.4);
    const lg = Math.round(g + (255 - g) * 0.4);
    const lb = Math.round(b + (255 - b) * 0.4);
    const c = (a: number) =>
        `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a})`;
    const grad = ctx.createRadialGradient(h, h, 0, h, h, h);
    let core: number;
    if (glow) {
        core = 0.3;
        grad.addColorStop(0, `rgba(${lr},${lg},${lb},1)`);
        grad.addColorStop(0.16, c(1));
        grad.addColorStop(0.3, c(0.9));
        grad.addColorStop(0.45, c(0.26));
        grad.addColorStop(0.7, c(0.06));
        grad.addColorStop(1, c(0));
    } else {
        core = 0.88;
        grad.addColorStop(0, `rgba(${lr},${lg},${lb},1)`);
        grad.addColorStop(0.7, c(1));
        grad.addColorStop(0.88, c(0.85));
        grad.addColorStop(1, c(0));
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, S, S);
    return { canvas: cv, scale: 1 / core };
}

export default function InteractiveParticleSphere(props: InteractiveParticleSphereProps) {
    const {
        particleCount = 3500,
        particleSize = 1.8,
        sphereSize = 85,
        rotationSpeed = 1,
        particleColor = "#8BE9FF",
        backgroundColor = "transparent",
        mouseRepulsion = 60,
        mouseRadius = 160,
        clickExplosion = true,
        glowEffect = true,
        trailEffect = false,
        autoRotate = true,
        style,
        className,
    } = props;

    const fullProps = {
        particleCount,
        particleSize,
        sphereSize,
        rotationSpeed,
        particleColor,
        backgroundColor,
        mouseRepulsion,
        mouseRadius,
        clickExplosion,
        glowEffect,
        trailEffect,
        autoRotate,
        style,
        className,
    };

    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const propsRef = useRef(fullProps);
    propsRef.current = fullProps;
    const stateRef = useRef<State | null>(null);
    const spriteRef = useRef<Sprite | null>(null);

    const count = Math.max(100, Math.min(20000, Math.round(particleCount)));
    useEffect(() => {
        stateRef.current = buildState(count);
    }, [count]);

    useEffect(() => {
        const host = containerRef.current;
        if (!host) return;
        const col = resolveColor(particleColor, host);
        spriteRef.current = buildSprite(col, glowEffect);
    }, [particleColor, glowEffect]);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;
        let dpr = 1;
        let raf = 0;
        let last = performance.now();
        let time = 0;
        let visible = true;
        let yaw = 0;
        let tiltX = 0;
        let tiltY = 0;
        let spin = 0;
        let waves: Wave[] = [];
        const ptr = { x: 0, y: 0, active: false, has: false };

        const mq =
            typeof window !== "undefined" && typeof window.matchMedia === "function"
                ? window.matchMedia("(prefers-reduced-motion: reduce)")
                : null;
        let reduce = !!(mq && mq.matches);
        const onMq = () => (reduce = !!(mq && mq.matches));
        if (mq && mq.addEventListener) mq.addEventListener("change", onMq);

        const resize = () => {
            const rect = container.getBoundingClientRect();
            w = Math.max(1, rect.width);
            h = Math.max(1, rect.height);
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
        };
        resize();
        const ro =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(resize)
                : null;
        if (ro) ro.observe(container);
        window.addEventListener("resize", resize);

        const io =
            typeof IntersectionObserver !== "undefined"
                ? new IntersectionObserver(
                      (e) => {
                          visible = e[0].isIntersecting;
                          last = performance.now();
                      },
                      { threshold: 0 }
                  )
                : null;
        if (io) io.observe(container);

        const sphereR = () =>
            (Math.min(w, h) / 2) * (propsRef.current.sphereSize / 100);

        const local = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect();
            return { x: e.clientX - r.left, y: e.clientY - r.top };
        };

        const onMove = (e: PointerEvent) => {
            const { x, y } = local(e);
            const pad = propsRef.current.mouseRadius;
            const inside = x >= -pad && y >= -pad && x <= w + pad && y <= h + pad;
            ptr.active = inside;
            if (inside) {
                if (ptr.has) spin += (x - ptr.x) * 0.0007;
                spin = Math.max(-1.2, Math.min(1.2, spin));
                ptr.x = x;
                ptr.y = y;
                ptr.has = true;
            } else {
                ptr.has = false;
            }
        };
        const onDown = (e: PointerEvent) => {
            const { x, y } = local(e);
            const dx = x - w / 2;
            const dy = y - h / 2;
            const R = sphereR();
            if (dx * dx + dy * dy > R * R * 1.4) return;
            ptr.x = x;
            ptr.y = y;
            ptr.active = true;
            ptr.has = true;
            if (propsRef.current.clickExplosion && !reduce) {
                waves.push({ x, y, t: time });
                if (waves.length > MAX_WAVES) waves.shift();
            }
        };
        const onUp = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") {
                ptr.active = false;
                ptr.has = false;
            }
        };
        const onLeave = () => {
            ptr.active = false;
            ptr.has = false;
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerdown", onDown, { passive: true });
        window.addEventListener("pointerup", onUp, { passive: true });
        window.addEventListener("pointercancel", onUp, { passive: true });
        document.addEventListener("mouseleave", onLeave);
        window.addEventListener("blur", onLeave);

        const frame = (now: number) => {
            raf = requestAnimationFrame(frame);
            const st = stateRef.current;
            const sprite = spriteRef.current;
            if (!visible || !st || !sprite || !w || !h) {
                last = now;
                return;
            }
            const p = propsRef.current;
            let dt = (now - last) / 1000;
            last = now;
            if (dt <= 0) return;
            dt = Math.min(dt, 0.04);
            time += dt;

            const n = st.n;
            const R = sphereR();
            const cx = w / 2;
            const cy = h / 2;
            const camD = R * 4;
            const unit = R / 300;
            const organic = !reduce;
            const trail = p.trailEffect && !reduce;

            const rate = p.autoRotate
                ? 0.25 * p.rotationSpeed * (reduce ? 0.2 : 1)
                : 0;
            yaw += (rate + spin) * dt;
            spin *= Math.exp(-dt * 1.2);
            let tx = 0;
            let ty = 0;
            if (ptr.active && ptr.has && !reduce) {
                tx = Math.max(-1, Math.min(1, (ptr.y - cy) / (h / 2))) * 0.3;
                ty = Math.max(-1, Math.min(1, (ptr.x - cx) / (w / 2))) * 0.45;
            }
            const ease = 1 - Math.exp(-dt * 2.5);
            tiltX += (tx - tiltX) * ease;
            tiltY += (ty - tiltY) * ease;
            const yawE = yaw + tiltY;
            const pitch = 0.28 + tiltX;
            const cosY = Math.cos(yawE);
            const sinY = Math.sin(yawE);
            const cosP = Math.cos(pitch);
            const sinP = Math.sin(pitch);

            const mouseOn = ptr.active && ptr.has;
            const mr = Math.max(10, p.mouseRadius);
            const mr2 = mr * mr;
            const A = (p.mouseRepulsion / 50) * 2600 * unit;
            waves = waves.filter((wv) => time - wv.t < WAVE_LIFE);
            const nw = waves.length;
            const WK = 5200 * unit;
            const waveSpeed = 760 * unit;

            const { bx, by, bz, ph, sv, av, ox, oy, oz, vx, vy, vz } = st;
            const { sx: dsx, sy: dsy, sw: dsw, sa: dsa, sz: dsz } = st;
            const pSize = p.particleSize;
            const sScale = sprite.scale;
            const alphaMul = trail ? 0.55 : 1;

            for (let i = 0; i < n; i++) {
                const phase = ph[i];
                const br = organic
                    ? 1 +
                      0.016 * Math.sin(time * 0.9 + phase) +
                      0.008 * Math.sin(time * 1.7 + phase * 2.3)
                    : 1;
                const X = bx[i];
                const Y = by[i];
                const Z = bz[i];
                const x1 = X * cosY + Z * sinY;
                const z1 = -X * sinY + Z * cosY;
                const rx = x1;
                const ry = Y * cosP - z1 * sinP;
                const rz = Y * sinP + z1 * cosP;

                let ex = ox[i];
                let ey = oy[i];
                let ez = oz[i];
                let evx = vx[i];
                let evy = vy[i];
                let evz = vz[i];

                const px = rx * R * br + ex;
                const py = ry * R * br + ey;
                const pz = rz * R * br + ez;
                const s = camD / (camD - pz);
                const sx = cx + px * s;
                const sy = cy + py * s;

                let ax = 0;
                let ay = 0;
                let az = 0;

                if (mouseOn) {
                    const dx = sx - ptr.x;
                    const dy = sy - ptr.y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < mr2 && d2 > 1e-3) {
                        const d = Math.sqrt(d2);
                        let f = 1 - d / mr;
                        f = f * f * A;
                        ax += (dx / d) * f;
                        ay += (dy / d) * f;
                        az += f * 0.3;
                    }
                }
                for (let k = 0; k < nw; k++) {
                    const wv = waves[k];
                    const age = time - wv.t;
                    const ring = age * waveSpeed;
                    const width = (80 + age * 60) * unit + 12;
                    const dx = sx - wv.x;
                    const dy = sy - wv.y;
                    const d2 = dx * dx + dy * dy;
                    const d = Math.sqrt(d2) + 1e-3;
                    const diff = d - ring;
                    if (diff < 3 * width && diff > -3 * width) {
                        const g = Math.exp(-(diff * diff) / (2 * width * width))
                        const fade = 1 - age / WAVE_LIFE;
                        const f = g * fade * WK;
                        ax += (dx / d) * f;
                        ay += (dy / d) * f;
                        az += f * 0.4;
                    }
                }

                const energy =
                    ex * ex + ey * ey + ez * ez + evx * evx + evy * evy + evz * evz;
                if (ax !== 0 || ay !== 0 || az !== 0 || energy > 1e-3) {
                    ax += -SPRING_K * ex - SPRING_C * evx;
                    ay += -SPRING_K * ey - SPRING_C * evy;
                    az += -SPRING_K * ez - SPRING_C * evz;
                    evx += ax * dt;
                    evy += ay * dt;
                    evz += az * dt;
                    ex += evx * dt;
                    ey += evy * dt;
                    ez += evz * dt;
                    ox[i] = ex;
                    oy[i] = ey;
                    oz[i] = ez;
                    vx[i] = evx;
                    vy[i] = evy;
                    vz[i] = evz;
                } else if (ex !== 0 || evx !== 0) {
                    ox[i] = oy[i] = oz[i] = 0;
                    vx[i] = vy[i] = vz[i] = 0;
                }

                let depthT = (pz / R + 1) * 0.5;
                depthT = depthT < 0 ? 0 : depthT > 1 ? 1 : depthT;
                const light = 0.5 + 0.5 * (rx * LX + ry * LY + rz * LZ);
                const a =
                    av[i] *
                    (0.08 + 0.92 * (depthT * depthT * 0.6 + depthT * 0.4)) *
                    (0.55 + 0.45 * light) *
                    alphaMul;
                dsx[i] = sx;
                dsy[i] = sy;
                dsw[i] = pSize * sv[i] * s * (0.7 + 0.5 * depthT) * sScale;
                dsa[i] = a;
                dsz[i] = pz;
            }

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (trail) {
                ctx.globalCompositeOperation = "destination-out";
                ctx.globalAlpha = 1 - Math.exp(-dt * 12);
                ctx.fillStyle = "#000";
                ctx.fillRect(0, 0, w, h);
            } else {
                ctx.globalCompositeOperation = "source-over";
                ctx.globalAlpha = 1;
                ctx.clearRect(0, 0, w, h);
            }
            ctx.globalCompositeOperation = "source-over";
            const img = sprite.canvas;
            for (let pass = 0; pass < 2; pass++) {
                const back = pass === 0;
                for (let i = 0; i < n; i++) {
                    if (dsz[i] < 0 !== back) continue;
                    const a = dsa[i];
                    if (a < 0.015) continue;
                    const sw = dsw[i];
                    ctx.globalAlpha = a > 1 ? 1 : a;
                    ctx.drawImage(img, dsx[i] - sw / 2, dsy[i] - sw / 2, sw, sw);
                }
            }
            ctx.globalAlpha = 1;
        };
        raf = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(raf);
            if (ro) ro.disconnect();
            if (io) io.disconnect();
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("pointercancel", onUp);
            document.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("blur", onLeave);
            if (mq && mq.removeEventListener) mq.removeEventListener("change", onMq);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className={className}
            style={{
                ...style,
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background: backgroundColor || "transparent",
                touchAction: "pan-y",
                userSelect: "none",
                WebkitUserSelect: "none",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "block",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
