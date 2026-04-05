import { LitElement, nothing } from "lit";
import { CardConfig, HomeAssistant } from "./types";
export declare class AirComfortCardEditor extends LitElement {
    hass?: HomeAssistant;
    private config?;
    private _entityPickerAvailable;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    setConfig(config: CardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderTextField;
    private _renderEntityField;
    private _renderRangeField;
    private _renderTemperatureUnitSelector;
    private _entityChanged;
    private _valueChanged;
    private _updateConfig;
}
declare global {
    interface HTMLElementTagNameMap {
        "air-comfort-card-editor": AirComfortCardEditor;
    }
}
//# sourceMappingURL=air-comfort-card-editor.d.ts.map