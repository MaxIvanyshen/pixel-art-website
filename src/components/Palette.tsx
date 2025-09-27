'use client'
import React from 'react'

interface PaletteProps {
    colours: string[]
    selected: string
    onSelect: (c: string) => void
}
export default function Palette({ colours, selected, onSelect }: PaletteProps) {
    return (
        <div className="flex flex-wrap gap-1">
            {colours.map(colour => (
                <button
                    key={colour}
                    onClick={() => onSelect(colour)}
                    className={`w-6 h-6 rounded border-2 ${selected === colour ? 'border-black' : 'border-gray-300'
                        }`}
                    style={{ backgroundColor: colour }}
                    aria-label={colour}
                />
            ))}
        </div>
    )
}

