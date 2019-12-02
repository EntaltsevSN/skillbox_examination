import Unsplash, { toJson } from 'unsplash-js';


export let unsplash = new Unsplash({
  accessKey: "6c459ce94e7b19512f7a2b4058911a92e1362eb4839c9163cec19007f7d40a40",
  secret: "3655431dea38db115204f65b0dd2406c172d2459fb0df55404a3458c48691c07",
  callbackUrl: "http://entaltsevsn.tmweb.ru",
  timeout: 500
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

export const UnsplashAuth = () => {
  const code = location.search.split('code=')[1];

  if (code) {
    unsplash.auth.userAuthentication(code)
      .then(toJson)
      .then(json => {
        unsplash.auth.setBearerToken(json.access_token);
      });
  }
}

export default unsplash;