import React from 'react'
import {Formik, Form,Field, ErrorMessage} from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';

const CreatePost = () => {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

// const validation = Yup.object().shape({
//     title: Yup.string().required(),
//     postText: Yup.string().required(),
//     username: Yup.string().min(3).max(15).required,
// })
    const onsubmit = (data) =>{
        axios.post("http://localhost:3001/posts",data).then(response => {
            console.log("It worked")
        })
        console.log(data)
    }


  return (
    <div className=' flex flex-col bg-blue-200 '>
    <div className=' justify-between items-center mx-auto '>
    <Formik 
    initialValues={initialValues}
     onSubmit={onsubmit}
    //   validationSchema={validation}
      >
        <Form className='flex-col flex justify-between items-start border
        p-2 border-x-blue-400 border-y-blue-900 bg-yellow-200'>
        <label className='flex justify-between '> TITLE:</label>
        <ErrorMessage name='title' component="span" />
            <Field className ="flex justify-between items-start space-y-2"
            name='title'
             placeholder ="Title" />
       
        <label className='flex justify-center items-center'> POST:</label>
        <ErrorMessage name='title' component="span" />

            <Field className='flex justify-center items-center'
            name='postText'
             placeholder ="POST" />
       
        <label> USERNAME:</label>
        <ErrorMessage name='title' component="span" />
        <Field 
            name='username'
             placeholder ="username" />
             <button type='submit'>Submit</button>
        </Form>
        
    </Formik>
    </div>
    </div>
    
  )
}

export default CreatePost