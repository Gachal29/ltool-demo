
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
}
