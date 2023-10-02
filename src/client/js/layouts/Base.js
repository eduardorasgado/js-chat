import React from 'react';
import Navbar from '../components/Navbar';

const _getDisplayName = (Component) => 
  Component.displayName || Component.name || 'Component';

export const withBaseLayout = (Component, navbarProps) => props => {
  return (
    <>
      <Navbar {...navbarProps} view={_getDisplayName(Component)} />
      <Component {...props} />
    </>
  )
}