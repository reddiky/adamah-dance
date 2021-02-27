import { gql } from 'apollo-server'

export default gql`
  type EarthQuake {
    mag: String
    title: String
    time: String
    url: String
    coordinates: Coordinates
  }

  type Coordinates {
    x: String
    y: String
    z: String
  }

  type Query {
    earthQuakes(
      format: String!, starttime: String, endtime: String, minmagnitude: String, 
      location: String, latitude: Int, longitude: Int, maxradiuskm: Int): 
        [EarthQuake]
  }
`