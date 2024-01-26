import{u as c,j as e,r,Q as u}from"./index-5nZHiS9r.js";import{H as f}from"./Helmet-zxO9j0Dh.js";import{c as x,a as o,F as h,b as p,d as a,E as b,t as m}from"./toastOptions-hMHJZvOV.js";const g=x().shape({name:o().label("Enter your name").min(3,"Name must be at least 3 characters long!").max(32,"Name must be less than 32 characters long").required("Name is required"),email:o().label("Enter your email").email("Enter a valid email").required("Email is required"),password:o().label("Enter your password").min(7,"Password should be of minimum 7 characters length").required("Password is required")}),n=({name:l})=>e.jsx(b,{name:l,render:s=>e.jsx("div",{className:"absolute top-0 right-0 text-sm w-[200px] p-1 text-blue bg-lavender rounded-lg border-2 border-chestnut",children:s})}),w=()=>{const l=c(),s=async(t,{resetForm:d})=>{const i=await l(r({name:t.name.trim(),email:t.email.trim(),password:t.password.trim()}));r.fulfilled.match(i)?(d(),u.success("You have successfully registered",m)):r.rejected.match(i)&&u.error("An error has occurred, please check the information you entered",m)};return e.jsx(h,{initialValues:{name:"",email:"",password:""},validationSchema:g,onSubmit:s,children:e.jsxs(p,{className:"w-[500px] flex flex-col items-center bg-lightBlue rounded-lg p-4 shadow-lg mx-auto",children:[e.jsxs("label",{className:"w-full flex flex-col p-3 gap-2 text-deepBlue",children:["Name",e.jsxs("div",{className:"w-full relative",children:[e.jsx(a,{className:"w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0",type:"text",name:"name",autoComplete:"off"}),e.jsx(n,{name:"name"})]})]}),e.jsxs("label",{className:"w-full flex flex-col p-3 gap-2 text-deepBlue",children:["Email",e.jsxs("div",{className:"w-full relative",children:[e.jsx(a,{className:"w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0",type:"text",name:"email",autoComplete:"off"}),e.jsx(n,{name:"name"})]})]}),e.jsxs("label",{className:"w-full flex flex-col p-3 gap-2 text-deepBlue",children:["Password",e.jsxs("div",{className:"w-full relative",children:[e.jsx(a,{className:"w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0",type:"text",name:"password",autoComplete:"off"}),e.jsx(n,{name:"name"})]})]}),e.jsx("button",{className:"inline-flex items-center justify-center border-none outline-none text-lg text-deepBlue shadow-lg bg-primaryLight min-w-[64px] mt-4 px-4 py-2 rounded-[4px] font-medium uppercase transition-all duration-300 hover:scale-[1.02] hover:text-white hover:bg-deepBlue",type:"submit",children:"Register"})]})})},y=()=>e.jsxs("div",{className:"w-full",children:[e.jsx(f,{children:e.jsx("title",{children:"Registration"})}),e.jsx(w,{})]});export{y as default};
