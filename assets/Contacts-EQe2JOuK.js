import{c as x,G as F,u as d,j as e,d as u,Q as o,a as i,b as m,e as L,f as A,g as D}from"./index-ndIu2nWr.js";import{H as E}from"./Helmet-MbBMvKpy.js";import{t as r,c as k,a as f,F as z,b as S,d as b,E as $}from"./toastOptions-Clb17Grf.js";const j=t=>t.contacts.items,I=t=>t.contacts.isLoading,w=t=>t.contacts.error,N=t=>t.filter,P=t=>t.contacts.isDeleting,q=x([N,j],(t,s)=>{const l=t.value.toLowerCase();return s==null?void 0:s.filter(({name:n})=>{var a;return(a=n==null?void 0:n.toLowerCase())==null?void 0:a.includes(l)})}),M=x([I,w],(t,s)=>t&&!s);x([P,w],(t,s)=>t&&!s);function Z(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}},{tag:"path",attr:{d:"M360 330.9L330.9 360 256 285.1 181.1 360 152 330.9l74.9-74.9-74.9-74.9 29.1-29.1 74.9 74.9 74.9-74.9 29.1 29.1-74.9 74.9z"}}]})(t)}const G=({id:t,name:s,number:l})=>{const n=d(),a=async()=>{const c=await n(u(t));u.fulfilled.match(c)?o.success(`Contact ${s} has been successfully deleted`,r):u.rejected.match(c)&&o.error(`An error has occurred, contact ${s} hasn't been deleted`,r)};return e.jsxs("div",{className:"flex items-center justify-between w-[400px] h-[40px] px-2 bg-lightDark text-deepBlue rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02]",children:[e.jsxs("p",{className:"m-0 text-base text-deepBlue",children:[s,": ",l]}),e.jsxs("button",{className:"inline-flex items-center justify-center relative m-0 outline-none border-none px-[10px] py-[4px] rounded-[4px] uppercase text-sm text-deepBlue font-medium bg-primaryLight shadow-sm transition-all duration-300 hover:scale-[1.03]",onClick:a,children:["Delete",e.jsx(Z,{className:"w-[18px] h-[18px] mr-[-2px] ml-[8px] text-deepBlue"})]})]})},H=({message:t})=>e.jsx("h4",{className:"w-[400px] bg-primaryLight text-deepBlue rounded-lg p-4 shadow-md text-2xl",children:t}),O=()=>{const t=i(q),s=i(M);return e.jsxs("div",{className:"flex flex-col items-center w-[500px] ml-[40px] bg-lightBlue p-4 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"text-deepBlue text-center text-5xl mb-4",children:"Contacts"}),s&&e.jsx("div",{className:"w-[400px] h-[40px] mb-3 rounded-lg bg-primaryLight shadow-md"}),!s&&t.length===0?e.jsx(H,{message:"There is no contact in Phonebook"}):e.jsx("ul",{className:"m-0 p-0 list-none",children:t.map(({id:l,name:n,number:a})=>e.jsx("li",{className:"mb-3",children:e.jsx(G,{id:l,name:n,number:a})},l))})]})},T=k().shape({name:f().label("Enter contact name").matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name").required("Name is required"),number:f().label("Enter phone number").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Phone number is required")}),g=({name:t})=>e.jsx($,{name:t,render:s=>e.jsx("div",{className:"absolute top-0 right-0 text-sm w-[200px] p-1 text-blue bg-secondaryLight rounded-lg border-2 border-chestnut",children:s})}),V=()=>{const t=d(),s=i(j),l=async(n,{resetForm:a})=>{const c=(C,y)=>C.find(({name:B})=>B.toLowerCase()===y),{name:h}=n,v=h.toLowerCase().trim();if(c(s,v)){o.error(`${h} is already in contacts`,r);return}const p=await t(m(n));m.fulfilled.match(p)?(a(),o.success("New contact has been successfully added",r)):m.rejected.match(p)&&o.error("An error has occurred, please check the information you entered",r)};return e.jsx(z,{initialValues:{name:"",number:""},validationSchema:T,onSubmit:l,children:e.jsxs(S,{className:"flex flex-col items-center w-[400px] bg-lightBlue mx-auto rounded-lg p-4 shadow-lg",children:[e.jsxs("label",{className:"w-full flex flex-col p-3 text-deepBlue gap-2",children:["Name",e.jsxs("div",{className:"w-full relative",children:[e.jsx(b,{className:"w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0",type:"text",name:"name",autoComplete:"off"}),e.jsx(g,{name:"name"})]})]}),e.jsxs("label",{className:"w-full flex flex-col p-3 text-deepBlue gap-2",children:["Number",e.jsxs("div",{className:"w-full relative",children:[e.jsx(b,{className:"w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0",type:"text",name:"number",autoComplete:"off"}),e.jsx(g,{name:"number"})]})]}),e.jsx("button",{className:"inline-flex items-center justify-center border-none outline-none text-lg text-deepBlue shadow-lg bg-primaryLight min-w-[64px] mt-4 px-4 py-2 rounded-[4px] font-medium uppercase transition-all duration-300 hover:scale-[1.02] hover:text-white hover:bg-deepBlue",type:"submit",children:"Add contact"})]})})},Q=()=>{const t=d(),s=i(N),l=n=>{n.preventDefault();const a=n.currentTarget.value;t(L(a))};return e.jsxs("label",{className:"w-full flex flex-col p-3 text-deepBlue gap-2",children:["Find contacts by name",e.jsx("input",{className:"w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0",type:"text",autoComplete:"off",name:"filter",value:s.value,onChange:l})]})},U=()=>{const t=d();return A.useEffect(()=>{t(D())},[t]),e.jsxs("main",{children:[e.jsx(E,{children:e.jsx("title",{children:"Contacts"})}),e.jsxs("div",{className:"flex items-start w-[1080px] mx-auto gap-16",children:[e.jsxs("div",{className:"flex flex-col items-center w-[500px] bg-lightBlue mx-auto rounded-lg p-4 shadow-md",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-4 text-center text-deepBlue text-5xl",children:"Phonebook"}),e.jsx(V,{})]}),e.jsxs("div",{className:"w-[400px] bg-lightBlue mx-auto rounded-lg p-4 shadow-md text-center",children:[e.jsx("h4",{className:"mb-2 text-deepBlue text-center text-4xl",children:"Find contact"}),e.jsx(Q,{})]})]}),e.jsx(O,{})]})]})};export{U as default};