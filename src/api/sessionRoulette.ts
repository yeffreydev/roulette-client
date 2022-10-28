import config from "../config";
import { SessionRouletteI } from "../types/SessionRoulette";
const sessionRouletteApi = config.api + "/session-roulette";

const postSessionRoulette = async (token: string, sr: SessionRouletteI) => {
  const res = await fetch(sessionRouletteApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(sr),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getSessionRouletteById = async (token: string, id: string | number) => {
  const res = await fetch(`${sessionRouletteApi}/${id}`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getSessionsRouletteByUserId = async (token: string) => {
  const res = await fetch(`${sessionRouletteApi}/byUser`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const getSessionsRouletteByRouletteId = async (
  token: string,
  id: string | number
) => {
  const res = await fetch(`${sessionRouletteApi}/byRouletteId/${id}`, {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const putSessionRoulette = async (
  token: string,
  sr: SessionRouletteI,
  id: string | number
) => {
  const res = await fetch(`${sessionRouletteApi}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(sr),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const deleteSessionRoulette = async (token: string, id: string | number) => {
  const res = await fetch(`${sessionRouletteApi}/${id}`, {
    method: "DELETE",
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

export default {
  postSessionRoulette,
  getSessionRouletteById,
  getSessionsRouletteByUserId,
  getSessionsRouletteByRouletteId,
  putSessionRoulette,
  deleteSessionRoulette,
};
