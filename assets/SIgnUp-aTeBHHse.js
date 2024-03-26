import{d as D,r as g,f as _,g as L,c as n,b as F,a as e,n as U,w as i,v as u,h,F as f,i as b,j as B,k as P,t as p,l as I,u as M,m as $,o as a,p as E,R as W}from"./index-DxgBdj5n.js";import{_ as N}from"./Navbar.vue_vue_type_style_index_0_scope_true_lang-Ajr30bIh.js";import{a as O}from"./axios-L6U4YIEh.js";const j="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14_2332)'%3e%3cpath%20d='M9.00039%2016.2001L4.80039%2012.0001L3.40039%2013.4001L9.00039%2019.0001L21.0004%207.0001L19.6004%205.6001L9.00039%2016.2001Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14_2332'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",z={class:"bg-black"},R={class:"d-flex signupStyle"},Z=e("div",{class:"plotStyle"},null,-1),q={class:"d-flex justify-content-center align-items-center loginFormBlock"},A=e("div",{class:"loginBgImg"},null,-1),G={class:"loginFormSize"},H=e("div",{class:"loginTextStyle loginSmallTitle mb-2",style:{color:"#BF9D7D"}},[e("span",null,"享樂酒店，誠摯歡迎")],-1),J=e("div",{class:"loginTextStyle loginTitle mb-4"},"立即註冊",-1),K={class:"d-flex justify-content-center mb-4"},Q={key:0,class:"loginSmallTitle loginTextStyle"},X={key:1,src:j},Y=e("p",{class:"mt-1"},"輸入信箱及密碼",-1),ee=e("div",{class:"line-container"},null,-1),te=e("div",null,[e("div",{class:"stepBall mx-auto",style:{background:"#909090"}},[e("span",{class:"loginSmallTitle loginTextStyle"},"2")]),e("p",{class:"mt-1"},"填寫基本資料")],-1),le={key:0,class:""},se={class:"mb-3"},oe=e("label",{for:"email",class:"form-label"},"電子信箱",-1),ne={class:"mb-3"},ae=e("label",{for:"inputPassward",class:"form-label"},"密碼",-1),ie={class:"mb-3 mt-2"},re=e("label",{for:"inputPassward2",class:"form-label"},"再次確認密碼",-1),ce={key:1,class:""},de={class:"mb-2"},ue=e("label",{for:"name",class:"form-label"},"姓名",-1),pe={class:"mb-2"},me=e("label",{for:"inputTEL",class:"form-label"},"手機",-1),ve=e("div",{class:"mb-1"},[e("label",null,"生日")],-1),ge={class:"row row-cols-3 mx-0 mb-2"},_e={class:"col ps-0"},he=["value"],fe={class:"col px-0"},be=["value"],ye={class:"col pe-0"},xe=["value"],Se=e("label",{for:"inputaddress",class:"mb-1"},"地址",-1),we={class:"row gap-0 mx-0"},Te={class:"col-6 ps-0"},ke=["value"],Fe={class:"col-6 pe-0"},Ce=["value"],Ve={class:"col-12 mt-3 px-0"},De={class:"mt-2 d-flex"},Le=e("label",{class:"ms-2 form-check-label",for:"checkedbox"},"我已閱讀並同意本網站個資使用規範",-1),Ue={class:"text-danger"},Be={class:""},Pe=e("span",null,"已經有會員了嗎?",-1),We=D({__name:"SIgnUp",setup(Ie){const d=g("stepperOne"),x=_([]),S=_([]),w=_([]),T=_([{city:"台北市",local:["松山區","信義區","大安區","中山區","中正區","大同區","萬華區","文山區","南港區","內湖區","士林區","北投區"]}]),m=g(""),v=g(""),y=g(""),r=g(""),s=_({name:"",tel:"",birthyear:2024,birthMon:1,birthDay:1,addressCity:"台北市",addressLocal:"松山區",addressDes:"",checkConsent:!1}),C=()=>{const o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,l=m.value.toLowerCase().match(o),t=v.value.trim(),c=y.value.trim();if(l===null){r.value="Email輸入格式有問題";return}if(t===""){r.value="請輸入密碼";return}else{const k=t.split("");if(k.length<8){r.value="密碼必須含8碼以上",console.log(k);return}}if(t!==c){r.value="密碼輸入不相符";return}r.value="",d.value="stepperTwo"},V=async()=>{if(s.name===""){r.value="未正確輸入姓名";return}else if(s.tel===""){r.value="未輸入電話";return}else if(s.addressDes===""){r.value="地址有缺";return}else if(!s.checkConsent){r.value="未同意個資規範";return}r.value="",console.log(m.value,v.value),await O.post("https://practice-ts-mongdb.onrender.com/api/v1/user/signup",{name:s.name,email:m.value,password:v.value,phone:s.tel,birthday:`${s.birthyear}/${s.birthMon}/${s.birthDay}`,address:{zipcode:802,detail:s.addressDes}}).then(o=>{var l;console.log(o,"res"),(l=o.data)!=null&&l.status&&(window.confirm("註冊完成,轉入登入頁面"),setTimeout(()=>{$.push({path:"/login"})}))}).catch(o=>{window.confirm("註冊失敗"),console.error(o,"err")})};return L(()=>{for(let o=2024;1990<o;o--)x.push(o);for(let o=1;12>=o;o++)S.push(o);for(let o=1;31>=o;o++)w.push(o)}),(o,l)=>(a(),n("div",z,[F(N),e("div",R,[Z,e("div",q,[A,e("div",G,[H,J,e("div",K,[e("div",null,[e("div",{class:"stepBall mx-auto",style:U({background:d.value==="stepperTwo"?"#BF9D7D":"#909090",cursor:d.value==="stepperTwo"?"pointer":"default"}),onClick:l[0]||(l[0]=t=>d.value="stepperOne")},[d.value==="stepperOne"?(a(),n("span",Q,"1")):(a(),n("img",X))],4),Y]),ee,te]),d.value==="stepperOne"?(a(),n("div",le,[e("div",se,[oe,i(e("input",{type:"text",class:"form-control loginTextStyle loginFormInput",id:"email","onUpdate:modelValue":l[1]||(l[1]=t=>m.value=t)},null,512),[[u,m.value]])]),e("div",ne,[ae,i(e("input",{type:"password",class:"form-control loginTextStyle loginFormInput",id:"inputPassward",placeholder:"需要8碼以上，並需要字母與數字混合","onUpdate:modelValue":l[2]||(l[2]=t=>v.value=t)},null,512),[[u,v.value]])]),e("div",ie,[re,i(e("input",{type:"password",class:"form-control loginTextStyle loginFormInput",id:"inputPassward2","onUpdate:modelValue":l[3]||(l[3]=t=>y.value=t)},null,512),[[u,y.value]])]),e("button",{type:"submit",class:"mt-3 mb-1 form-control btn loginTextStyle loginFormInput loginFormButton",onClick:l[4]||(l[4]=t=>C())},"下一步")])):d.value==="stepperTwo"?(a(),n("div",ce,[e("div",de,[ue,i(e("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=t=>s.name=t),class:"form-control loginTextStyle loginFormInput",id:"name",placeholder:"請輸入姓名"},null,512),[[u,s.name]])]),e("div",pe,[me,i(e("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=t=>s.tel=t),class:"form-control loginTextStyle loginFormInput",id:"inputTEL",placeholder:"請輸入手機號碼"},null,512),[[u,s.tel]])]),ve,e("div",ge,[e("div",_e,[i(e("select",{class:"form-select loginTextStyle loginFormSelect","aria-label":"select year","onUpdate:modelValue":l[7]||(l[7]=t=>s.birthyear=t)},[(a(!0),n(f,null,b(x,(t,c)=>(a(),n("option",{value:t,key:c},p(t),9,he))),128))],512),[[h,s.birthyear]])]),e("div",fe,[i(e("select",{class:"form-select loginTextStyle loginFormSelect","aria-label":"select month","onUpdate:modelValue":l[8]||(l[8]=t=>s.birthMon=t)},[(a(!0),n(f,null,b(S,(t,c)=>(a(),n("option",{value:t,key:c},p(t),9,be))),128))],512),[[h,s.birthMon]])]),e("div",ye,[i(e("select",{class:"form-select loginTextStyle loginFormSelect","aria-label":"select day","onUpdate:modelValue":l[9]||(l[9]=t=>s.birthDay=t)},[(a(!0),n(f,null,b(w,(t,c)=>(a(),n("option",{value:t,key:c},p(t),9,xe))),128))],512),[[h,s.birthDay]])])]),Se,e("div",we,[e("div",Te,[i(e("select",{class:"form-select loginTextStyle loginFormSelect","aria-label":"select month","onUpdate:modelValue":l[10]||(l[10]=t=>s.addressCity=t)},[(a(!0),n(f,null,b(T,(t,c)=>(a(),n("option",{value:t.city,key:c},p(t.city),9,ke))),128))],512),[[h,s.addressCity]])]),e("div",Fe,[i(e("select",{class:"form-select loginTextStyle loginFormSelect","aria-label":"select month","onUpdate:modelValue":l[11]||(l[11]=t=>s.addressLocal=t)},[(a(!0),n(f,null,b(T[0].local,(t,c)=>(a(),n("option",{value:t,key:c},p(t),9,Ce))),128))],512),[[h,s.addressLocal]])]),e("div",Ve,[i(e("input",{type:"text",class:"form-control loginTextStyle loginFormInput",id:"inputaddress",placeholder:"請輸入詳細地址","onUpdate:modelValue":l[12]||(l[12]=t=>s.addressDes=t)},null,512),[[u,s.addressDes]])])]),e("div",De,[i(e("input",{type:"checkbox",class:"form-check-input",id:"checkedbox","onUpdate:modelValue":l[13]||(l[13]=t=>s.checkConsent=t)},null,512),[[B,s.checkConsent]]),Le]),e("button",{type:"submit",class:"mt-3 mb-1 form-control btn loginTextStyle loginFormInput loginFormButton",onClick:l[14]||(l[14]=t=>V())}," 完成註冊 ")])):P("",!0),e("p",Ue,p(r.value),1),e("div",Be,[Pe,F(M(W),{to:"/login",class:"ms-3 loginForgetPW loginTextStyle"},{default:I(()=>[E("立即登入")]),_:1})])])])])]))}});export{We as default};