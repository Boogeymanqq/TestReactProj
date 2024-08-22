import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  color: ${(props) => (props.color ? 'rgb(103, 119, 136)' : '#000')};
`;

export const TypographyStyledText = ({
  children,
  fontWeight = 'normal',
  paddingY = 0,
  textAlign = 'center',
  color,
  paddingTop,
}) => {
  return (
    <StyledTypography
      color={color}
      fontWeight={fontWeight}
      paddingY={paddingY}
      textAlign={textAlign}
      paddingTop={paddingTop}>
      {children}
    </StyledTypography>
  );
};
