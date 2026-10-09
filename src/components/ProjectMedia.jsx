export default function ProjectMedia({ media, wide = false }) {
  const sizes = wide
    ? '(max-width: 600px) calc(100vw - 40px), (max-width: 864px) 54vw, (max-width: 1216px) 60vw, 710px'
    : '(max-width: 600px) calc(100vw - 40px), (max-width: 1216px) 46vw, 552px';

  return (
    <picture>
      {media.mobile && <source media="(max-width: 600px)" srcSet={media.mobile.src}
        width={media.mobile.width} height={media.mobile.height} />}
      <img src={media.src} srcSet={media.srcSet} sizes={sizes}
        width={media.width} height={media.height} alt={media.alt} loading="lazy" decoding="async" />
    </picture>
  );
}
