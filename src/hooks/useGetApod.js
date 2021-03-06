import { useEffect, useState } from 'react';

const useGetApod = (date) => {
  const [isGetApodLoading, setIsGetApodLoading] = useState(false);
  const [isGetApodLoaded, setIsGetApodLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!date) return;

    const getApod = async () => {
      var key = "iVav1CfgYS95QH5Sqh7DatFQef09QQxLFPqBBRZm"
      setIsGetApodLoading(true);

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
      );
      const data = await response.json();

      setIsGetApodLoading(false);
      setIsGetApodLoaded(true);
      setData(data);
    };

    getApod();
  }, [date]);

  return { isGetApodLoading, isGetApodLoaded, data };
};

export default useGetApod;
