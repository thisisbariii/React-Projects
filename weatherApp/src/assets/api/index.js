const baseURL="https://api.weatherapi.com/v1/current.json?key= 0e9a70bc2a6f4df9bdd142550242704&q=London&aqi=no"

export const getWheaterDataForCity=async (city)=>{
const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
return await response.json()
}
export const getWheaterDataForLocation=async(lat,lon)=>{
const response= await fetch(`${baseURL}&q=${city}&aqi=yes`);
return await response.json()

}