
export interface ShortContent {
  type: string,
  content: string
}

export interface ContentData {
  type: string
  depth: number
  display: boolean
  data: string
}

export interface Content {
  type: string
  shortContent: ShortContent
  contentData: Array<ContentData>
}

export interface Material {
  contents: Array<Content>
}
