
function Display_Input(){
    let completeName=document.getElementById("Complete Name").value;
    let Email=document.getElementById("Email").value;
    let Date=document.getElementById("Date").value;
    let interest=document.getElementById("interest").value;
    prefer="";
    if(document.getElementById("individual").checked==true){
        prefer=document.getElementById("individual").value;
    }
    if(document.getElementById("organization").checked==true){
        prefer=document.getElementById("organization").value;
    }
    let comments=document.getElementById("comments").value;

    window.open("summary.html?name="+completeName+"&email"+Email+"&date"+Date+"&interest"+interest+"&Prefer"+prefer+"&comments"+comments);
}



























