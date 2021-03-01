import React from 'react';

export default function Results(props) {
  let { earthQuakes } = props
  let { earthquakes, max, min, median } = earthQuakes
  const renderEarthQuakes = () => {
    return earthquakes.slice(0,100).map((earthQuake, i) => 
      {
        return (
        <tr className={i % 2 === 0 ? "bg-white" : "bg-gray-50"} key={i}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            { earthQuake.title}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          { new Date(parseFloat(earthQuake.time)).toDateString()}

          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          { earthQuake.mag}

          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          { earthQuake.coordinates.toString()}

          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href={ earthQuake.url } className="text-indigo-600 hover:text-indigo-900">Learn More</a>
          </td>
        </tr>
      )
    })
  }
  return (
    <div className="flex flex-col">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow mb-10 overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Number of Earthquakes
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Maximum Magnitude
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Minimum Magnitude
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Median Magnitude of EarthQuakes
                  </th>
                </tr>
              </thead>
              <tbody> 
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    { earthquakes.length}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    { max }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    { min }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    { median }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Magnitude
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Coordinates
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Learn More</span>
                  </th>
                </tr>
              </thead>
              <tbody> 
                {renderEarthQuakes()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}