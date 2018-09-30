const clickFunction = () => {
    var str = $("#ipText").val();
    var num = parseInt(str);
    
    let  i = 0, j=0 ;

    for(j=1; j<=num; j++){
        let sum = 0;
        let ar = [];
        for(i=1; i<=j; i++){
            if(j%i === 0){
                sum = sum + i;
                ar.push(i);
            }
        }

        if(sum < 2 * j ){
            var para = document.createElement("p");
            para.innerHTML = "Deficient Number: "+ j+ "<br/> Sum of all its factors:" + sum + "<br /> Factors: " + ar;
            document.getElementById('opText').appendChild(para);
        }
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
