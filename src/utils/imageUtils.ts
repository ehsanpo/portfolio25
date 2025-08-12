import fs from "fs";
import path from "path";

// Image manifest type
interface ImageManifest {
  portfolio: Record<
    string,
    {
      images: Record<string, Record<string, string>>;
    }
  >;
  blog: Record<
    string,
    {
      images: Record<string, Record<string, string>>;
    }
  >;
}

// Image size types
export type ImageSize = "thumbnail" | "medium" | "large" | "hero" | "original";
export type ImageFormat = "jpg" | "webp";

/**
 * Get optimized image URL
 * @param type - Content type (portfolio or blog)
 * @param slug - Item slug
 * @param imageName - Original image filename (without extension)
 * @param size - Desired size
 * @param format - Desired format
 * @param fallback - Fallback URL if optimized image not found
 */
export function getOptimizedImageUrl(
  type: "portfolio" | "blog",
  slug: string,
  imageName: string,
  size: ImageSize = "medium",
  format: ImageFormat = "webp",
  fallback?: string
): string {
  try {
    // Load manifest (in production, this would be cached)
    const manifestPath = path.join(
      process.cwd(),
      "public",
      "optimized",
      "manifest.json"
    );

    if (!fs.existsSync(manifestPath)) {
      return fallback || getPlaceholderImage(size);
    }

    const manifest: ImageManifest = JSON.parse(
      fs.readFileSync(manifestPath, "utf8")
    );

    // Remove file extension if present
    const baseImageName = imageName.replace(/\.[^/.]+$/, "");

    // Try to get optimized image
    const sizeKey =
      size === "original" ? baseImageName : `${baseImageName}-${size}`;
    const imageUrl = manifest[type]?.[slug]?.images?.[sizeKey]?.[format];

    if (imageUrl) {
      return imageUrl;
    }

    // Fallback to jpg if webp not available
    if (format === "webp") {
      const jpgUrl = manifest[type]?.[slug]?.images?.[sizeKey]?.["jpg"];
      if (jpgUrl) return jpgUrl;
    }

    // Ultimate fallback
    return fallback || getPlaceholderImage(size);
  } catch (error) {
    console.warn(
      `Error getting optimized image for ${type}/${slug}/${imageName}:`,
      error
    );
    return fallback || getPlaceholderImage(size);
  }
}

/**
 * Get all available images for a content item
 */
export function getAvailableImages(
  type: "portfolio" | "blog",
  slug: string
): Record<string, Record<ImageFormat, string>> {
  try {
    const manifestPath = path.join(
      process.cwd(),
      "public",
      "optimized",
      "manifest.json"
    );

    if (!fs.existsSync(manifestPath)) {
      return {};
    }

    const manifest: ImageManifest = JSON.parse(
      fs.readFileSync(manifestPath, "utf8")
    );
    return manifest[type]?.[slug]?.images || {};
  } catch (error) {
    console.warn(`Error getting available images for ${type}/${slug}:`, error);
    return {};
  }
}

/**
 * Generate picture element with multiple sources for responsive images
 */
export function generatePictureElement(
  type: "portfolio" | "blog",
  slug: string,
  imageName: string,
  alt: string,
  className?: string,
  sizes?: string
): string {
  const baseImageName = imageName.replace(/\.[^/.]+$/, "");

  const srcSet = {
    webp: {
      thumbnail: getOptimizedImageUrl(
        type,
        slug,
        imageName,
        "thumbnail",
        "webp"
      ),
      medium: getOptimizedImageUrl(type, slug, imageName, "medium", "webp"),
      large: getOptimizedImageUrl(type, slug, imageName, "large", "webp"),
    },
    jpg: {
      thumbnail: getOptimizedImageUrl(
        type,
        slug,
        imageName,
        "thumbnail",
        "jpg"
      ),
      medium: getOptimizedImageUrl(type, slug, imageName, "medium", "jpg"),
      large: getOptimizedImageUrl(type, slug, imageName, "large", "jpg"),
    },
  };

  return `
    <picture>
      <source
        media="(max-width: 640px)"
        srcset="${srcSet.webp.thumbnail}"
        type="image/webp"
      />
      <source
        media="(max-width: 640px)"
        srcset="${srcSet.jpg.thumbnail}"
        type="image/jpeg"
      />
      <source
        media="(max-width: 1024px)"
        srcset="${srcSet.webp.medium}"
        type="image/webp"
      />
      <source
        media="(max-width: 1024px)"
        srcset="${srcSet.jpg.medium}"
        type="image/jpeg"
      />
      <source
        srcset="${srcSet.webp.large}"
        type="image/webp"
      />
      <source
        srcset="${srcSet.jpg.large}"
        type="image/jpeg"
      />
      <img
        src="${srcSet.jpg.medium}"
        alt="${alt}"
        ${className ? `class="${className}"` : ""}
        ${sizes ? `sizes="${sizes}"` : ""}
        loading="lazy"
      />
    </picture>
  `;
}

/**
 * Get placeholder image URL
 */
function getPlaceholderImage(size: ImageSize): string {
  const dimensions = {
    thumbnail: "300x200",
    medium: "800x600",
    large: "1200x900",
    hero: "1600x900",
    original: "800x600",
  };

  const dim = dimensions[size];
  return `https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=${
    dim.split("x")[0]
  }&h=${dim.split("x")[1]}`;
}

/**
 * Check if optimized images exist for a content item
 */
export function hasOptimizedImages(
  type: "portfolio" | "blog",
  slug: string
): boolean {
  try {
    const manifestPath = path.join(
      process.cwd(),
      "public",
      "optimized",
      "manifest.json"
    );

    if (!fs.existsSync(manifestPath)) {
      return false;
    }

    const manifest: ImageManifest = JSON.parse(
      fs.readFileSync(manifestPath, "utf8")
    );
    return !!(
      manifest[type]?.[slug]?.images &&
      Object.keys(manifest[type][slug].images).length > 0
    );
  } catch (error) {
    return false;
  }
}
