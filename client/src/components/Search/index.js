import React from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Search(props) {
  let { earthQuakeParams, setEarthQuakeParams } = props
  let params = Object.assign({}, earthQuakeParams);
  let {
    starttime,
    endtime,
    minmagnitude,
    latitude,
    longitude,
    maxradiuskm,
  } = params

  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200 justify-left">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Earthquake Data Request
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                The results will be provided from the USGS earthquake catalog.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">
                  Start Time
                </label>
                <div className="mt-1">
                  <DatePicker selected={starttime} onChange={date => setEarthQuakeParams({...earthQuakeParams, starttime: date})} className='border-gray-300 rounded-md' />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">
                  End Time
                </label>
                <div className="mt-1">
                  <DatePicker selected={endtime} onChange={date => setEarthQuakeParams({...earthQuakeParams, endtime: date,})} className='border-gray-300 rounded-md' />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="mag" className="block text-sm font-medium text-gray-700">
                  Minimum Magnitude
                </label>
                <div className="mt-1">
                  <select value={minmagnitude} id="magnitude" name="magnitude" onChange={e => { e.persist(); setEarthQuakeParams({...earthQuakeParams, minmagnitude: parseFloat(e.target.value)})}} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="radius" className="block text-sm font-medium text-gray-700">
                  Max Radius
                </label>
                <div className="mt-1">
                  <input value={maxradiuskm} onChange={e => { e.persist(); setEarthQuakeParams({...earthQuakeParams, maxradiuskm: parseFloat(e.target.value)})}} type="number" name="radius" id="radius" min='0' className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
                  Longitude
                </label>
                <div className="mt-1">
                  <input value={longitude} onChange={e => { e.persist(); setEarthQuakeParams({...earthQuakeParams, longitude: parseFloat(e.target.value)})}} type="number" name="longitude" id="longitude" min='-180' max='180' className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
                  Latitude
                </label>
                <div className="mt-1">
                  <input value={latitude} onChange={e => { e.persist(); setEarthQuakeParams({...earthQuakeParams, latitude: parseFloat(e.target.value)})}} type="number" name="latitude" id="latitude" min='-90' max='90' className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}