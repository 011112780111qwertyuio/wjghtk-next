export default function Validation(vlues) {
  const error = {};
  const email_patter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const pass_patter = /^([a-zA-Z-1-9]{7,60})$/;
  const name_patter = /^[\p{L} \-]{2,13}$/u;
  const phone_patter = /^[0-9\+*]{4,25}$/;
  if (!email_patter.test(vlues.email) && vlues.email !== "") {
    error.email = "يرجى إدخال بريد إلكتروني صالح. مثال: example@example.com";
  }
  
  if (!email_patter.test(vlues.resEmail) && vlues.resEmail !== "") {
    error.resEmail = "يرجى إدخال بريد إلكتروني صالح. مثال: example@example.com";
  }
  if (email_patter.test(vlues.resEmail) && vlues.resEmail !== "" && email_patter.test(vlues.email) && vlues.email !== "" && vlues.email !== vlues.resEmail) {
    error.resEmail = "الرجاء تطابق نفس الايميل";
  }
  if (!pass_patter.test(vlues.pass) && vlues.pass !== "") {
    error.pass = `يرجى إدخال كلمة مرور صالحة. مثال:

    يجب أن تتضمن 8 أحرف على الأقل.
    يجب أن تحتوي على حروف  .
  `;
  }
  if (!name_patter.test(vlues.fname) && vlues.fname !== "") {
    error.fname = "يرجى إدخال اسم صالح";
  }
  if (!name_patter.test(vlues.lname) && vlues.lname !== "") {
    error.lname = "يرجى إدخال اسم صالح";
  }
  if (!phone_patter.test(vlues.phone) && vlues.phone !== "") {
    error.phone = "يرجى إدخال رقم هاتف صالح";
  }
  if (phone_patter.test(vlues.phone) && name_patter.test(vlues.lname) && name_patter.test(vlues.fname) && pass_patter.test(vlues.pass) && email_patter.test(vlues.email) && email_patter.test(vlues.resEmail) && vlues.resEmail === vlues.email) {
    error.notError = "not-error";
  }




  return error;


}
