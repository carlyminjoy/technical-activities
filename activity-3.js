const getMegaportLocations = async () => {
  const response = await fetch(
    "https://api.megaport.com/v2/locations"
  );
  if (!response.ok) {
    const errMsg = `Could not retrieve locations: ${response.status}`;
    throw new Error(errMsg);
  }

  return await response.json();
};
