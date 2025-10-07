declare module "embla-carousel-autoplay" {
  import type { EmblaPluginType } from "embla-carousel";

  export type AutoplayOptions = {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
    // Bazı versiyonlarda yok ama zarar vermez:
    stopOnFocusIn?: boolean;
    // Hover/focus alanı için kök node seçimi:
    rootNode?: (root: HTMLElement) => HTMLElement;
  };

  // Autoplay instance'ı init öncesi play/stop'u eklemediği için opsiyonel:
  type Auto = EmblaPluginType & {
    play?: () => void;
    stop?: () => void;
  };

  const Autoplay: (options?: AutoplayOptions | AutoplayOptions[]) => Auto;
  export default Autoplay;
}
