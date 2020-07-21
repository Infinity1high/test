import fetch from 'isomorphic-fetch';
import { apiUrl, checkResponse } from '../services/apiUrl'; // there is no file declared as apiUrl

/**
 * Function to fetch cases based on region
 * @param country
 * @returns {*}
 */
export function getCases(country) {
  //function apiUrl is not declaired
  let url = `${apiUrl()}/cases`;

  if (country)
    url += `?country=${country}`;

  return fetch(url, {
    method     : 'POST', //maybe we need to use get method for this purpose?
    headers    : {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).then(checkResponse); // checkResponse - no such function declared in modules
}
