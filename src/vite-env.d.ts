declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}