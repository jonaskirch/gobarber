import React from 'react';
import { Link } from 'react-router-dom';
import Notifcation from '../Notifications';
import logo from '~/assets/logo_purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarb er" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifcation />
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="asdasd"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
