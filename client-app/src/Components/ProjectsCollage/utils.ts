/**
 * Generate a random number between min and max (inclusive)
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random number between min and max
 */
export const generateSeconds = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
