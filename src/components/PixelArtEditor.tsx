'use client'
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Toolbar from '@/components/Toolbar';
import Palette from '@/components/Palette';
import { downloadURI } from '@/utils/download';

type Pixel = string | null;

const clonePixels = (src: Pixel[][]) => src.map(row => [...row])

const savePixelsToLocalStorage = (pixels: Pixel[][]) => {
    try {
        localStorage.setItem('pixelArt', JSON.stringify(pixels));
    } catch (e) {
        console.error('Failed to save pixel art to localStorage:', e);
    }
}

const readPixelsFromLocalStorage = (): Pixel[][] | null => {
    try {
        const data = localStorage.getItem('pixelArt');
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Failed to read pixel art from localStorage:', e);
    }
    return null;
}

interface PixelArtEditorProps {
    columns?: number
    rows?: number
    initialPixelSize?: number
    palette?: string[]
}

export default function PixelArtEditor({
    columns = 32,
    rows = 32,
    initialPixelSize = 20,
    palette = [
        '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
        '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#C0C0C0',
        '#800000', '#008000', '#000080', '#808000', '#800080', '#008080',
    ],
}: PixelArtEditorProps) {

    // try to load saved pixels from localStorage
    readPixelsFromLocalStorage();

    setInterval(() => {
        savePixelsToLocalStorage(pixels);
    }, 5000); // save every 5 seconds

    const [pixelSize, setPixelSize] = useState(initialPixelSize);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [pixels, setPixels] = useState<Pixel[][]>(() =>
        Array.from({ length: rows }, () => Array(columns).fill(null))
    );
    const [selectedColor, setSelectedColor] = useState<string>(palette[0]);
    const [isEraser, setIsEraser] = useState(false);
    const [isPen, setIsPen] = useState(true);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isPanning, setIsPanning] = useState(false);
    const [moveMode, setMoveMode] = useState(false);

    const panStart = useRef({ x: 0, y: 0 });
    const offsetStart = useRef({ x: 0, y: 0 });
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const undoStack = useRef<Pixel[][][]>([]);
    const redoStack = useRef<Pixel[][][]>([]);
    const drawingStartState = useRef<Pixel[][] | null>(null);

    const zoomStep = 5;
    const minPixelSize = 5;
    const maxPixelSize = 100;

    const zoomIn = () => {
        setPixelSize(prev => Math.min(prev + zoomStep, maxPixelSize));
    };

    const zoomOut = () => {
        setPixelSize(prev => Math.max(prev - zoomStep, minPixelSize));
    };

    const paintPixel = useCallback(
        (clientX: number, clientY: number) => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const canvas = canvasRef.current;
            if (!canvas) return;

            const canvasRect = canvas.getBoundingClientRect();
            const canvasX = clientX - canvasRect.left;
            const canvasY = clientY - canvasRect.top;

            const x = Math.floor(canvasX / pixelSize);
            const y = Math.floor(canvasY / pixelSize);

            if (x < 0 || x >= columns || y < 0 || y >= rows) return;

            setPixels(prev => {
                const newColour = isEraser ? null : selectedColor;
                if (prev[y][x] === newColour) return prev;

                const copy = clonePixels(prev);
                copy[y][x] = newColour;
                return copy;
            });
        },
        [pixelSize, columns, rows, selectedColor, isEraser]
    );

    // Render canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = columns * pixelSize;
        canvas.height = rows * pixelSize;

        ctx.fillStyle = 'rgb(60,60,60)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                const colour = pixels[y][x];
                if (colour) {
                    ctx.fillStyle = colour;
                    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                }
            }
        }

        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1.5;

        // Draw grid across entire canvas
        for (let i = 0; i <= columns; i++) {
            ctx.beginPath();
            ctx.moveTo(i * pixelSize, 0);
            ctx.lineTo(i * pixelSize, rows * pixelSize);
            ctx.stroke();
        }

        for (let i = 0; i <= rows; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * pixelSize);
            ctx.lineTo(columns * pixelSize, i * pixelSize);
            ctx.stroke();
        }
    }, [pixels, columns, rows, pixelSize, offset]);

    // Clamp offset
    const clampOffset = useCallback((x: number, y: number) => {
        const maxOffset = Math.max(columns, rows) * pixelSize * 2;
        return {
            x: Math.max(-maxOffset, Math.min(maxOffset, x)),
            y: Math.max(-maxOffset, Math.min(maxOffset, y))
        };
    }, [columns, rows, pixelSize]);

    useEffect(() => {
        setOffset(prev => clampOffset(prev.x, prev.y));
    }, [pixelSize, clampOffset]);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                setMoveMode(true);
                setIsPen(false);
            } else if (e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                undo();
            }
        };
        const up = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                setMoveMode(false);
                setIsPen(true);
            }
        };
        window.addEventListener('keydown', down as any);
        window.addEventListener('keyup', up as any);
        return () => {
            window.removeEventListener('keydown', down as any)
            window.removeEventListener('keyup', up as any)
        };
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        if (moveMode) {
            setIsPanning(true);
            panStart.current = { x: e.clientX, y: e.clientY };
            offsetStart.current = { ...offset };
            e.preventDefault();
            return;
        }

        if ((isPen || isEraser) && (e.button === 0 || e.type === 'touchstart')) {
            setIsDrawing(true);
            // Store the state at the start of the drawing session
            drawingStartState.current = clonePixels(pixels);
            paintPixel(e.clientX, e.clientY);
            e.preventDefault();
        }
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (isPanning) {
            const dx = e.clientX - panStart.current.x;
            const dy = e.clientY - panStart.current.y;
            const newX = offsetStart.current.x + dx;
            const newY = offsetStart.current.y + dy;
            setOffset(clampOffset(newX, newY));
            e.preventDefault();
            return;
        }

        if ((isPen || isEraser) && isDrawing) {
            paintPixel(e.clientX, e.clientY);
            e.preventDefault();
        }
    }

    const handlePointerUp = (e: React.PointerEvent) => {
        if (isDrawing && drawingStartState.current) {
            // Push the state from the start of the drawing session to undo stack
            undoStack.current.push(drawingStartState.current);
            if (undoStack.current.length > 50) undoStack.current.shift();
            redoStack.current = [];
            drawingStartState.current = null;
        }
        setIsDrawing(false);
        setIsPanning(false);
        e.preventDefault();
    }

    const handlePointerLeave = () => {
        if (isDrawing && drawingStartState.current) {
            // Push the state from the start of the drawing session to undo stack
            undoStack.current.push(drawingStartState.current);
            if (undoStack.current.length > 50) undoStack.current.shift();
            redoStack.current = [];
            drawingStartState.current = null;
        }
        setIsDrawing(false);
        setIsPanning(false);
    }

    const clearCanvas = () => {
        undoStack.current.push(clonePixels(pixels));
        setPixels(Array.from({ length: rows }, () => Array(columns).fill(null)));
        redoStack.current = [];
    }

    const undo = () => {
        if (!undoStack.current.length) return;
        redoStack.current.push(clonePixels(pixels));
        setPixels(undoStack.current.pop()!);
    }

    const redo = () => {
        if (!redoStack.current.length) return;
        undoStack.current.push(clonePixels(pixels));
        setPixels(redoStack.current.pop()!);
    }

    const downloadImage = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        downloadURI(canvas.toDataURL('image/png'), 'pixel-art.png');
    }

    const resetView = () => setOffset({ x: 0, y: 0 });
    const toggleEraser = () => {
        setIsEraser(prev => !prev);
        if (!isEraser) {
            setIsPen(false);
            setMoveMode(false);
        }
    }
    const togglePen = () => {
        setIsPen(prev => !prev);
        if (!isPen) {
            setMoveMode(false);
            setIsEraser(false);
        }
    }
    const toggleMove = () => {
        setMoveMode(prev => !prev);
        if (!moveMode) {
            setIsPen(false);
            setIsEraser(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 p-4 bg-[rgb(44,44,44)]">
            <Toolbar
                onClear={clearCanvas}
                onUndo={undo}
                onRedo={redo}
                onDownload={downloadImage}
                canUndo={undoStack.current.length > 0}
                canRedo={redoStack.current.length > 0}
                onToggleMove={toggleMove}
                moveActive={moveMode}
                onTogglePen={togglePen}
                penActive={isPen}
                onToggleEraser={toggleEraser}
                eraserActive={isEraser}
                onResetView={resetView}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
            />

            <Palette
                colours={palette}
                selected={selectedColor}
                onSelect={c => {
                    if (!isPen) {
                        setMoveMode(false)
                        setIsEraser(false)
                        setIsPen(true)
                    }
                    setSelectedColor(c)
                }}
            />

            <div
                ref={wrapperRef}
                className="relative overflow-hidden border-4 border-yellow-400 bg-[rgb(44,44,44)] rounded flex items-center justify-center w-[min(90vw,90vh)] h-[min(90vw,90vh)] md:w-[640px] md:h-[640px]"
            >
                <div
                    style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        cursor: moveMode ? 'grab' : (isPen || isEraser) ? 'crosshair' : 'default',
                        willChange: 'transform',
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerLeave}
                >
                    <canvas
                        ref={canvasRef}
                        width={columns * pixelSize}
                        height={rows * pixelSize}
                        className="touch-none select-none"
                        style={{ imageRendering: 'pixelated' }}
                    />
                </div>
            </div>
        </div>
    )
}
