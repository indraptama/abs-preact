// Helper for get Data title from WP-API

import axios from 'axios';

const getData = (postSlug) => (
  axios.get('http://localhost:8080/wp-json/wp/v2/'+postSlug)
);
