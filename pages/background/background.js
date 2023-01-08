"use client";
import styles from './background.module.css'

import { useEffect, useRef } from "react";

const SPEED = 0.017;

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.imageSmoothingEnabled = false;

            let time = 0;

            const loop = function () {
                for (let x = 0; x <= 32; x++) {
                    for (let y = 0; y <= 32; y++) {
                        color(ctx, {
                            x,
                            y,
                            r: R(x, y, time),
                            g: G(x, y, time),
                            b: B(x, y, time),
                        });
                    }
                }

                time = time + SPEED;

                window.requestAnimationFrame(loop);
            };

            loop();
        }
    }, []);

    return <canvas className={styles.canvas} ref={canvasRef} width="32px" height="32px" />;
};

const C1 = 220; // 190, 
const C2 = 20; // 20,

export const color = function (context, { x, y, r, g, b }) {
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    context.fillRect(x, y, 1, 1);
};

export const R = function (x, y, time) {
    return Math.floor(C1 + C2 * Math.cos((x * x - y * y) / 300 + time));
};

export const G = function (x, y, time) {
    return Math.floor(
        C1 +
        C2 *
        Math.cos(
            (x * x * Math.sin(time / 100) + y * y * Math.sin(time / 5)) / 1000
        )
    );
};

export const B = function (x, y, time) {
    return Math.floor(
        C1 +
        C2 *
        Math.sin(
            2 * Math.sin(time / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
    );
};

export default Background;