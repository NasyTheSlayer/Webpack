import { useState } from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import photoPNG from '@/assets/photoPNG.png';
import photoJPG from '@/assets/photoJPG.jpg';
import PhotoSVG from '@/assets/photoSVG.svg';

// TREE SHAKING
function TODO() {
  TODO2()
}

function TODO2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    // setCount(prev => prev + 1)
    TODO();
  }

  // TODO(51511)

  // if(__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>
  // }

  // if(__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>
  // }

  // if(__ENV__ === 'development') {
  //   // addDevtools()
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} src={photoPNG} alt="#" />
        <img width={100} src={photoJPG} alt="#" />
      </div>
      <div>
        grgergefefrrg
        <PhotoSVG color={'lightblue'} width={100} height={100} />
      </div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>inc</span>
      </button>
      <About />
    </div>
  );
};