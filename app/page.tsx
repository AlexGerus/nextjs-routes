'use client'
// `app/page.tsx` is the UI for the `/` URL

import React from 'react';

async function getData() {
  const res = await fetch('https://seanallen-course-backend.herokuapp.com/swiftui-fundamentals/appetizers');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  const [dishes, setDish] = React.useState([data.request]);

  function addItem() {
    const newDish = {
      id: 1,
      name: 'a'
    };
    setDish(prevState => [...prevState, newDish]);
  }

  const dishesElements = dishes.map(dish => (
    <li key={dish.id}>
      { dish.name }
    </li>
  ))

  return (
    <>
      <h1>Hello, Home page!</h1>
      <button>Add new dish</button>
      <ul>
        {dishesElements}
      </ul>
    </>
  );
}