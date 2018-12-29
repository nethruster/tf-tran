export default function (uri = "/api/tranvia") {
  return fetch(uri)
    .then(resp => {
      if (!resp.ok) {
        throw "Bad response"
      }
      return resp.json()
    })
}
