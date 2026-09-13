'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('Route error boundary caught; ', error);
    }, [error]);

    return (
        <div>
            <p>Something went wrong: {error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
