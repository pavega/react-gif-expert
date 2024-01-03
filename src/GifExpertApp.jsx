import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <div className='custom-title'>
        <h1>GIFSparkle</h1>
      </div>

      <AddCategory onNewValue={onAddCategory} placeholder='Bunny' />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
