'use client'
import React from 'react'
import {useEffect,useState} from "react";
import {getCategories, createCategory, updateCategory} from '../_action'


function page() {

    const[CategoryName,setcategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const [editedCategory,seteditedcategory] =useState(null);

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
        <input type="text" value={editedCategory ? editedCategory.name : CategoryName} onChange={ev=>{
            if(editedCategory){
                seteditedcategory({...editedCategory,name:ev.target.value})
            }else{
                setcategoryName(ev.target.value)
            }
        }}/> 
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
           if(!editedCategory){
            try{
                await createCategory(CategoryName)
                await getCategories().then((res) => {
                    setCategories(res);
                })
                alert("Done");
            }catch(e){
                alert("Error");
            }
           }
           else{
            try{
                console.log(editedCategory.id, editedCategory.name)
                await updateCategory(editedCategory.id, editedCategory.name);
                await getCategories().then((res) => {
                    setCategories(res);
                })
                alert('Done');
            }
            catch(e){
                alert(e.message);
            }
           }
    
    
        }}
        >{editedCategory?'Update':'Create'}</button>
    </div>
    </div>    
    <div>
     <h2 className="mt-8 font-semibold">Edit Category</h2>
     <button 
        onClick={()=>{
            seteditedcategory(null);
            setcategoryName('');
        }}
         className="bg-green-200 rounded-xl p-2 px-4 flex gap-1 cursor-pointer mb-2">
            Add New Category
        </button>
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
