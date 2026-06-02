import company from '@/data/company.json';

export const projectPlaceholderImage = company.logo;

export function resolveProjectImage(image?: string) {
  const trimmed = image?.trim() ?? '';
  if (trimmed) {
    return { src: trimmed, isPlaceholder: false };
  }
  return { src: projectPlaceholderImage, isPlaceholder: true };
}
