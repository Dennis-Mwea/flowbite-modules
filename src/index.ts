import Events from "./dom/events";
import {initCarousel} from "./components/carousel";

const events = new Events('load', [
    initCarousel,
])

events.init()

// export all components
export { default as Carousel } from "./components/carousel";

// export all types
export * from "./components/carousel/types";
export * from "./dom/types";

// export all functions
export { initCarousel } from "./components/carousel";

// Export all init functions
export { initFlowBiteModule } from './components/index';
