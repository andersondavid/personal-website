import Image from "next/image";
import styled from 'styled-components';

import logo from '../../public/images/david.svg'

const Header = styled.header`
  width: 100%;
  height: 75px;
  padding: 5px 10px;
  position: relative;
`

const LogoIcon = styled(Image)`
  height: 100%;
`

export default function HeaderComponent() {
  return(
    <Header>
      <LogoIcon src={logo} height={'65px'} width={'65px'} />
      <nav></nav>
    </Header>    
  )
}