import React, { createContext } from 'react'
// import ComponentA from './contextAPI/ComponentA'
import Component1 from './useContext/Component1';

const data = createContext();
const gender = createContext();

const App = () => {


  return (
    <div>
      <data.Provider value={'Shashank Tripathi'}>
        <gender.Provider value={'Male'}>
          {/* <ComponentA /> */}
          <Component1 />
        </gender.Provider>
      </data.Provider>
    </div>
  )
}

export default App
export { data, gender };