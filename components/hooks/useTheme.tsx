import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme(): [Theme, any] {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        setTheme(
            localStorage.theme ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches &&
                    'dark') ||
                theme
        );
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    function switchTheme() {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setTheme('dark');
        }
    }
    return [theme as Theme, switchTheme];
}
