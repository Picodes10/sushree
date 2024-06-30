import React from "react";
import { useState, Suspense } from 'react';
import "./Header.css"

import { Canvas } from '@react-three/fiber'


const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <div className="home_app" id="home">
      <div className="info">
        <h1 className="h1">I'm Sushree</h1>
        <p className="tag">
          Designer & Developer.
        </p>
      </div>
      <Canvas>
        <Suspense fullback={null}>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Header;
