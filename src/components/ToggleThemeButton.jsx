import { Button } from 'antd';
import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi'; // Corrected import statements

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className='toggle-theme-btn'>
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiSun /> : <HiMoon />} {/* Corrected icon usage */}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
