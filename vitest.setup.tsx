import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import type { ImgHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

afterEach(() => {
    cleanup();
});

vi.mock('next/image', () => ({
    default: ({
        src,
        alt,
        ...rest
    }: ImgHTMLAttributes<HTMLImageElement> & { src: string }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} {...rest} />
    ),
}));

vi.mock('next/link', () => ({
    default: ({
        href,
        children,
        ...rest
    }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) => (
        <a href={href} {...rest}>
            {children}
        </a>
    ),
}));
