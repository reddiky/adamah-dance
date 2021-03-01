import { gql } from 'apollo-server'

export default gql`
  
  type EarthQuakeDemographics {
    earthquakes: [EarthQuake]
    max: Float,
    min: Float,
    median: Float
  }
  
  type EarthQuake {
    mag: String
    title: String
    time: String
    url: String
    coordinates: [Float]
  }

  type Query {
    earthQuakes(
      format: String!, starttime: Date!, endtime: Date!, minmagnitude: Float!, 
      location: String, latitude: Float!, longitude: Float!, maxradiuskm: Float!): 
        EarthQuakeDemographics
  }
`