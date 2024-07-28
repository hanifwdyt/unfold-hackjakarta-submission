"use client";

import { sanomatSans } from '@/config/fontConfig';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createMenu, updateMenu } from '@/lib/menu'

const MenuForm = ({ initialValues, id }) => {
  console.log(id)
  const validationSchema = Yup.object({
    kategori: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    caraMasak: Yup.string().required('Required'),
    bahan: Yup.string().required('Required')
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values)
    try {
      if (id) {
        const data = await updateMenu(id, values);
        console.log(data)
      } else {
        const dataa = await createMenu(values);
        console.log(dataa)
      }
      console.log('Menu processed successfully:', values);
      resetForm();
    } catch (error) {
      console.error('Error processing menu:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
  );
};

export default MenuForm;
