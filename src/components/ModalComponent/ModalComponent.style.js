import { Box } from '@mui/material';
import styled from 'styled-components';

export const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 24px;
  padding: 15px;
`;
