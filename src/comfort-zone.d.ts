export interface ComfortZoneResult {
    angle: number;
    radialDistance: number;
    isInComfortZone: boolean;
    statusText: string;
    tempDeviation: number;
    humidityDeviation: number;
}
export interface ComfortZoneOptions {
    tempMin?: number;
    tempMax?: number;
    humidityMin?: number;
    humidityMax?: number;
}
export declare function celsiusToFahrenheit(celsius: number): number;
export declare function fahrenheitToCelsius(fahrenheit: number): number;
export declare function calculateComfortZone(temp: number, humidity: number, options?: ComfortZoneOptions): ComfortZoneResult;
/**
 * Converts an uppercase comfort zone status text to a natural-case label.
 * Falls back to the original text if no mapping exists.
 */
export declare function thermalStatusLabel(statusText: string): string;
//# sourceMappingURL=comfort-zone.d.ts.map