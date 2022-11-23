let emps=[];
emps=(JSON.parse(localStorage.getItem("emps")));

let x=[];
var t=document.getElementById("m");
for (let index = 0; index <emps.length; index++) 
{
      
      console.log(emps[index]);
      var row=`
                  <tr>
                        <td>${emps[index].empid}</td>
                        <td>${emps[index].fname}</td>
                        <td>${emps[index].gender}</td>
                        <td>${emps[index].dob}</td>
                        <td>${emps[index].age}</td>
                        <td> 
                        <button id="modify" type = "button" class="btn btn-outline-primary shadow" onClick="editData('${emps[index].empid}')"> Edit </button>
                        <button type="button" class="btn btn-outline-danger shadow" onclick="deleteData('${emps[index].empid}')">Delete</button></td>
                  
                  </tr>
      `;
      t.innerHTML+=row;
}

function deleteData(event){
      let x=event;
      let y=x;
      for (let index = 0; index <emps.length; index++) {
            if(emps[index].empid===y)
            {
                  emps.splice(index,1);
                  console.log(emps);
                  localStorage.clear();
                  localStorage.setItem("emps",JSON.stringify(emps));
                 location.reload();
            }
      }



}


function editData(editid){
      window.open('/Preeti/Form.html?empid=' + editid,'_self')
      
}


