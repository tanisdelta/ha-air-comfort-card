import { AirQualityResult, AirQualityLevel } from './air-quality';
export interface StatusTranslations {
    status: Record<string, string>;
    airQuality: Record<string, string>;
}
/**
 * 0 = comfortable / clean
 * 1 = minor issue (single thermal deviation, or moderate air quality)
 * 2 = serious issue (combined thermal deviation, or poor air quality)
 */
export type Severity = 0 | 1 | 2;
export declare function thermalSeverity(statusText: string): Severity;
export declare function airQualitySeverity(level: AirQualityLevel): Severity;
/**
 * Returns the single dominant status to display.
 *
 * Rules:
 * - Both comfortable/clean (severity 0) → show thermal label
 * - One side is worse → show that side's label
 * - Equal severity and both non-zero → AQ wins (thermal is already shown on the dial)
 */
export declare function dominantStatus(statusText: string, aqResult: AirQualityResult | null, t?: StatusTranslations): {
    label: string;
    severity: Severity;
};
//# sourceMappingURL=status.d.ts.map