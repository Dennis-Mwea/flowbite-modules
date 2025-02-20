import Carousel from "../components/carousel";

declare global {
    interface Window {
        Carousel: typeof Carousel;
        initCarousel: () => void;
        initFlowbiteModule: () => void;
        FlowbiteModuleInstances: any,
    }
}
