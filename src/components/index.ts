import {initCarousel} from "./carousel";

export function initFlowBiteModule(): void {
    initCarousel();
}

if (typeof window !== 'undefined') {
    window.initFlowbiteModule = initFlowBiteModule;
}
