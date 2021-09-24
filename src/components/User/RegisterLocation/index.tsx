import RegisterLocation from "./RegisterLocation";
type Address = {
  [key: string]: string;
};
export interface LocationResult {
  address: Address;
  address_name: string;
  address_type: string;
  road_address: null;
  x: string;
  y: string;
}

export const getLocationName = (location: string) => {
  const parseLocation = location.split(" ").reverse();
  return { cityName: parseLocation[1], dongName: parseLocation[0] };
};

export default RegisterLocation;
