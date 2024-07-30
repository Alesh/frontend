import RootStore from "./RootStore";

export type { RouterStore } from "./RouterStore";

const rootStore = new RootStore();
export const routerStore = rootStore.routerStore;
