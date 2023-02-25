import React from 'react'

export const action = (item) => {
  return {
type:"Add_Cart",
payload:item
  }
}
export const DLT = (id) => {
    return {
  type:"RMV_Cart", 
  payload:id
    }
  }
  export const rem = (item) => {
    return {
  type:"RMV_One", 
  payload:item
    }
  }
