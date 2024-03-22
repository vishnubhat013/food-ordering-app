'use client'
import React from 'react'
import {useEffect,useState} from "react";
import {getCategories, createCategory} from '../_action'


function page() {

    const[CategoryName,setcategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const [editedCategory,seteditedcategory] =useState(null);
    const [CategoryId, setCategoryid] =useState('');
    const [updateCategory,setupdateCategory]=useState('');

    useEffect(() => {
        getCategories().then((res) => {
            setCategories(res);
        })
    },[])
    return (
  <section className=" mt-8 max-w-md mx-auto">
  <div>
    <h1 className="text-center font-semibold text-primary text-4xl mb-4 mt-24">
            Catogories
    </h1>


    <div className="flex gap-2 items-end">
    <div className="grow">
        <label className='font-semibold text-lg px-3'>
        {editedCategory?'Update category : ':'Create category'}
        {editedCategory && (
            <>{editedCategory.name}</>
        )}
        </label>
        <input type="text" value={CategoryName} onChange={ev=>setcategoryName(ev.target.value)}/> 
    </div>
    <div className="pb-4">
        <button  className="text-center" onClick={async () => {
           /*/</div></div> editedCategory&&{
       </div> try{
            await updateCategory(CategoryId)
            alert("Done");
        }catch(e){
            alert("Error");
        }

            }/*/
            try{
            await createCategory(CategoryName)
            alert("Done");
        }catch(e){
            alert("Error");
        }
    
    
        }}
        >{editedCategory?'Update':'Create'}</button>
    </div>
    </div>    
    <div>
     <h2 className="mt-8 font-semibold">Edit Category</h2>
    {categories.length>0 && categories.map(c=>(
        <button 
        onClick={()=>{
            seteditedcategory(c);
        setcategoryName(c.name);
        }}
         className="bg-gray-200 rounded-xl p-2 px-4 flex gap-1 cursor-pointer mb-2">
        <span >{c.name}</span>
        
        </button>
       

    ))}
        
    </div>

        
    </div>
  </section>
  )
}

export default page
