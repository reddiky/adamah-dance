import { gql } from 'apollo-server-express'
import earthQuakes from '../../catalog/resolvers.js'
import catalogSchema from '../../catalog/schema.js'

export const resolvers = {
  Query: {
    earthQuakes
  }
}

const dateSchema = gql`
  scalar Date
`

export const typeDefs = [dateSchema, catalogSchema]