let s = document.getElementById('hello');
        let flag = document.getElementById('flags');
        let pass1 = document.getElementById('pass1');
        let pass2 = document.getElementById('pass2');
        let error1 = document.getElementById('error1');
        let error2 = document.getElementById('error2');        
        let show = document.getElementById('show');
        let hide = document.getElementById('hide');
        let cont = document.getElementById('cont');
        let textarea = document.getElementById('textarea');
        let size = document.getElementById('size');
        let italic = document.getElementById('italic');
        let bold = document.getElementById('bold');
        let underline = document.getElementById('underline');
        let fonts = document.getElementById('fonts');
        let colorChangingDiv = document.getElementById('colorChangingDiv');
        //1
        s.addEventListener('click',function () {
            s.parentElement.style.justifyContent="end";
        }
        )
        //2
        flag.addEventListener('change', function () {
        switch (flag.value) {
            case "jordan":
                image.src = "jordan.png";
                break;
            case "Palestine":
                image.src = "palestine.png";
                break;
                case "Pakistan":
                image.src = 'pakistan.png';
                break;
            default:
                break;
        }
    });

    //3
    
    
    pass1.addEventListener('input',function () {
        if (pass1.value.length<6) {
            error1.textContent = "Too Short"; 
        }
        else{
            error1.textContent = "";
        }
    })

    pass2.addEventListener('input',function () {
        if (pass2.value !== pass1.value) {
            error2.textContent = "The two passwords don't match"; 
        }
        else{
            error2.textContent = "";
        }


    })
   //4
    show.addEventListener('click' ,function(event){
        event.preventDefault();
        cont.style.display = 'block';
        show.style.display = 'none';
    })

    hide.addEventListener('click',function(event){
        event.preventDefault();
        cont.style.display = 'none';
        show.style.display = 'inline';
    })

//5


bold.addEventListener('change',function () {
    if (bold.checked) {
        textarea.style.fontWeight = 'bold';
    }
    else{
        textarea.style.fontWeight = 'normal';
    }
})

italic.addEventListener('change',function () {
    if (italic.checked) {
        textarea.style.fontStyle = 'italic';
    }
    else{
        textarea.style.fontStyle = 'normal';
    }
})

underline.addEventListener('change',function () {
    if (underline.checked) {
        textarea.style.textDecoration = 'underline';
    }
    else{
        textarea.style.textDecoration = 'none';
    }
})

size.addEventListener('change',function () {
    textarea.style.fontSize = `${size.value}pt`;
})

fonts.addEventListener('change', function () {
    switch (fonts.value) {
        case "arial":
            textarea.style.fontFamily = 'Arial';
            break;
        case "fantasy":
            textarea.style.fontFamily = "fantasy";
            break;
        default:
            break;
    }
});


//6 




        function changeColor() {
            let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            colorChangingDiv.style.backgroundColor = randomColor;
        }

        setInterval(changeColor, 1000);