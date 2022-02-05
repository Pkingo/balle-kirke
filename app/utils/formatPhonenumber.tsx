export const formatPhonenumber = (phone: string) =>
  phone.replace(/\d{2}(?=.)/g, "$& ");
