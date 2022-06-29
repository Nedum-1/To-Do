let c = document.querySelector("#inputt"); 
        let h = document.querySelector("#add");
        let i = document.querySelector(".tasks");
        h.addEventListener('click', () => {
            if(!c.value){
                alert("Please Input Task");
                return;
            }
            let n = document.createElement("div")
            n.classList.add("child")
            let e = document.createElement("input")
            e.type="text"
            e.value = c.value
            e.setAttribute("readonly", "readonly")
            e.classList.add("list")
            n.appendChild(e)
            i.appendChild(n)
            let d = document.createElement("button")
            d.innerText="Del"
            d.classList.add("del")
            n.appendChild(d)
            d.style.display="none"
            let u = document.createElement("button")
            u.classList.add("edit")
            u.innerText="Edit"
            u.style.display="none"
            
            n.appendChild(u)
            c.value=""
            e.addEventListener('click', () =>{
            if (u.style.display=="none"){
                u.style.display="inline"
                d.style.display="inline"
            }
            else {
                u.style.display="none"
                d.style.display="none"
            }
            })
            u.addEventListener('click', () =>{
            
            if(u.innerText=="Edit"){
                e.removeAttribute("readonly");
                e.focus();
                u.innerText="Save";
                return;
            }
            if(u.innerText=="Save", e.value!=""){
                u.innerText="Edit";
                e.setAttribute("readonly", "readonly");
                return;
            }
            if(e.value==""){
                e.removeAttribute("readonly")
                e.focus()
                u.innerText="Save"
                e.placeholder="Please input task here"
                e.style.borderColor="red"
                d.style.borderColor="red"
                return;
            }
            })
            d.addEventListener('click', () =>{
                n.style.display="none"
            })

        })
        
        
        
        