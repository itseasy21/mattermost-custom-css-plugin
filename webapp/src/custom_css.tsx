// custom_css.tsx
import React, {useEffect} from 'react';

const applyCustomCSS = () => {
    // Define the custom CSS rules
    const css = `
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

        body, .app__body {
            font-family: 'Lato', sans-serif !important;
        }
    `;

    // Create a style element to hold the custom CSS
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    // Append the style element to the document head
    document.head.appendChild(style);

    // Function to hide elements dynamically
    const hideElements = () => {
        // Select elements using class partial matches
        const elementsToHide = document.querySelectorAll('[class*="Badge-"], [class*="FreeVersionBadge-"], .MenuStartTrial, .editionText');

        elementsToHide.forEach((element) => {
            (element as HTMLElement).style.display = 'none';
        });
    };

    // Execute function to hide elements
    hideElements();

    // Optional: Run periodically to handle dynamic content loading
    setInterval(hideElements, 2000);
};

const CustomCSS: React.FC = () => {
    useEffect(() => {
        applyCustomCSS();
    }, []);

    return null; // This component does not render any visible content
};

export default CustomCSS;
