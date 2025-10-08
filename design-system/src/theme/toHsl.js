// Sure, here's a JavaScript function that can convert a color given in any common format (hex, RGB) to HSL:

// ### Explanation:

// 1. **Hex to RGB Conversion (`hexToRgb`):** Converts a hex color string to an RGB object.
// 2. **RGB to HSL Conversion (`rgbToHsl`):** Converts RGB values to HSL using normalization and calculating hue, saturation, and lightness.
// 3. **Main Conversion Function (`colorToHsl`):** Accepts either a hex string or an RGB array, and returns an object with HSL properties.

// ### Supported Input Formats:

// - **Hex:** String starting with `#`, e.g., `#FFFFFF`.
// - **RGB Array:** 3-element array, e.g., `[255, 87, 51]`.

// This function will convert any given hex or RGB color to HSL format.

// Example usage
// const hslColor = colorToHsl("#FF5733");  // Example hex color
// console.log("HSL:", hslColor);

function hexToRgb(hex) {
    // Remove the leading "#" if present
    hex = hex.replace(/^#/, '');
    // If it's a 3-character shorthand hex, expand it to 6 characters
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    // Parse the hex string into integer RGB values
    const int = parseInt(hex, 16);
    return {
        r: (int >> 16) & 255,
        g: (int >> 8) & 255,
        b: int & 255
    };
}

function rgbToHsl(r, g, b) {
    // Normalize RGB to [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        // Achromatic case (gray)
        h = s = 0;
    } else {
        const delta = max - min;
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch (max) {
            case r:
                h = (g - b) / delta + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / delta + 2;
                break;
            case b:
                h = (r - g) / delta + 4;
                break;
        }
        h /= 6;
    }

    // Convert to degrees, percent format
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

export function toHsl(color) {
    if (color.startsWith('hsl')) {
        return color
                // .replace(/hsla?\(([^)]+)\)/, '$1')
                .replace('hsl(', '')
                .replace(')', '')
                .split(',')
                .map(x => Number(x.replace('%', '').trim())) 
    }

    let rgb;
    if (typeof color === 'string' && color.startsWith('#')) {
        // Hex string case
        rgb = hexToRgb(color);
    } else if (Array.isArray(color) && color.length === 3) {
        // RGB array case
        rgb = { r: color[0], g: color[1], b: color[2] };
    } else {
        throw new Error(`Unsupported color format: ${color}. Provide a hex string (#RRGGBB) or an RGB array.`);
    }

    return rgbToHsl(rgb.r, rgb.g, rgb.b);
}