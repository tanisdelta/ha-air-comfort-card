import { LitElement } from "lit";
import { CardConfig, HomeAssistant, LovelaceCard } from "./types";
import "./air-comfort-card-editor";
import "./svg-chart";
export declare class AirComfortCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    private config?;
    private dialSize;
    private temperatureHistory;
    private humidityHistory;
    private co2History;
    private no2History;
    private pm1History;
    private pm25History;
    private pm10History;
    private radonHistory;
    private vocHistory;
    private historyExpanded;
    private resizeObserver?;
    private historyFetchInterval?;
    private lastHistoryFetch;
    static styles: import("lit").CSSResult;
    static getStubConfig(): CardConfig;
    static getConfigElement(): HTMLElement;
    setConfig(config: CardConfig): void;
    getCardSize(): number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private fetchHistory;
    private getSensorDefs;
    private updateDialSize;
    protected render(): import("lit-html").TemplateResult<1>;
    private toggleHistory;
    private calculateAirQuality;
    private handleHistoryToggleKeyDown;
    private renderCharts;
}
declare global {
    interface HTMLElementTagNameMap {
        "air-comfort-card": AirComfortCard;
    }
}
//# sourceMappingURL=air-comfort-card.d.ts.map