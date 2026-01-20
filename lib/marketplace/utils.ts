export function detectWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return gl !== null;
  } catch {
    return false;
  }
}

export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;

  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  );
}

export function getOptimalDPR(): [number, number] {
  if (typeof window === "undefined") return [1, 1.5];

  const isMobile = isMobileDevice();
  const deviceDPR = window.devicePixelRatio || 1;

  if (isMobile) {
    return [1, Math.min(deviceDPR, 1.5)];
  }

  return [1, Math.min(deviceDPR, 2)];
}

export function formatPrice(priceRange: string): string {
  return priceRange;
}

export function getModelScale(category: "caskets" | "urns"): number {
  return category === "caskets" ? 0.5 : 1.2;
}

export function getCameraPosition(
  category: "caskets" | "urns"
): [number, number, number] {
  return category === "caskets" ? [0, 0.8, 3] : [0, 0.3, 1.8];
}
