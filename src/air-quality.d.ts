export type AirQualityLevel = 'good' | 'moderate' | 'poor';
export interface AirQualityResult {
    level: AirQualityLevel;
    label: string;
}
export interface SensorReading {
    value: number;
    good: number;
    warning: number;
}
/**
 * Fixed thresholds based on WHO 2021 air quality guidelines and ASHRAE 62.1.
 * good   = acceptable indoor level
 * warning = elevated; attention or ventilation needed
 * poor    = reference line shown on charts; not used for status classification
 */
export declare const AQ_THRESHOLDS: {
    readonly co2: {
        readonly good: 800;
        readonly warning: 1200;
        readonly poor: 1500;
    };
    readonly no2: {
        readonly good: 50;
        readonly warning: 150;
        readonly poor: 250;
    };
    readonly pm1: {
        readonly good: 10;
        readonly warning: 25;
        readonly poor: 50;
    };
    readonly pm25: {
        readonly good: 15;
        readonly warning: 35;
        readonly poor: 75;
    };
    readonly pm10: {
        readonly good: 45;
        readonly warning: 100;
        readonly poor: 150;
    };
    readonly radon: {
        readonly good: 100;
        readonly warning: 150;
        readonly poor: 300;
    };
    readonly voc: {
        readonly good: 150;
        readonly warning: 250;
        readonly poor: 400;
    };
};
/**
 * Classifies a single sensor reading against its thresholds.
 *
 * Threshold interpretation (WHO 2021 / ASHRAE defaults):
 *   value ≤ good     → 'good'     (e.g. PM2.5 ≤ 15 µg/m³, CO₂ ≤ 800 ppm)
 *   value ≤ warning  → 'moderate' (elevated, attention needed)
 *   value > warning  → 'poor'     (action required)
 */
export declare function classifyReading(reading: SensorReading): AirQualityLevel;
/**
 * Derives overall air quality from a set of sensor readings.
 * Returns null when no readings are provided (no sensors configured).
 * The worst individual level drives the result.
 */
export declare function calculateAirQuality(readings: SensorReading[]): AirQualityResult | null;
/**
 * Returns a natural-language phrase for an air quality level,
 * suitable for use as the trailing part of a combined status sentence.
 * e.g. "clean air", "moderate air", "poor air"
 */
export declare function airQualityPhrase(level: AirQualityLevel): string;
//# sourceMappingURL=air-quality.d.ts.map