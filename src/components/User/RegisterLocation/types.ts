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
