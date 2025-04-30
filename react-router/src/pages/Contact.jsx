import { Form } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const FormData = async ({ request }) => {
  // eslint-disable-next-line react/prop-types
  const res = await request.formData(); //this fromData method will collect the formData and store into the variable
  console.log(res);

  const data = Object.fromEntries(res);
  console.log(data);

  return null;
}; //by default it gets a request,response object and this function must be async because it will return a promise

export const Contact = () => {
  //Form is a component imported from react router which is used to handle form data
  return (
    <>
      <Form method="post" action="/contact" className="form">
        <h1>Contact Us</h1>
        <label htmlFor="userName">Name</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="msg" id="message" cols={20} rows={10}></textarea>
        <button>Submit Now</button>
      </Form>
    </>
  );
};
