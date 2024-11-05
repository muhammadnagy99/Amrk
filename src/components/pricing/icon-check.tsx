import React from 'react';
import RightCheckIcon from '../assets/right-check-icon';
import WrongCheckIcon from '../assets/wrong-check-icon';

interface IconCheckProps {
  isCorrect: boolean;
}

const IconCheck: React.FC<IconCheckProps> = ({ isCorrect }) => {
  return isCorrect ? <RightCheckIcon /> : <WrongCheckIcon />;
};

export default IconCheck;
