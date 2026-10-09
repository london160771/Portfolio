"""Crop real browser captures and encode responsive WebP derivatives; no compositing."""
import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "docs" / "media-sources"
OUTPUT = ROOT / "public" / "assets" / "projects"
CAPTURES = {
    "opna": {
        "desktop": ("opna-desktop.jpg", (144, 0, 1280, 585)),
        "mobile": ("opna-mobile.jpg", (0, 0, 374, 585)),
    },
    "velora-cove": {
        "desktop": ("velora-desktop.jpg", (0, 100, 1424, 790)),
        "mobile": ("velora-mobile.jpg", (0, 170, 374, 680)),
    },
    "the-bv-brand": {
        "desktop": ("bv-desktop.jpg", (0, 0, 1424, 940)),
        "mobile": ("bv-mobile.jpg", (0, 0, 374, 748)),
    },
    "stocksplit": {
        "desktop": ("stocksplit-desktop.jpg", (0, 0, 1440, 610)),
        "mobile": ("stocksplit-mobile.jpg", (0, 0, 400, 725)),
    },
    "agenthub": {
        "desktop": ("agenthub-desktop.jpg", (0, 0, 1420, 724)),
        "mobile": ("agenthub-mobile.jpg", (0, 0, 370, 702)),
    },
    "portpay": {
        "desktop": ("portpay-desktop.jpg", (166, 0, 1240, 614)),
        "mobile": ("portpay-mobile.jpg", (0, 0, 360, 510)),
    },
    "stocksplit": {
        "desktop": ("stocksplit-desktop.jpg", (0, 0, 1440, 610)),
        "mobile": ("stocksplit-mobile.jpg", (0, 0, 400, 725)),
    },
    "agenthub": {
        "desktop": ("agenthub-desktop.jpg", (0, 0, 1420, 724)),
        "mobile": ("agenthub-mobile.jpg", (0, 0, 370, 702)),
    },
    "portpay": {
        "desktop": ("portpay-desktop.jpg", (166, 0, 1240, 614)),
        "mobile": ("portpay-mobile.jpg", (0, 0, 360, 510)),
    },
}


def main():
    manifest = {}
    for slug, variants in CAPTURES.items():
        folder = OUTPUT / slug
        folder.mkdir(parents=True, exist_ok=True)
        manifest[slug] = {}
        for variant, (filename, bounds) in variants.items():
            with Image.open(SOURCES / filename) as original:
                if not (0 <= bounds[0] < bounds[2] <= original.width
                        and 0 <= bounds[1] < bounds[3] <= original.height):
                    raise ValueError(f"Crop exceeds the real source: {filename}")
                crop = original.convert("RGB").crop(bounds)
                widths = [crop.width] if variant == "mobile" else sorted(
                    {width for width in (480, 800, 1200, crop.width) if width <= crop.width}
                )
                files = []
                for width in widths:
                    height = round(crop.height * width / crop.width)
                    image = crop.resize((width, height), Image.Resampling.LANCZOS)
                    path = folder / f"lead-{variant}-{width}.webp"
                    image.save(path, "WEBP", quality=88, method=6)
                    files.append({"src": f"/assets/projects/{slug}/{path.name}",
                                  "width": width, "height": height, "bytes": path.stat().st_size})
                manifest[slug][variant] = {"source": filename, "crop": list(bounds), "files": files}
    (SOURCES / "derivatives.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    main()
