
export const DynamicDate = ()=>{
  let d = new Date()
  let day = d.getDate()
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let month = months[d.getMonth()];
  let year = d.getFullYear()
let index = d.getMonth()
  if(month ==months[3] || month==months[5] || month==months[8] || month==months[10]){
    if(day>=29){
      month = months[index+1]
    }
   day = (day+2)%30
  }
else if(month==months[1]){
  if(year%4==0){
    if(day>=28){
      month = months[index+1]
    }
day = (day+2)%29
  }else{
    if(day>=27){
      month = months[index+1]
    }
    day = (day+2)%28
  }
}
else{
  if(month==months[months.length-1] && day>29){
    month = months[0]
  }
  else  if(day>29){
    month = months[index+1]
  }
  day = (day+2)%31
}
return {
    day,month
}
}