import { v4 as uuiV4 } from 'uuid'

export abstract class Entity<Props = any> {
  public readonly _id: string
  public readonly props: Props

  constructor(props: Props, id?: string) {
    this.props = props
    this._id = id || uuiV4()
  }

  get id() {
    return this._id
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this.id,
      ...this.props,
    } as Required<{ id: string } & Props>
  }
}
