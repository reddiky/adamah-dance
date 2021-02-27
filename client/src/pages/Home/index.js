import { useLazyQuery } from '@apollo/client';

const SEARCH_EARTHQUAKES = gql`
  query earthQuakes ($format: String!, $starttime: String, $endtime: String, $minmagnitude: String, 
                    $location: String, $latitude: Int, $longitude: Int, $maxradiuskm: Int) {
          earthQuakes (format: $format, starttime: $starttime, endtime: $endtime, minmagnitude: $minmagnitude, 
                      location: $location, latitude: $latitude, longitude: $longitude, maxradiuskm: $maxradiuskm) {
            mag
            title
    }
  }
`;


function DelayedQuery() {
  const [getEarthQuakes, { loading, data }] = useLazyQuery(SEARCH_EARTHQUAKES, variables);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {data && data.earthQuakes && true /* display Earthquakes */}
      
      <button onClick={() => getEarthQuakes({ variables: { /* need to set variables */ } })}>
        Click me!
      </button>
    </div>
  );
}