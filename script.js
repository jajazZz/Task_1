function enableTOR(tor) {
    tor_copies = document.getElementById("tor_copies");
    tor_copies.disabled = tor.checked? false : true;
    if (!tor_copies.disabled) {
        tor_copies.focus();
    }
}

function enableCOE(coe) {
    coe_copies = document.getElementById("coe_copies");
    coe_copies.disabled = coe.checked? false : true;
    if (!coe_copies.disabled) {
        coe_copies.focus();
    }
}

function enableGM(gm) {
    gm_copies = document.getElementById("gm_copies");
    gm_copies.disabled = gm.checked? false : true;
    if (!gm_copies.disabled) {
        gm_copies.focus();
    }
}

function enableOD(od) {
    var other = document.getElementById("other");
    od_copies = document.getElementById("od_copies");
    other.disabled = od.checked? false : true;
    od_copies.disabled = od.checked? false : true;
    if (!other.disabled || !od_copies.disabled) {
        other.focus(), od_copies.focus();
    }
}

function Alert(){
    var date = document.getElementById('date');
    var fullname = document.getElementById('fullname');
    var email = document.getElementById('email');
    var num = document.getElementById('ContactNumber');
    var relation = document.getElementById('relation');

    const success = document.getElementById('success');
    const failed = document.getElementById('failed');

    if(date.value === '' || fullname.value === '' || email.value === '' || num.value === '' || relation.value === ''){
        failed.style.display = 'block';
    }
    else{
        setTimeout(() => {
            date.value = '';
            fullname.value = '';
            email.value = '';
            num.value = '';
            relation.value = '';
        }, );

        success.style.display = 'block';
    }


    setTimeout(() => {
        failed.style.display = 'none';
        success.style.display = 'none';
    }, 20000);

}