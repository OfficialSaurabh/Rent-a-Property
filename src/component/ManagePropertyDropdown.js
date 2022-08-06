import React, { useState,   } from 'react';

import {
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
// import context

const ManagePropertyDropdown = () => {
//   const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const manageProperty = [
    {
      value: 'Rent Property',
    },
    {
      value: 'View Property',
    },
    {
      value: 'Manage Property',
    },
  ];

  return (
    <Menu as='div' className=' w-full relative '>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className=' flex  items-centerpx-3 py-2 '
      >
        <div>
          <div className='text-sm text-gray-900 font-medium py-1 text-left '>Manage Property</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu w-48'>
        {manageProperty.map((property, index) => {
          return (
            <Menu.Item
              as='li'
            //   onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer  hover:text-purple-700 transition'
            >
              {property.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
    
  );
};

export default ManagePropertyDropdown;
