import React from 'react'
import { HeaderWrapper } from './index.styled';
import Heading from '../../../components/Heading';
import Button from '@mui/material/Button';

type PropType = {
  name: string;
  onLogout: () => void;
}

const Header = ({ name, onLogout }: PropType) => {
  return (
    <HeaderWrapper>
      <Heading>{name}</Heading>
      <Button variant="contained" sx={{ m: 1, width: '26ch' }} onClick={onLogout}>Logout</Button>
    </HeaderWrapper>
  )
}

export default Header
