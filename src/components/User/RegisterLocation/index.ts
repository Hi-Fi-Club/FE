import LocationClickResult from "./LocationClickResult";
import LocationInput from "./LocationInput";
import LocationSearchResult from "./LocationSearchResult";
import LocationSubmit from "./LocationSubmit";
export { LocationClickResult, LocationInput, LocationSearchResult, LocationSubmit };

export const getLocationName = (location: string) => {
  const parseLocation = location.split(" ").reverse();
  return { cityName: parseLocation[1], dongName: parseLocation[0] };
};
