import React from 'react';
import CommandBar from 'CommandBar';
import UmbrellaIcon from 'icons/UmbrellaIcon.jsx';

const searchItems = [
  { icon: <UmbrellaIcon />, label: 'label 1', link: '/' },
  { icon: <UmbrellaIcon />, label: 'label 2', link: '/' },
  { icon: <UmbrellaIcon />, label: 'label 3', link: '/' },
];

const Cmdk = () => (
  <>
    <CommandBar
      caption={'Caption of dialog'}
      isFixed={true}
      items={searchItems}
      placeholder={'Type something...'}
    />
  </>
);

export default Cmdk;
