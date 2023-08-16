// Params: url (string)
// output: json object
// This function will make a get request to the passed url and returns the json.
export const fetchData = async (url) => {
  const data = fetch(url)
    .then((response) => response.json())
    .then((json) => json);

  return data;
};
