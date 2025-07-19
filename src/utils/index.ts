// Utility functions and classes
export function cx(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

// Format number with commas
export function formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Debounce function
export function debounce<F extends (...args: unknown[]) => void>(
    func: F,
    delay: number
): (...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<F>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Capitalize first letter
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}