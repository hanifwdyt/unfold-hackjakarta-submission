import Banner from '@/components/Banner';
import MenuForm from '@/components/Form';
import Header from '@/components/Header';
import { getMenuById } from '@/lib/menu';
import React from 'react';

export default async function Page({ params }) {
  const { id } = params;
  const data = await getMenuById(id)

  const menu = data[0]
  const initialValues = {
    kategori: menu.kategori,
    title: menu.title,
    caraMasak: menu.caraMasak,
    bahan: menu.bahan
  };

  return (
    <>
      <div className=''>
        <Header title="Create new menu with AI" route="/menu" />
      </div>
      <div>
        <Banner />
      </div>
      <div className=''>
        <MenuForm initialValues={initialValues} id={id} />
      </div>
    </>
  );
}
