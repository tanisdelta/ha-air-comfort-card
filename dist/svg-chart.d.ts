import { LitElement } from "lit";
export interface SvgChartPoint {
    time: Date;
    value: number;
}
export interface SvgChartThreshold {
    value: number;
    color: string;
    label?: string;
}
export declare class SvgLineChart extends LitElement {
    data: SvgChartPoint[];
    color: string;
    unit: string;
    thresholds: SvgChartThreshold[];
    private _width;
    private ro?;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get cw();
    private get ch();
    private onMouseMove;
    private onMouseLeave;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "svg-line-chart": SvgLineChart;
    }
}
//# sourceMappingURL=svg-chart.d.ts.map