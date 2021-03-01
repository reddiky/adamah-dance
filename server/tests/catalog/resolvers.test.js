import earthQuakes from '@/catalog/resolvers'

import axios from 'axios';
jest.mock('axios');


const original = console.error

beforeEach(() => {
  console.error =  jest.fn() //jest.fn((...args) => console.log(args.toString()))
})

afterEach(() => {
  console.error = original
})

describe('catalog', () => {
  it('earthquakes logs an error with bad result', async (done) => {
    axios.mockImplementation(() => Promise.resolve({ data: {} }))
    
    const format = 'format' 
    const starttime = 'startTime' 
    const endtime = 'endTime' 
    const minmagnitude = 'min' 
    const location = 'location' 
    const latitude = 'lat'
    const longitude = 'long'
    const maxradiuskm = 'radius'
    const args = {
      format, starttime, endtime, minmagnitude, 
      location, latitude, longitude, maxradiuskm,
    }
    
    await earthQuakes({}, args, {})
    
    expect(axios).toHaveBeenCalled()
    expect(console.error).toHaveBeenCalled()
    done()
  })

  it('earthquakes sorts data from usgs, returning array, min, max and median', async (done) => {
    axios.mockImplementation(() => Promise.resolve({ data: {
      features: [
        {
          properties: {
            mag: 2,
            title: 'title2',
            time: 'time',
            url: 'some.url.come',
          },
          geometry: {
            coordinates: [1,3,5]
          }
        },
        {
          properties: {
            mag: 1,
            title: 'title1',
            time: 'time',
            url: 'some.url.come',
          },
          geometry: {
            coordinates: [1,3,5]
          }
        },
        {
          properties: {
            mag: 3,
            title: 'title3',
            time: 'time',
            url: 'some.url.come',
          },
          geometry: {
            coordinates: [1,3,5]
          }
        }
      ]
    } }))
    
    const format = 'format' 
    const starttime = 'startTime' 
    const endtime = 'endTime' 
    const minmagnitude = 'min' 
    const location = 'location' 
    const latitude = 'lat'
    const longitude = 'long'
    const maxradiuskm = 'radius'
    const args = {
      format, starttime, endtime, minmagnitude, 
      location, latitude, longitude, maxradiuskm,
    }
    
    const result = await earthQuakes({}, args, {})
    
    expect(axios).toHaveBeenCalled()
    expect(result).toEqual({
      earthquakes: [{
        mag: 1,
        title: 'title1',
        time: 'time',
        url: 'some.url.come',
        coordinates: [1,3,5]
      },
      {
        mag: 2,
        title: 'title2',
        time: 'time',
        url: 'some.url.come',
        coordinates: [1,3,5]
      },
      {
        mag: 3,
        title: 'title3',
        time: 'time',
        url: 'some.url.come',
        coordinates: [1,3,5]
      }],
      min: 1,
      max: 3,
      median: 2
    })
    done()
  })


})
