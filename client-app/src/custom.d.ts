declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
  
interface Window {
  particlesJS: any;
}