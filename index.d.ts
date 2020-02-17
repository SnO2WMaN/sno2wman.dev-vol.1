declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module 'simple-icons' {
  const content: {
    [key in string]: {
      title: string
      slug: string
      hex: string
      svg: string
      source: string
      path: string
    }
  }
  export default content
}
