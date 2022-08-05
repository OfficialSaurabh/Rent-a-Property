import React, { useState,   } from 'react';

import {
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
// import context

const ResourceDropdown = () => {
//   const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const resources = [
    {
      value: 'Rent resource',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
  ];

  return (
    <Menu as='div' className='w-full relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <div>
          <div className='text-sm text-gray-900 font-medium py-1 text-left '>Resources</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu w-48'>
        {resources.map((resource, index) => {
          return (
            <Menu.Item
              as='li'
            //   onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer  hover:text-indigo-700 transition'
            >
              {resource.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
    
  );
};

export default ResourceDropdown;
