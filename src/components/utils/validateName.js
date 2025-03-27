export default function validateName(name) {
  const nameRegex =
    /^(?=[A-Za-zà-üÀ-Ü']*[A-Za-zà-üÀ-Ü'])[A-Za-z-à-üÀ-Ü'\ ]{2,}$/gm;
  const validatedName = nameRegex.test(name);
  return validatedName;
}
