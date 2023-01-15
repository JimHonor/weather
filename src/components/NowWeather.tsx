import { useEffect, useState } from "react";
import { getNowWeather } from "../api/qweather";

import { NowWeatherState } from "../types/weather.type";

import styled from "@emotion/styled";
import { Box, Text } from "./ui/styled";

export default function NowWeather() {
  const [city, setCity] = useState({ name: "北京市" });

  const [weather, setWeather] = useState<NowWeatherState>(
    {} as NowWeatherState
  );

  useEffect(() => {
    getNowWeather().then((value) => {
      setWeather(value);
    });
  }, []);

  const weatherInfo = [
    {
      name: weather.windDir,
      value: weather.windScale,
    },
    {
      name: "相对湿度",
      value: weather.humidity,
    },
    {
      name: "体感温度",
      value: weather.feelsLike,
    },
  ];

  return (
    <WeatherInfo>
      <Box justifyContent="space-between" alignItems="center">
        <Text fontSize="20px">{city.name}</Text>
        <Text color="gray">{weather.obsTime}</Text>
      </Box>
      <Box column margin="1.5rem 0" textAlign="center">
        <Text fontSize="32px">{weather.temp}°</Text>
        <span>{weather.text}</span>
      </Box>
      <WeatherDetails>
        {weatherInfo.map((info, index) => (
          <Box key={index} column>
            <span>{info.name}</span>
            <Text color="#616161">{info.value}</Text>
          </Box>
        ))}
      </WeatherDetails>
    </WeatherInfo>
  );
}

const WeatherInfo = styled.div`
  background-image: linear-gradient(to top right, #dde4fb, #fde5cd);
  padding: 20px;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  max-width: 640px;
`;

const WeatherDetails = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: 20px;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
`;
