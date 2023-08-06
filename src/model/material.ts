
export interface ShortContent {
  type: string,
  content: string
}

export interface ContentData {
  type: string
  depth: number
  data: string
  width?: number
  height?: number
}

export interface Content {
  type: string
  shortContent: ShortContent
  contentData: Array<ContentData>
}

export interface Material {
  contents: Array<Content>
}
