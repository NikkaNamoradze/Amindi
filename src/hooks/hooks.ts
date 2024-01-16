import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { addWeather } from '../store/slices/savedSlice';
import { WeatherResponse } from '../types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector


interface UseApiConfig {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  config?: AxiosRequestConfig;
}

export const useApi = <T extends WeatherResponse>(config: UseApiConfig) => {
  const [data, setData] = useState<T | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: config.method || 'get',
          url: config.url,
          ...config.config,
        });
        setData(response.data as T);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [config]);

  const saveData = () => {
    if (data) {
      // Using type assertion to tell TypeScript that data is not null
      dispatch(addWeather((data as WeatherResponse).name as string));
    }
  };

  return { data, saveData };
};
