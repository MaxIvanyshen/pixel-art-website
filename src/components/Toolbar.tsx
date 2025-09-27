'use client'
import React from 'react';
import { FaHandPaper, FaPen, FaEraser, FaUndo, FaRedo, FaDownload, FaTrash, FaSync, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

interface ToolbarProps {
    onClear: () => void
    onUndo: () => void
    onRedo: () => void
    onDownload: () => void
    canUndo: boolean
    canRedo: boolean
    onToggleMove: () => void
    moveActive: boolean
    onTogglePen: () => void
    penActive: boolean
    onToggleEraser: () => void
    eraserActive: boolean
    onResetView: () => void
    onZoomIn: () => void
    onZoomOut: () => void
}

const Btn = ({
    label,
    icon: Icon,
    onClick,
    disabled,
    active,
}: {
    label: string
    icon?: React.ElementType
    onClick: () => void
    disabled?: boolean
    active?: boolean
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
            px-2 py-1 rounded text-sm flex items-center gap-1 font-mono uppercase
            bg-[rgb(44,44,44)] text-gray-300 hover:text-yellow-300
            disabled:opacity-50 disabled:cursor-not-allowed
            ${active ? 'border-2 border-yellow-400 text-yellow-300' : ''}
            [text-shadow:1px_1px_0px_rgba(0,0,0,0.8)]
        `}
    >
        {Icon && <Icon className="w-4 h-4" />}
        {label}
    </button>
)

export default function Toolbar({
    onClear,
    onUndo,
    onRedo,
    onDownload,
    canUndo,
    canRedo,
    onToggleMove,
    moveActive,
    onTogglePen,
    penActive,
    onToggleEraser,
    eraserActive,
    onResetView,
    onZoomIn,
    onZoomOut,
}: ToolbarProps) {
    return (
        <div className="flex flex-col md:flex-row flex-wrap gap-2 items-center bg-[rgb(44,44,44)] p-2 border-b-4 border-yellow-400">
            <Btn label="Clear" icon={FaTrash} onClick={onClear} />
            <Btn label="Undo" icon={FaUndo} onClick={onUndo} disabled={!canUndo} />
            <Btn label="Redo" icon={FaRedo} onClick={onRedo} disabled={!canRedo} />
            <Btn label="Download" icon={FaDownload} onClick={onDownload} />
            <Btn
                label={moveActive ? 'Move (ON)' : 'Move'}
                icon={FaHandPaper}
                onClick={onToggleMove}
                active={moveActive}
            />
            <Btn
                label={penActive ? 'Pen (ON)' : 'Pen'}
                icon={FaPen}
                onClick={onTogglePen}
                active={penActive}
            />
            <Btn
                label={eraserActive ? 'Eraser (ON)' : 'Eraser'}
                icon={FaEraser}
                onClick={onToggleEraser}
                active={eraserActive}
            />
            <Btn label="Reset View" icon={FaSync} onClick={onResetView} />
            <Btn label="Zoom In" icon={FaSearchPlus} onClick={onZoomIn} />
            <Btn label="Zoom Out" icon={FaSearchMinus} onClick={onZoomOut} />
        </div>
    )
}
