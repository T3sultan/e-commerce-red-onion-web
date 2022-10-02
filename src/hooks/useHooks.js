import { useEffect, useState } from "react";

const useHooks = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/service")
      .then(res => res.json())
      .then(data => setServices(data));
  }, [services]);
  return [services, setServices];
};

export default useHooks;
