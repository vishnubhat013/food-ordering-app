'use client'
import React from 'react'
import { useState } from 'react';
import { createMenuitem } from '../_action';

function page() {
    const [imageSrc, setImageSrc] = useState('');
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
    </div>
    </section>
);
    
}


export default page
