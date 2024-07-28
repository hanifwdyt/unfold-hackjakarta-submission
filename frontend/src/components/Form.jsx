"use client";

import { sanomatSans } from '@/config/fontConfig';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createMenu, updateMenu } from '@/lib/menu'
import { genAI, update } from '@/server/form';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const visitDummy = [
  {
    menu: 'Nasi',
    search: '5k'
  },
  {
    menu: 'Ayam',
    search: '15k'
  },
  {
    menu: 'Tahu',
    search: '15k'
  },
  {
    menu: 'Ayam Goreng',
    search: '15k'
  },
  {
    menu: 'Semarang',
    search: '10k'
  },
  {
    menu: 'Tempe',
    search: '5k'
  },
  {
    menu: 'Bacem',
    search: '15k'
  },
]
const MenuForm = ({ initialValues, id }) => {
  const [dataResult, setDataResult] = useState([])
  const [chooseData, setChooseData] = useState({})
  const validationSchema = Yup.object({
    kategori: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    caraMasak: Yup.string().required('Required'),
    bahan: Yup.string().required('Required')
  });
  const router = useRouter()

  const updateData = async () => {
    if (id) {
      const dataToUpdate = {
        "title": chooseData.title,
        "description": chooseData.description,
        "caraMasak": initialValues.caraMasak,
        "bahan": initialValues.bahan,
        "kategori": initialValues.kategori,
        "price": 39500,
        "discountedPrice": 10000,
        "aiEnhanced": true
      }
      const resData = await update(id, dataToUpdate)
      router.push('/menu')
    }
  }

  const createData = async () => {
    const dataToCreate = {
      "title": chooseData.title,
      "description": chooseData.description,
      "caraMasak": initialValues.caraMasak,
      "bahan": initialValues.bahan,
      "kategori": initialValues.kategori,
      "price": 39500,
      "discountedPrice": 10000,
      "aiEnhanced": true
    }
    const resData = await create(dataToCreate)
    router.push('/menu')
  }

  const handleSubmit = () => {
    if (id) {
      updateData()
    } else {
      createData()
    }
  }


  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const data = await genAI(values)
      setDataResult(data)
      resetForm();
    } catch (error) {
      console.error('Error processing menu:', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    dataResult.length === 0 ?
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form className='px-3 my-8'>
            <h2 className={`${sanomatSans.className} font-bold`}>01. Informasi Nama Menu</h2>
            <div className='my-3'>
              <div className='flex'>
                <label className={`${sanomatSans.className}`} htmlFor="kategori">Kategori</label>
                <span className='text-red-500'>*</span>
              </div>
              <Field type="text" id="kategori" name="kategori" placeholder="Masukkan kategori" className="p-2 w-full rounded-full mt-1 mb-2" />
              <ErrorMessage className="text-xs text-red-500" name="kategori" component="div" />
            </div>

            <div className='my-3'>
              <div className='flex'>
                <label className={`${sanomatSans.className}`} htmlFor="title">Nama Menu</label>
                <span className='text-red-500'>*</span>
              </div>
              <Field type="text" id="title" name="title" placeholder="Masukkan nama menu" className="p-2 w-full rounded-full mt-1 mb-2" />
              <ErrorMessage className="text-xs text-red-500" name="title" component="div" />
            </div>

            <div className='my-3'>
              <div className='flex'>
                <label className={`${sanomatSans.className}`} htmlFor="caraMasak">Cara Membuat</label>
                <span className='text-red-500'>*</span>
              </div>
              <Field type="text" id="caraMasak" name="caraMasak" placeholder="Masukkan cara/proses pembuatan masak." className="p-2 w-full rounded-full mt-1 mb-2" />
              <ErrorMessage className="text-xs text-red-500" name="caraMasak" component="div" />
            </div>

            <div className='my-3'>
              <div className='flex'>
                <label className={`${sanomatSans.className}`} htmlFor="bahan">Bahan-Bahan</label>
                <span className='text-red-500'>*</span>
              </div>
              <Field type="text" id="bahan" name="bahan" placeholder="Contoh: Nasi, Tahu, Tempe dll" className="p-2 w-full rounded-full mt-1 mb-2" />
              <ErrorMessage className="text-xs text-red-500" name="bahan" component="div" />
            </div>

            <button type="submit" className='w-full bg-green-500 py-2 text-white rounded-full mt-4' disabled={formik.isSubmitting}>
              Buat Menu
            </button>
          </Form>
        )}
      </Formik>
      :
      <>
        <ul className='bg-[#f6f6f6] h-fit p-4'>
          <li className='flex gap-1'>
            <h5 className={`${sanomatSans.className} font-bold`}>
              Nama Menu:
            </h5>
            <span>{initialValues.title}</span>
          </li>
          <li className='flex gap-1'>
            <h5 className={`${sanomatSans.className} font-bold`}>
              Kategori:
            </h5>
            <span>{initialValues.kategori}</span>
          </li>
          <li className='flex gap-1'>
            <h5 className={`${sanomatSans.className} font-bold`}>
              Deskripsi:
            </h5>
            <span>{initialValues.deskripsi}</span>
          </li>
        </ul>
        <ul className='flex flex-col px-3 gap-2'>
          {dataResult.map((item, index) => (
            <li key={index} onClick={() => setChooseData(item)} className='cursor-pointer'>
              <div className='flex gap-4 p-2'>
                <h5 className={`${sanomatSans.className} text-xl font-bold`}>{`Pilihan Penulisan ${index + 1}`}</h5>
                <Image
                  src="/assets/images/resources/icon-ai.png"
                  alt="icon ai"
                  width={23}
                  height={23}
                  className='w-fit h-fit'
                />
              </div>
              <div className='p-3 bg-[#c5c5c5] rounded-lg h-52 relative'>
                <div className='absolute min-h-[100px] bg-white border top-0 right-0 w-full h-fit rounded-lg py-1 px-2 flex justify-between gap-4'>
                  <div className='min-w-[58px] min-h-[58px] w-[58px] h-[58px] relative'>
                    <Image
                      src="/assets/images/resources/placeholder.png"
                      fill
                      alt="placeholder"
                    />
                  </div>
                  <div>
                    <h2 className={`${sanomatSans.className} font-bold`}>{item.title}</h2>
                    <p className={`${sanomatSans.className} text-gray-500 line-clamp-2 text-xs my-1`}>{item.description}</p>
                    <h5 className={`${sanomatSans.className} text-sm`}>Rp 30,000</h5>
                  </div>
                  <div className={`w-fit h-fit min-w-5 relative min-h-5 rounded-full border-2 p-1 ${item.title === chooseData.title ? `bg-green-500` : 'bg-green-50'}`}>
                  </div>
                </div>
                <div className='flex absolute bottom-4 left-4'>
                  <ul className='flex flex-wrap gap-1'>
                    {visitDummy.map((item, index) => (
                      <li key={index} className='bg-white rounded-lg p-1 text-xs'>
                        <span className={`${sanomatSans.className} font-bold mr-1`}>
                          {item.menu}
                        </span>
                        <span className=''>{`${item.search} search`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='my-12 mb-36 flex w-full justify-center px-3'>
          <button onClick={() => handleSubmit()} className={`${sanomatSans.className} bg-green-500 text-white w-full rounded-full py-4 text-lg`}>
            Pilih dan Ganti Menu
          </button>
        </div>
      </>
  );
};

export default MenuForm;
