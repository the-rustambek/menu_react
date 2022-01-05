import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from "./data";

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);

  const filterItems = (category) =>{
    const newItems = items.filter((item) =>item.category === category);
    setMenuItems(newItems);
  };

  return <main>
    <section className='menu section' >
      <div className='title' >
        <h2>Our Menu</h2>
        <div className='underline'></div>


      </div>
      <Categories filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>
}

export default App;