import config from "../config";
import { RouletteI } from "../types/Roulette";
const rouletteApi = config.api + "/roulette";
const postRoulette = async (token: string, roulette: RouletteI) => {
  const res = await fetch(rouletteApi, {
    method: "POST",
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(roulette),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getRouletteById = async (token: string, id: string | number) => {
  const res = await fetch(`${rouletteApi}/${id}`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getRouletteByUserId = async (token: string) => {
  const res = await fetch(rouletteApi + "/byUser", {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const putRouletteById = async (
  token: string,
  id: string | number,
  roulette: RouletteI
) => {
  const res = await fetch(`${rouletteApi}/${id}`, {
    method: "PUT",
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(roulette),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const deleteRoulette = async (token: string, id: string | number) => {
  const res = await fetch(`${rouletteApi}/${id}`, {
    method: "DELETE",
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

export default {
  postRoulette,
  getRouletteById,
  getRouletteByUserId,
  putRouletteById,
  deleteRoulette,
};
