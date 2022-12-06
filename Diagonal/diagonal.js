function encrypt(){
    var plaintext = document.getElementById("text").value;
    var padding = document.getElementById("padding").value;
    var key = parseInt((document.getElementById("key").value));
    
    var ciphertext="";
    var j=0;
    var matriks = new Array(key);

    for (var i = 0; i < matriks.length; i++) {
        matriks[i] = new Array(key);
    }

    if(plaintext.length < key*key){
        for(let i = plaintext.length; i < key*key ; i++){
            plaintext += padding;
        }
    }

    for(let i = 0; i < key*key; i++){
        if(i % key == 0){
            j = i / key;
        }
        matriks[i % key][j] = plaintext[i];
    }

    for(let i = 0; i < key; i++){
        for(let j = 0; j <= i ; j++){
            ciphertext += matriks[i-j][j];
        }
    }

    for(let i = 0; i <key-1;i++){
        for(let j = 0; j < key-1-i; j++){
            ciphertext += matriks[key-1-j][i+1+j];
        }
    }

    document.getElementById("hasil").innerHTML = ciphertext;


}

function decrypt(){
    var ciphertext = document.getElementById("text").value;
    var key = parseInt((document.getElementById("key").value));
    
    var plaintext="";
    var check=0;

    var matriks = new Array(key);

    for (var i = 0; i < matriks.length; i++) {
        matriks[i] = new Array(key);
    }

    for(let i = 0; i< key; i++){
        for(let j = 0; j <= i ; j++){
            matriks[i-j][j] = ciphertext[check];
            check += 1;
        }
    }

    for(let i = 0; i < key-1; i++){
        for(let j = 0; j < key-1-i; j++){
            matriks[key-1-j][i+1+j] = ciphertext[check];
            check += 1;
        }
    }

    check = 0;

    for(let i = 0; i<key;i++){
        for(let j = 0; j < key; j++){
            plaintext += matriks[j][i];
        }
    }

    document.getElementById("hasil").innerHTML = plaintext;


}