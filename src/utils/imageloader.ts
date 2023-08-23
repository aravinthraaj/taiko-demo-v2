// Docs: https://techdocs.akamai.com/ivm/reference/test-images-on-demand
export default function akamaiLoader({ src, width, quality }: any) {
  return `http://localhost:3000//${src}?imwidth=${width}`
}
