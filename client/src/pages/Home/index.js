import React, { useState } from 'react';
import { useLazyQuery, gql, useApolloClient } from '@apollo/client';
import Results from '../../components/Results'
import Search from '../../components/Search'


const SEARCH_EARTHQUAKES = gql`
  query earthQuakes ($format: String!, $starttime: Date!, $endtime: Date!, $minmagnitude: Float!, 
                    $location: String, $latitude: Float!, $longitude: Float!, $maxradiuskm: Float!) {
          earthQuakes (format: $format, starttime: $starttime, endtime: $endtime, minmagnitude: $minmagnitude, 
                      location: $location, latitude: $latitude, longitude: $longitude, maxradiuskm: $maxradiuskm) {
            max
            min
            median
            earthquakes {
              mag
              title
              time
              url
              coordinates
            }
            
    }
  }
`;

export default function Home() {
  const initialState = {
    format: 'geojson',
    starttime: new Date(),
    endtime: new Date(),
    minmagnitude: 1,
    location: null,
    latitude: 0,
    longitude: 0,
    maxradiuskm: 1
  }
  const [earthQuakeDemographics, setEarthQuakeDemos] = useState({})
  const [loading, setLoading] = useState(false)
  const [earthQuakeParams, setEarthQuakeParams] = useState(initialState);
  const client = useApolloClient();

  const getEarthQuakes = async () => {
    setLoading(true)
    const { data } = await client.query({ query: SEARCH_EARTHQUAKES, variables : earthQuakeParams });
    const { earthQuakes } = data
    setEarthQuakeDemos(earthQuakes)
    setLoading(false)
  }

  const clearState = () => {
    setEarthQuakeParams(initialState)
    setEarthQuakeDemos({})
  }

  return (
    <div className='relative max-w-7xl'>
      <div className='grid grid-cols-3'>
        <div className='col-span-1 mr-5'>
          <Search earthQuakeParams={earthQuakeParams} setEarthQuakeParams={setEarthQuakeParams} />
          <div className="mt-8 flex justify-left">
            <div className="inline-flex rounded-md shadow">
              <button onClick={clearState} className='"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"'>
                Clear Data
              </button>
            </div>
            <div className="ml-3 inline-flex">
              <button onClick={() => getEarthQuakes(earthQuakeParams)} className='"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"'>
                Find EarthQuakes
              </button>
            </div>
          </div>
        </div>
        {loading && <div>Loading....</div>}
        {(earthQuakeDemographics && earthQuakeDemographics?.earthquakes?.length > 0) ? <Results className='col-span-2'  earthQuakes={earthQuakeDemographics} /> : <div>No Earthquakes within specified criteria</div>}
      </div>
    </div>
  );
}