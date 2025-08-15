/**
 * Utility functions for handling optimized public images
 * (tools, testimonials, stacks, certifications, awards)
 */

export type PublicImageCategory =
  | "tools"
  | "testimonial"
  | "stacks"
  | "cert"
  | "awards";
export type ImageSize = "thumbnail" | "medium" | "large" | "hero";
export type ImageFormat = "jpg" | "webp" | "png";

/**
 * Get optimized image path for public images
 */
export function getOptimizedPublicImage(
  category: PublicImageCategory,
  imageName: string,
  size: ImageSize = "medium",
  format: ImageFormat = "webp"
): string {
  // Remove file extension from image name
  const nameWithoutExt = imageName.replace(/\.(jpg|jpeg|png|webp|svg)$/i, "");

  // For SVG files (like icons), return original path
  if (imageName.toLowerCase().endsWith(".svg")) {
    return `/img/${category}/${imageName}`;
  }

  return `/optimized/img/${category}/${nameWithoutExt}-${size}.${format}`;
}

/**
 * Get testimonial image path
 */
export function getTestimonialImage(
  imageName: string,
  size: ImageSize = "medium"
): string {
  return getOptimizedPublicImage("testimonial", imageName, size);
}

/**
 * Get certification image path
 */
export function getCertificationImage(
  imageName: string,
  size: ImageSize = "medium"
): string {
  return getOptimizedPublicImage("cert", imageName, size);
}

/**
 * Get award image path
 */
export function getAwardImage(
  imageName: string,
  size: ImageSize = "medium"
): string {
  return getOptimizedPublicImage("awards", imageName, size);
}

/**
 * Get stack/technology icon path
 */
export function getStackIcon(iconName: string): string {
  // Stack icons are SVGs, so return original path
  return `/img/stacks/${iconName}`;
}

/**
 * Get tool icon path
 */
export function getToolIcon(iconName: string): string {
  // Tool icons are SVGs, so return original path
  return `/img/tools/${iconName}`;
}

/**
 * Create a srcSet for responsive images
 */
export function getPublicImageSrcSet(
  category: PublicImageCategory,
  imageName: string,
  format: ImageFormat = "webp"
): string {
  const nameWithoutExt = imageName.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  const basePath = `/optimized/img/${category}/${nameWithoutExt}`;

  return [
    `${basePath}-thumbnail.${format} 300w`,
    `${basePath}-medium.${format} 800w`,
    `${basePath}-large.${format} 1200w`,
    `${basePath}-hero.${format} 1600w`,
  ].join(", ");
}

/**
 * Get fallback images for missing assets
 */
export function getFallbackImage(category: PublicImageCategory): string {
  const fallbacks = {
    tools: "/img/placeholder-tool.svg",
    testimonial: "/img/placeholder-profile.svg",
    stacks: "/img/placeholder-stack.svg",
    cert: "/img/placeholder-cert.svg",
    awards: "/img/placeholder-award.svg",
  };

  return fallbacks[category] || "/img/placeholder-project.svg";
}
