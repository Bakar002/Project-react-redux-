import React from 'react'

export const action = (item) => {
  return {
type:"Add_Cart",
payload:item
  }
}
