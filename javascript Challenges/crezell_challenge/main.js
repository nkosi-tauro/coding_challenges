  let list = ["skating","coding","video gaming","engineering"];

        ///Loops used to display reppetyetive elements
        for(let i =0; i < list.length; i++){
            let li = '<li>' + list[i] + '</li> <br/>';
            document.write(li);
        }


let hobby= [];
     
        function myFunction()
        {
          let x = document.getElementById("box");
          hobby.push(document.getElementById("input").value);
          x.innerHTML = hobby.join("<br/>"); 
        
}

