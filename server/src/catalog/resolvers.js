import axios from 'axios'

const EARTHQUAKE_CATALOG_USGS = 'https://earthquake.usgs.gov/fdsnws/event/1/query?'

// Helper functions
const convertFeatureToEarthQuake = (feature) => {
  return {
    mag: feature?.properties?.mag,
    title: feature?.properties?.title, 
    time: feature?.properties?.time,
    url: feature?.properties?.url,
    coordinates: feature?.geometry?.coordinates
  }
}

const magnitudeSorter = (a, b) => {
  if (a?.mag < b?.mag) return -1
  else if (a?.mag < b?.mag) return 1
  return 0
}


/* 
  earthQuakes(
    format: String!, starttime: Date!, endtime: Date!, minmagnitude: Float!, 
    location: String, latitude: Float!, longitude: Float!, maxradiuskm: Float!): 
      EarthQuakeDemographics
*/
const earthQuakes = async (parent, args, context) => {
  try {
    let { format, starttime, endtime, minmagnitude, location, latitude, longitude, maxradiuskm } = args;

    format = `format=${format}`;
    starttime = `&starttime=${starttime}`;
    endtime = `&endtime=${endtime}`;
    minmagnitude = `&minmagnitude=${minmagnitude}`;
    // This is gross, I wouldn't do this in prod, scott's honor ;-) 
    location = location ? `&location=${location}` : '';
    latitude = `&latitude=${latitude}`;
    longitude = `&longitude=${longitude}`;
    maxradiuskm = `&maxradiuskm=${maxradiuskm}`;


    // call out to usgs.gov
    const { data } = await axios({
      method: 'get',
      url: `${EARTHQUAKE_CATALOG_USGS}${format}${starttime}${endtime}${minmagnitude}${location}${latitude}${longitude}${maxradiuskm}`,
    })

    // convert feature to EarthQuake type, sort by magnitude
    const earthquakes = await Promise.all(data?.features.map(feature => convertFeatureToEarthQuake(feature)).sort(magnitudeSorter));


    // find the median. This is gross but I'd rather do this on the backend 
    let median
    if (earthquakes.length % 2 === 0) {
      median = (earthquakes[Math.floor(earthquakes.length / 2)-1]?.mag + earthquakes[Math.floor(earthquakes.length / 2)]?.mag) / 2

    } else {
      median = earthquakes[Math.floor(earthquakes.length / 2)]?.mag  
    }

    // Finding min / max this way is also gross, but I'd rather do this on the backend as well
    return {
      earthquakes,
      max: earthquakes.length ? earthquakes[earthquakes.length - 1]?.mag : 0,
      min: earthquakes.length ? earthquakes[0]?.mag : 0,
      median: median || 0
    }
  } catch (e) {
    console.error('[earthQuakes]: Error handling request -', e.message)
  }
}

export default earthQuakes;