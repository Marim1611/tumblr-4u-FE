import axios from 'axios'
//const baseUrl="http://tumblr4u.eastus.cloudapp.azure.com:5000";
const baseUrl=''
export const fetchMessage = async function (){
  const response = await axios.get(baseUrl+'/message')
  return response.data.message
}
export const fetchSearchResults = async function (){
    const response = await axios.get(baseUrl+'/autoCompleteSearchDash')
    return response.data.searchResults
  }
 