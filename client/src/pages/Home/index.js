import React, { useState } from 'react';
import { gql, useApolloClient } from '@apollo/client';
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
    const { data } = await client.query({ query: SEARCH_EARTHQUAKES, variables: earthQuakeParams });
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
        {loading ? <div>Loading....</div> : (
          (earthQuakeDemographics && earthQuakeDemographics?.earthquakes?.length > 0) ?
            <Results className='col-span-2' earthQuakes={earthQuakeDemographics} /> :
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  {/* Heroicon name: solid/exclamation */}
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    No Earthquakes within specified criteria
                  </p>
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}