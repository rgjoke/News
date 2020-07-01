import React from 'react';

import Filter from './Filter';
import Autorized from './Autorized';

function Header() {
  return (
    <div>
      <Autorized />
      <Filter />
    </div>
  );
}

export default Header;
