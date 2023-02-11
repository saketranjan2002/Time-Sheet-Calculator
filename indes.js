const calculate=()=>{
    let no_of_days=7;
    let weeklytotalHours=0;
    for(let i=1;i<=no_of_days;i++){
        let str_time=document.getElementById(`${i}1`).value;
        let end_time=document.getElementById(`${i}2`).value;
        let break_time=document.getElementById(`${i}3`).value; 
        const str_timeInMinutes = (parseInt(str_time.split(':')[0]) * 60) + parseInt(str_time.split(':')[1]);
        const end_timeInMinutes = (parseInt(end_time.split(':')[0]) * 60) + parseInt(end_time.split(':')[1]);
        const break_timeInMinutes = (parseInt(break_time.split(':')[0]) * 60) + parseInt(break_time.split(':')[1]);
        const totalMinutes = end_timeInMinutes - str_timeInMinutes - break_timeInMinutes;
        if(totalMinutes<0){
            alert("Please Enter Valid Data");
            location.reload();
        }
        const totalHours = parseFloat(totalMinutes / 60);
        console.log("total day hrs",`${Math.floor(totalHours)}:${totalMinutes%60}`);
        let total_day_time=document.getElementById(`${i}4`);
        let totalDaytime=`${Math.floor(totalHours)}:${totalMinutes%60}`;
        total_day_time.value=`${totalDaytime}`;
        weeklytotalHours+=totalHours
    }
    weeklytotalHours=parseFloat(weeklytotalHours).toFixed(2);
    let final=document.getElementById("final_total_hours");
    let totalmin=parseInt(Math.round((weeklytotalHours.toString().split(".")[1])*(0.6)));
    console.log("total hrs",weeklytotalHours,`${totalmin}`);
    let totalTime=`${Math.floor(weeklytotalHours)}:${totalmin}`;
    final.value=`${totalTime}`;
}

function reset(){
    location.reload();
}