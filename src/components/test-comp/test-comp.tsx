import { Component, Prop, h } from "@stencil/core";
import store from "../../store";

@Component({
  tag: "test-comp-ui",
  styleUrl: "test-comp.scss",
  shadow: true,
})
export class TestComp {
  @Prop() showBanner: boolean = false;

  connectedCallback() {
    this.initializeStore();
  }

  render() {
    return (
      <div class="container">
        <p>This should always be visible</p>
        { store.get('showBanner') && <p>Banner</p> }
      </div>
    );
  }

  initializeStore() {
    store.set("showBanner", this.showBanner);
  }
}
