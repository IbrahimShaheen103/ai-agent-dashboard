export type Address = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
};

export type Company = {
  name: string;
  department: string;
  title: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  image: string;
  address: Address;
  phone: string;
  company: Company;
};
