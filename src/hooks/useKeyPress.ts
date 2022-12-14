import React from 'react';

/**
 * Find out if a specific key is being pressed
 *
 * @param {string} targetKey The target key name
 * @returns {boolean} Whether the targeted key is pressed or not
 */
export const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = React.useState(false);

  const handleDown = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const handleUp = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);

    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
  }, []);

  return keyPressed;
};
