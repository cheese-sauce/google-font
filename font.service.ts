const apiKey = 'AIzaSyC_RgpPbpNDPSSaBHXMr5XkzKgCm4S9Bys';


export function getFonts() {
  node_modules['axios'].get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
    .then(function (response) {
      // handle success
      console.log(response);
      return response.data.items;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
