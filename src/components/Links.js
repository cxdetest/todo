import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';

const Links = () => {
  return (
    <section className='links'>
      <a
        href='https://github.com/cxdetest/todo'
        target='_blank'
        rel='noreferrer '
      >
        <BsGithub />
      </a>
      <a href='https://cxde-test.com/' target='_blank' rel='noreferrer '>
        <GiWorld />
      </a>
    </section>
  );
};

export default Links;
