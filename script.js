let passwordBox=document.querySelector('#input');
let length=document.querySelector('#scroll');
let lengthNo=document.querySelector('span');
let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');
let btn3=document.querySelector('#btn3');
let copyBtn=document.querySelector('.copy');
let clearBtn=document.querySelector('.clear');


lengthNo.innerText=length.value;
length.addEventListener('input',()=>{
    lengthNo.innerText=length.value;
})

class PasswordGenerator {
    constructor() {
      this.letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.numbers = '0123456789';
      this.symbols = '!@#$%^&*()-_=+[{]}|;:,<.>/?';
    }
  
    generateSimplePassword(length) {
      let password = '';
      const characters = this.letters;
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      return password;
    }
  
    generateNormalPassword(length) {
      let password = '';
      const characters = this.letters + this.numbers;
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      return password;
    }
  
    generateHardPassword(length) {
      let password = '';
      const characters = this.letters + this.numbers + this.symbols;
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      return password;
    }
  }

  const passwordGenerator = new PasswordGenerator();
  btn1.addEventListener('click',()=>{
    passwordBox.value=passwordGenerator.generateSimplePassword(length.value);
})
btn2.addEventListener('click',()=>{
    passwordBox.value= passwordGenerator.generateNormalPassword(length.value); 
})
btn3.addEventListener('click',()=>{
    passwordBox.value= passwordGenerator.generateHardPassword(length.value) 
})

copyBtn.addEventListener('click',()=>{
    passwordBox.select();
    document.execCommand('copy');
})

clearBtn.addEventListener('click',()=>{
    passwordBox.value=''
})