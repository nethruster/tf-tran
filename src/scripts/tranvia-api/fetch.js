import {DEFAULT_API_URI} from 'vars'

export default function(uri = DEFAULT_API_URI) {
  return fetch(uri).then(response => {
    if (!response.ok) {
      throw "Response was not OK";
    }
    return response.json();
  });
}
