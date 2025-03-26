export default function validateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validatedEmail = emailRegex.test(email);
  return validatedEmail;
}
