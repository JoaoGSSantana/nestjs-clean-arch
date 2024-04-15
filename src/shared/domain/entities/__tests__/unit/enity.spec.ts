import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('UEntity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 7 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 7 }
    const id = 'e978fbea-dc0e-4476-bd54-ee220b5420cd'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Should convert entity to javascript object', () => {
    const props = { prop1: 'value1', prop2: 7 }
    const id = 'e978fbea-dc0e-4476-bd54-ee220b5420cd'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({ id, ...props })
  })
})
