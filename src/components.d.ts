/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TestCompUi {
        "showBanner": boolean;
    }
}
declare global {
    interface HTMLTestCompUiElement extends Components.TestCompUi, HTMLStencilElement {
    }
    var HTMLTestCompUiElement: {
        prototype: HTMLTestCompUiElement;
        new (): HTMLTestCompUiElement;
    };
    interface HTMLElementTagNameMap {
        "test-comp-ui": HTMLTestCompUiElement;
    }
}
declare namespace LocalJSX {
    interface TestCompUi {
        "showBanner"?: boolean;
    }
    interface IntrinsicElements {
        "test-comp-ui": TestCompUi;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "test-comp-ui": LocalJSX.TestCompUi & JSXBase.HTMLAttributes<HTMLTestCompUiElement>;
        }
    }
}