import { createStore } from "@stencil/store";

type Store = {
  showBanner: boolean;
};

const store = createStore<Store>({
  showBanner: false,
});


export default store;
