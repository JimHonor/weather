import { NowWeatherState } from "../types/weather.type";

import { QWEATHER_API_KEY, QWEATHER_API_PUBLIC_KEY } from "../../private";
import { getSignature } from "./signature";

// 实时天气
const BASE_NOW_URL = `https://api.qweather.com/v7/weather/now?`;

type GetNowWeather = (params?: {
  location: string;
}) => Promise<NowWeatherState>;

export const getNowWeather: GetNowWeather = async (
  params = { location: "101010100" }
) => {
  // let url: string = BASE_NOW_URL;
  // for (const param in params) {
  //   if (Object.prototype.hasOwnProperty.call(params, param)) {
  //     const value = params[param as keyof typeof params];
  //     url = `${url}&${param}=${value}`;
  //   }
  // }
  const parameters = {
    location: params.location,
    username: QWEATHER_API_PUBLIC_KEY,
    t: "1590123123",
    w: " ",
  };

  const sign = getSignature(parameters, QWEATHER_API_KEY);

  const url = `${BASE_NOW_URL}sign:${sign}`;

  const res = await fetch(url);
  const data = await res.json();
  const { code, now } = data;

  if (code === "200") {
    return now;
  } else {
    console.error("Failed to get now weather.");
  }
};
