import axios from 'axios'

const EARTHQUAKE_CATALOG_USGS = 'https://earthquake.usgs.gov/fdsnws/event/1/query?'

const earthQuakes = async (parent, args, context) => {
  try {
    let { format, starttime, endtime, minmagnitude, location, latitude, longitude, maxradiuskm } = args;

    format = `format=${format}`;
    starttime = `&starttime=${starttime}`;
    endtime = `&endtime=${endtime}`;
    minmagnitude = `&minmagnitude=${minmagnitude}`;
    location = `&location=${location}`;
    latitude = `&latitude=${latitude}`;
    longitude = `&longitude=${longitude}`;
    maxradiuskm = `&maxradiuskm=${maxradiuskm}`;

    const earthQuakeData = await axios({
      method: 'get',
      url: `${EARTHQUAKE_CATALOG_USGS}${format}${starttime}${endtime}${minmagnitude}${location}${latitude}${longitude}${maxradiuskm}`,
    })
    console.log(earthQuakeData)

    


    return earthQuakeData;
  } catch (e) {
    throw new Error('[earthQuakes]: Error handling request -', e.message)
  }
}

exports.earthQuakes = earthQuakes;