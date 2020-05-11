export default function generateHexColor() {
  return `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;
}
