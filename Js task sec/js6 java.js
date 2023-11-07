function IsPandigital(number) {
    
    let s = number.toString();
        for (let index = 0; index <= 9; index++) {
        if (!s.includes(index.toString())) {
            return "false";
        }
        
    }
    return "true";
        
    
    
}

document.write(IsPandigital(98140723568910));
