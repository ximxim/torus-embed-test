import type { NextPage } from 'next'
import { useCallback } from 'react'
import Torus from "@toruslabs/torus-embed";

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const handleConnectTorus = useCallback(async () => {
    if (typeof window !== 'undefined') {
      const torus = new Torus();
      await torus.init({
        whiteLabel: {
          theme: {
            isDark: false,
            colors: {
              torusBrand1: "#282c34",
            },
          },
          logoDark: "https://tkey.surge.sh/images/Device.svg", // Dark logo for light background
          logoLight: "https://tkey.surge.sh/images/Device.svg", // Light logo for dark background
          topupHide: false,
          featuredBillboardHide: true,
          disclaimerHide: true,
          defaultLanguage: "en",
        },
      });
      await torus.login();
    }
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={handleConnectTorus}>
          Connect Torus
        </button>
      </main>
    </div>
  )
}

export default Home
