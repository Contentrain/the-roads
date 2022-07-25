import { writable } from "svelte/store";

export const sidebarStatus = writable(true);
export const allMaps = writable([]);
export const activeMap = writable();
export const years = writable([]);
export const activeYear = writable();
export const headerData = writable();
