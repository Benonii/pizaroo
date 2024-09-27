import Button from '@mui/material/Button';
import Image from "next/image";
import styles from "./page.module.css";

import RootLayout from './layout';

export default function Home() {
  const headerContent = (
    <div className='flex'>
      <div className="flex items-center justify-center space-x-4">
        <Button variant="outlined" className='border border-gray2 text-gray4'>Login</Button>
        <Button variant="outlined" className='border border-gray2 text-gray4'>Sign up</Button>
      </div>
    </div>
  )
  return (
    <RootLayout headerContent={headerContent}>
      <div></div> 
    </RootLayout>
  );
}
