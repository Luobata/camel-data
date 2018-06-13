/**
 * @description data transform to camel
 */

export default (input: string): string => {
    return input.replace(/[-_][^-_]/g, (match: string) => {
        return match.charAt(1).toUpperCase();
    });
};
