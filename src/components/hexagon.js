export default function hexagon({
  x = 0,
  y = 0,
  width = 10,
  height = 10,
  fill = "red",
}) {
  return `<svg x = "${x}" y = "${y}" height="${width}" width="${height}" viewBox="0 0 512 512"><polygon fill = "${fill}" points="25.045,128 256,0 486.955,128 486.955,384 256,512 25.045,384 "></polygon></svg>`;
}
