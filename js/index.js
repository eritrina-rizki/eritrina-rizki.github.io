var hiName = prompt('Fill in your name below');
    var element = document.getElementById('nameInput').innerText = hiName;
    console.log(element)
    
    function validateForm() {
        var nama = document.forms['form']['nama'].value;
        var ttl = document.forms['form']['tanggalLahir'].value;
        var jk = document.forms['form']['jenisKelamin'].value;
        var pesan = document.forms['form']['pesan'].value;
        var waktu = new Date();

        if (nama == "" || ttl == "" || jk == "" || pesan == "") {
            alert("Please complete all the form field")
            return false;
        } 
        
        document.getElementById('namaOutput').innerText = nama;
        document.getElementById('tanggalOutput').innerText = ttl;
        document.getElementById('jenisOutput').innerText = jk;
        document.getElementById('pesanOutput').innerText = pesan;
        document.getElementById('waktuOutput').innerText = waktu;
        
        return false;
    }