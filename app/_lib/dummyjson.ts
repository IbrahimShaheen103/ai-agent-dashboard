import { cacheLife } from "next/cache";

import type { User } from "@/app/_lib/types";

const API_URL = "https://dummyjson.com";

type DummyJsonUser = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  company: {
    name: string;
    department: string;
    title: string;
  };
};

type DummyJsonUsersResponse = {
  users: DummyJsonUser[];
  total: number;
  skip: number;
  limit: number;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function isDummyJsonUser(value: unknown): value is DummyJsonUser {
  if (!isRecord(value) || !isRecord(value.address) || !isRecord(value.company)) {
    return false;
  }

  return (
    typeof value.id === "number" &&
    typeof value.firstName === "string" &&
    typeof value.lastName === "string" &&
    typeof value.username === "string" &&
    typeof value.email === "string" &&
    typeof value.phone === "string" &&
    typeof value.image === "string" &&
    typeof value.address.address === "string" &&
    typeof value.address.city === "string" &&
    typeof value.address.state === "string" &&
    typeof value.address.postalCode === "string" &&
    typeof value.address.country === "string" &&
    typeof value.company.name === "string" &&
    typeof value.company.department === "string" &&
    typeof value.company.title === "string"
  );
}

function isDummyJsonUsersResponse(value: unknown): value is DummyJsonUsersResponse {
  return (
    isRecord(value) &&
    Array.isArray(value.users) &&
    value.users.every(isDummyJsonUser) &&
    typeof value.total === "number" &&
    typeof value.skip === "number" &&
    typeof value.limit === "number"
  );
}

function toUser(user: DummyJsonUser): User {
  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    username: user.username,
    email: user.email,
    image: user.image,
    phone: user.phone,
    address: {
      street: user.address.address,
      city: user.address.city,
      state: user.address.state,
      zipcode: user.address.postalCode,
      country: user.address.country,
    },
    company: {
      name: user.company.name,
      department: user.company.department,
      title: user.company.title,
    },
  };
}

async function request(path: string): Promise<unknown> {
  const response = await fetch(`${API_URL}${path}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`DummyJSON request failed (${response.status}).`);
  }

  return response.json();
}

export async function getUsers(): Promise<User[]> {
  "use cache";
  cacheLife("hours");

  const data = await request("/users");

  if (!isDummyJsonUsersResponse(data)) {
    throw new Error("DummyJSON returned an unexpected users response.");
  }

  return data.users.map(toUser);
}

export async function getUser(id: number): Promise<User | null> {
  "use cache";
  cacheLife("hours");

  const data = await request(`/users/${id}`);

  return isDummyJsonUser(data) ? toUser(data) : null;
}
