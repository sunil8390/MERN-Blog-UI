import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  Button,
} from "@chakra-ui/react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function AddPost() {
  const [editorData, seteditorData] = useState(null);

  //   function validateName(value) {
  //       let error
  //       if (!value) {
  //         error = 'Name is required'
  //       } else if (value.toLowerCase() !== 'naruto') {
  //         error = "Jeez! You're not a fan 😱"
  //       }
  //       return error
  //     }

  console.log("editorData onit", editorData);

  const OnSubmit = (data) => {
    console.log("Data IS", data);
  };


  return (
    <>
      <Formik
        initialValues={{ PostTitle: "" }}
        onSubmit={(values, actions) => {
          let data = [
            {
              postTitle: values.PostTitle,
              postContent: editorData,
            },
          ];
          OnSubmit(data);
          actions.setSubmitting(false)
         
          
        }}
      >
        {(props) => (
          <Form>
            <Field
              name="PostTitle"
              //validate={validateName}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.PostTitle && form.touched.PostTitle}
                >
                  <FormLabel>PostTitle</FormLabel>
                  <Input {...field} placeholder="PostTitle" />

                  <FormErrorMessage>{form.errors.PostTitle}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <h2>Using CKEditor&nbsp;5 build in React</h2>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                seteditorData(data);
                console.log(data);
              }}
              // onBlur={ ( event, editor ) => {
              //     console.log( 'Blur.', editor );
              // } }
              // onFocus={ ( event, editor ) => {
              //     console.log( 'Focus.', editor );
              // } }
            />

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
