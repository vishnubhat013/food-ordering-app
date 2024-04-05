'use client'
import React from 'react'
import {useEffect, useState } from 'react';
import { createMenuitem, getMenuitem } from '../_action';
import MenuItem from '../../components/menu/MenuItems';

function page() {
    const [imageSrc, setImageSrc] = useState('');
    const [menuItems, setMenuItems] = useState([]);

       useEffect(()=>{
        getMenuitem().then((res)=>{
          setMenuItems(res);
        })
       },[])




        const [formData, setFormData] = useState({
          Itemname: '',
          image:'',
          Description: '',
          Baseprice:''
        });
        const handleChange = (e) => {
          const { name, value } = e.target;
          //console.log(name, value); 
          setFormData({
            ...formData,
            [name]: value
          });
        };
        

        const handleSubmit = async (e) => {
          e.preventDefault();
          const Itemname = e.target.elements.Itemname.value;
          const image = e.target.elements.image.value;
          const Description = e.target.elements.Description.value;
          const Baseprice = e.target.elements.Baseprice.value;
      
          try {
              await createMenuitem(Itemname, image, Description, Baseprice);
              alert("done");
          } catch (e) {
              alert("error");
          }
      };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (event) => {
            setImageSrc(event.target.result);
          };
    
          reader.readAsDataURL(file);
        }
    }
return (

    <section className="mt-8">
     <h1 className="text-center font-semibold text-primary text-4xl mb-4 mt-16">
            Menu-Items
    </h1>
    <div>
    <h2 className="text-grey-400 font-bold text-center text-lg mt-12">
        Create New Menu-items
    </h2>
    <form  onSubmit={handleSubmit}className="mt-8 max-w-md mx-auto">
     <div className="flex items-start gap-4">
       <div>
       <input type="file" name="image" onChange={handleImageChange} accept="image/*" value={formData.image}/>
       <img src={imageSrc} alt="Selected" style={{ maxWidth: '300px', marginTop: '20px' }} />
       </div>
       <div className="grow">
         <label>Item name</label>
         <input type="text" name="Itemname" value={setFormData.Itemname} onChange={handleChange}/>
         <label>Description</label>
         <input type="text" name="Description" value={setFormData.Description} onChange={handleChange}/>
         <label>Base price</label>
         <input type="text" name="Baseprice" value={setFormData.Baseprice} onChange={handleChange}/>
         <button type="submit">Save</button>
       </div>
     </div>
    </form>
    </div>
    <div>
    <h2 className="text-grey-400 font-bold text-center text-lg mt-24">
        Listed Menu-items
    </h2>
    <div className="grid grid-cols-3 gap-4">
  {menuItems.length > 0 && menuItems.map(c => (
    <span key={c.id}>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
          {c.image && c.image.startsWith('data:image/') ? (
            <img src={c.image} className="max-h-auto max-h-24 block mx-auto" alt="menu" />
          ) : (
            <img src={`data:image/png;base64,${c.image}`} className="max-h-auto max-h-24 block mx-auto" alt="menu" />
          )}
        </div>
        <h4 className="font-semibold text-xl my-3">{c.Itemname}</h4>
        <p className="text-primary text-sm my-2">{c.description}</p>
        <p className=" text-black text-sm my-2"> $ {c.baseprice}</p>
        
      </div>
    </span>
  ))}
</div>

    </div>
    </section>
);
    
}


export default page
