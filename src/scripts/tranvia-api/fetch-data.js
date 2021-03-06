import { DEFAULT_API_URI } from "vars";

export default function fetchData(uri = DEFAULT_API_URI) {
  return fetch(uri).then(response => {
    if (!response.ok) {
      if (response.status === 502) {
        throw "MetroTenerife failed";
      }

      throw "Response was not OK";
    }
    return response.json();
  });
}
