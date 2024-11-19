"use server";
import CryptoJS from 'crypto-js';
 const Data_Decryption = async (hash) => {
  try {
    const secretKey = '01155618864'; // Use environment variables for keys
    const encryptedData = decodeURIComponent(hash);
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    return null;

  }
  










}
export default Data_Decryption;
