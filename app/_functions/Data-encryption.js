import CryptoJS from 'crypto-js';
function DataEncryption(obj) {
  const secretKey = "01155618864"; // Use environment variables for keys
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(obj), secretKey).toString();
  const encodedEncryptedData = encodeURIComponent(encryptedData);
  return encodedEncryptedData;
}
export default DataEncryption;
