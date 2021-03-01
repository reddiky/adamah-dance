import schema from '@/catalog/schema'

describe('catalog/schema', () => {
  it('matches snapshot', () => {
    expect(schema).toMatchSnapshot()
  })
})
