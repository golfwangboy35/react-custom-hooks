import React, { useRef } from 'react';
import useHover from '../hooks/useHover';

const Hover: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isHovering = useHover(ref);

    return (
        <div 
            ref={ref} 
            style={{
                width: 300,
                height: 300,
                background: isHovering ? 'red' : 'green'
            }}
        >
        </div>
    );
};

export default Hover;