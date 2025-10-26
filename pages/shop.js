"use client";
import { useState } from 'react';

export default function Shop() {
  const items = [
    {id:1,name:'Classic Tee',img:'/tshirt1.jpg'},
    {id:2,name:'Streetwear Tee',img:'/tshirt2.jpg'},
    {id:3,name:'Printed Tee',img:'/tshirt3.jpg'}
  ];
  const [selected,setSelected]=useState(null);

  return (
    <div style={{padding:'40px'}}>
      <h1 style={{textAlign:'center'}}>Shop</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',marginTop:'30px'}}>
        {items.map(item=>(
          <div key={item.id} style={{border:'1px solid #ddd',padding:'20px',textAlign:'center'}}>
            <img src={item.img} alt={item.name} style={{width:'100%',height:'300px',objectFit:'cover'}} />
            <h3>{item.name}</h3>
            <button onClick={()=>setSelected(item)} style={{background:'#111',color:'#fff',padding:'10px 15px'}}>Order Now</button>
          </div>
        ))}
      </div>

      {selected && (
        <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.6)',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div style={{background:'#fff',padding:'30px',borderRadius:'8px',minWidth:'300px',position:'relative'}}>
            <button onClick={()=>setSelected(null)} style={{position:'absolute',top:'10px',right:'10px'}}>X</button>
            <h2>Order: {selected.name}</h2>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <input type="hidden" name="product_id" value={selected.id} />
              <input name="name" type="text" placeholder="Your Name" required />
              <input name="phone" type="text" placeholder="Phone Number" required />
              <input name="order_count" type="number" defaultValue={1} required />
              <button type="submit" style={{background:'#111',color:'#fff',padding:'8px 12px'}}>Submit Order</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
