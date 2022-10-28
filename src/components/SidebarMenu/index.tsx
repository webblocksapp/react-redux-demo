import React from 'react';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@components';
import { MenuItem as MenuItemType } from '@interfaces';
import { NavLink } from 'react-router-dom';
import './index.css';

export interface SidebarMenuProps {
  items: MenuItemType[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  return (
    <MenuList>
      {items.map((item, i) => (
        <NavLink
          key={i}
          to={item.route}
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
        >
          <MenuItem>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        </NavLink>
      ))}
    </MenuList>
  );
};
