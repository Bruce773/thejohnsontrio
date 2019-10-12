import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import breakpoint from 'styled-components-breakpoint';

export const BioHeader = styled(Typography)`
  && {
    margin: auto;
    font-size: 25px;
    ${breakpoint('tablet')`
      font-size: 2vw;
      margin-top: 32%;
    `}
  }
`;
