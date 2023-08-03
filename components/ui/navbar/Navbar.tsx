import Image from 'next/image';
import header_logo from '../../../public/images/header_logo.png';

const links = [
  {
    id: 1,
    url: '/about',
    text: 'ABOUT US',
  },
  {
    id: 2,
    url: '/',
    text: 'EYE EXAMS',
  },
  {
    id: 3,
    url: '/',
    text: 'SPECIALTY EYE CARE',
  },
  {
    id: 4,
    url: '/',
    text: 'BRANDS',
  },
  {
    id: 5,
    url: '/',
    text: 'ORDER CONTACTS',
  },
  {
    id: 6,
    url: '/',
    text: 'APPOINTMENTS',
  },
];

const navWrapper = (
  <div className='w-full hidden md:block'>
    <ul className='flex flex-row md:text-sm lg:text-base md:px-11 md:py-5'>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <>
            <li key={id} className='grow'>
              <a href={url}>{text}</a>
              <span className='pl-2'>|</span>
            </li>
          </>
        );
      })}
    </ul>
  </div>
);

const logoWrapper = (
  <div className='p-6'>
    <Image src={header_logo} alt='logo' width={110} height={50} />
  </div>
);

export const Navbar = () => {
  return (
    <div className='max-w-screen-2xl mx-auto h-30 flex md:flex-col lg:flex-row items-center bg-blue-950 fixed top-0 left-0 right-0 z-50'>
      {logoWrapper}
      {navWrapper}
    </div>
  );
};
