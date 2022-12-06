function cipherText(){
    var str = document.getElementById("text").value;
    var keyless = document.getElementById("key").value;

    var key = generatekey(str,keyless);

    var ciphertext = ""; 

    var conkey = 0,tempkey, tempstr, x;

    for(let i = 0; i < str.length ; i++){
        if(str[i] == ' '){
            ciphertext += ' ';
            conkey += 1;
            continue;
        }
    

        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            tempstr = str.charCodeAt(i) - 65;
        }

        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            tempstr = str.charCodeAt(i) - 97;
        }

        if(key.charCodeAt(i-conkey) >= 65 && key.charCodeAt(i) <= 90){
            tempkey = key.charCodeAt(i-conkey) - 65;
        }

        if(key.charCodeAt(i-conkey) >= 97 && key.charCodeAt(i) <= 122){
            tempkey = key.charCodeAt(i-conkey) - 97;
        }

        x = (tempstr + tempkey) % 26;

        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            x += 65;
        }

        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            x += 97;
        }
        ciphertext += String.fromCharCode(x);
    }
    document.getElementById("hasil").innerHTML = ciphertext;
    
}

function decrypt(){
    var ciphertext = document.getElementById("text").value;
    var keyLess = document.getElementById("key").value;

    var key = generatekey(ciphertext,keyLess);

    var plaintext="";

    var conkey = 0, tempkey, tempciphertext, x;

    for(let i = 0 ; i < ciphertext.length ; i++ ){
        if(ciphertext[i] == ' '){
            plaintext += ' ';
            conkey += 1;
            continue;
        }

        if(ciphertext.charCodeAt(i) >= 65 && ciphertext.charCodeAt(i) <= 90){
            tempciphertext = ciphertext.charCodeAt(i) - 65;
        }

        if(ciphertext.charCodeAt(i) >= 97 && ciphertext.charCodeAt(i) <= 122){
            tempciphertext = ciphertext.charCodeAt(i) - 97;
        }

        if(key.charCodeAt(i-conkey) >= 65 && key.charCodeAt(i) <= 90){
            tempkey = key.charCodeAt(i-conkey) - 65;
        }

        if(key.charCodeAt(i-conkey) >= 97 && key.charCodeAt(i) <= 122){
            tempkey = key.charCodeAt(i-conkey) - 97;
        }

        x = ma_mod((tempciphertext - tempkey),26);

        if(ciphertext.charCodeAt(i) >= 65 && ciphertext.charCodeAt(i) <= 90){
            x += 65;
        }

        if(ciphertext.charCodeAt(i) >= 97 && ciphertext.charCodeAt(i) <= 122){
            x += 97;
        }

        plaintext += String.fromCharCode(x);

    }

    document.getElementById("hasil").innerHTML = plaintext;
}


function generatekey(str,key){

    var x = str.length;

    for(let i = 0; ;i++){
        
        if(x == i){
            i = 0;
        } 
        if (key.length == str.length){
            break;
        }
        key += key[i];
    }

    return key;
}

function ma_mod (a,b){
    var result = (b + (a%b)) % b;
    return result;
}
