import { Form } from "react-router";


export default function SignupPage() {
  return (
    <>
    <h1>Sign up</h1>
    <Form action="/signup" method="post">
      <input name="email" label="email" type="email" />
      <br/>
      <input name="password" label="password" type="text" />
    </Form>
    </>
  );
}