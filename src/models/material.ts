
export class Material {
  constructor (
    public contents?: Array<any>
  ) {}

  static fromData(contents: Array<any>): Material {
    return new Material(contents || [])
  }

  select = (content: any) => {
    this.contents?.push(content)
  }

  materialPageNum = (): number => {
    const pageNum = this.contents?.length
    if (pageNum) {
      return pageNum+1
    } else { return 1 }
  }
}
