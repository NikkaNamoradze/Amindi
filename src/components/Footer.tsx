import React from 'react';

interface IFooter {
  theme: boolean;
}

const Footer: React.FC<IFooter> = ({ theme }) => {
  const footerClass = `bg-${theme ? '#1F2937' : 'white'} py-4 text-center absolute bottom-0 w-full rounded-t-lg p-3`;

  return (
    <footer className={footerClass}>
      <p className={`text-${theme ? 'white' : 'gray-600'}`}>Created by Nikka Namoradze</p>
    </footer>
  );
};

export default Footer;
