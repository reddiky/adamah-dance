import * as catalogResolvers from '../../catalog/resolvers'
import catalogSchema from '../../catalog/schema'

export const resolvers = {
  ...catalogResolvers
} 

export const typeDefs = [catalogSchema]