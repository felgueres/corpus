import { useEffect } from 'react'

export default function useEscape (onEscape) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27)
        onEscape();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
}
