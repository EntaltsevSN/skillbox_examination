import Unsplash, { toJson } from 'unsplash-js';


const unsplash = new Unsplash({
  accessKey: "6c459ce94e7b19512f7a2b4058911a92e1362eb4839c9163cec19007f7d40a40",
  headers: {
    "X-Custom-Header": "foo"
  },
  timeout: 500
});

export default unsplash;