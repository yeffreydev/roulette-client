import config from "../config";
import { NumberRouletteI } from "../types/NumberRoulette";
const numberRouletteApi = config.api + "/number-roulette";

const postNumberRoulette = async (token: string, nr: NumberRouletteI) => {
  const res = await fetch(numberRouletteApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(nr),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getNumberRouletteById = async (token: string, id: string | number) => {
  const res = await fetch(`${numberRouletteApi}/${id}`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getNumberssRouletteByUserId = async (token: string) => {
  const res = await fetch(`${numberRouletteApi}/byUser`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getNumbersRouletteByRouletteId = async (
  token: string,
  id: string | number
) => {
  const res = await fetch(`${numberRouletteApi}/byRouletteId/${id}`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};
const getNumbersRouletteBySessionId = async (
  token: string,
  id: string | number
) => {
  const res = await fetch(`${numberRouletteApi}/bySessionId/${id}`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const putNumberRoulette = async (
  token: string,
  nr: NumberRouletteI,
  id: string | number
) => {
  const res = await fetch(`${numberRouletteApi}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(nr),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const deleteNumberRoulette = async (token: string, id: string | number) => {
  const res = await fetch(`${numberRouletteApi}/${id}`, {
    method: "DELETE",
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

export default {
  postNumberRoulette,
  getNumberRouletteById,
  getNumberssRouletteByUserId,
  getNumbersRouletteByRouletteId,
  getNumbersRouletteBySessionId,
  putNumberRoulette,
  deleteNumberRoulette,
};
