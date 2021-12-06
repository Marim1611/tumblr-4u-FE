import axios from 'axios'

export const fetchMessage = async function (){
  const response = await axios.get('/message')
  return response.data.message
}
export const fetchName = async function (){
    const response = await axios.get('/nameDrawer')
    return response.data.name
  }