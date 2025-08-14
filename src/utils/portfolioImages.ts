/**
 * Utility functions for handling portfolio images
 * Maps portfolio item images to their optimized versions
 */

export type ImageSize = "thumbnail" | "medium" | "large" | "hero";
export type ImageFormat = "jpg" | "webp";

interface PortfolioMeta {
  title: string;
  description?: string;
  excerpt?: string;
  publishDate?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
  date?: string;
  author?: string;
  agency?: string;
  client?: string;
  background_image?: string;
  logo?: string;
  tagline?: string;
  case_link_url?: string;
  cover?: string;
  images?: string[];
  [key: string]: string | number | boolean | string[] | undefined;
}

/**
 * Get the optimized image path for a portfolio item
 */
export function getOptimizedImagePath(
  projectSlug: string,
  imageName: string,
  size: ImageSize = "large",
  format: ImageFormat = "webp"
): string {
  // Remove file extension from image name
  const nameWithoutExt = imageName.replace(/\.(jpg|jpeg|png|webp)$/i, "");

  // Special handling for cover images (use as hero)
  if (imageName.includes("cover") || size === "hero") {
    return `/optimized/portfolio/${projectSlug}/${nameWithoutExt}-hero.${format}`;
  }

  return `/optimized/portfolio/${projectSlug}/${nameWithoutExt}-${size}.${format}`;
}

/**
 * Get the portfolio item preview image (for cards/thumbnails)
 */
export function getPortfolioPreviewImage(
  projectSlug: string,
  meta: PortfolioMeta
): string {
  // Priority: cover > background_image > logo > first image
  if (meta.cover) {
    return getOptimizedImagePath(projectSlug, meta.cover, "medium");
  }

  if (meta.background_image) {
    return getOptimizedImagePath(projectSlug, meta.background_image, "medium");
  }

  if (meta.logo) {
    return getOptimizedImagePath(projectSlug, meta.logo, "medium");
  }

  if (meta.images && meta.images.length > 0) {
    return getOptimizedImagePath(projectSlug, meta.images[0], "medium");
  }

  // Fallback to a default placeholder
  return "/img/placeholder-project.svg";
}

/**
 * Get the portfolio item hero image (for case study pages)
 */
export function getPortfolioHeroImage(
  projectSlug: string,
  meta: PortfolioMeta
): string {
  // Priority: cover > background_image > first image
  if (meta.cover) {
    return getOptimizedImagePath(projectSlug, meta.cover, "hero");
  }

  if (meta.background_image) {
    return getOptimizedImagePath(projectSlug, meta.background_image, "hero");
  }

  if (meta.images && meta.images.length > 0) {
    return getOptimizedImagePath(projectSlug, meta.images[0], "hero");
  }

  return "";
}

/**
 * Get all images for a portfolio item gallery
 */
export function getPortfolioGalleryImages(
  projectSlug: string,
  meta: PortfolioMeta
): Array<{
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}> {
  const images = [];

  // Add cover image if available
  if (meta.cover) {
    images.push({
      id: "cover",
      src: getOptimizedImagePath(projectSlug, meta.cover, "large"),
      alt: `${meta.title} - Cover Image`,
      title: "Cover Image",
    });
  }

  // Add background image if different from cover
  if (meta.background_image && meta.background_image !== meta.cover) {
    images.push({
      id: "background",
      src: getOptimizedImagePath(projectSlug, meta.background_image, "large"),
      alt: `${meta.title} - Background`,
      title: "Background Image",
    });
  }

  // Add additional images
  if (meta.images) {
    meta.images.forEach((imageName: string, index: number) => {
      if (imageName !== meta.cover && imageName !== meta.background_image) {
        images.push({
          id: `image-${index}`,
          src: getOptimizedImagePath(projectSlug, imageName, "large"),
          alt: `${meta.title} - Image ${index + 1}`,
          title: `Image ${index + 1}`,
        });
      }
    });
  }

  return images;
}

/**
 * Create a srcSet for responsive images
 */
export function getImageSrcSet(
  projectSlug: string,
  imageName: string,
  format: ImageFormat = "webp"
): string {
  const nameWithoutExt = imageName.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  const basePath = `/optimized/portfolio/${projectSlug}/${nameWithoutExt}`;

  return [
    `${basePath}-thumbnail.${format} 400w`,
    `${basePath}-medium.${format} 800w`,
    `${basePath}-large.${format} 1200w`,
    `${basePath}-hero.${format} 1920w`,
  ].join(", ");
}
