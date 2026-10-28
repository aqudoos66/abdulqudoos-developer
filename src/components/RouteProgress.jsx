// src/components/RouteProgress.jsx
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteProgress() {
  const { pathname } = useLocation();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    setVisible(true);
    setWidth(12);
    timers.current.push(setTimeout(() => setWidth(72), 80));
    timers.current.push(setTimeout(() => setWidth(100), 380));
    timers.current.push(setTimeout(() => setVisible(false), 560));
    timers.current.push(setTimeout(() => setWidth(0), 900));

    return () => timers.current.forEach(clearTimeout);
  }, [pathname]);

  return (
    <div
      className={`route-progress${visible ? ' show' : ''}`}
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}