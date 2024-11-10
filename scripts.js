function exp_calculator() {
    // Coleta dados //
    // Status
    var atk = parseFloat(document.getElementById('atk').value);
    var hp = parseFloat(document.getElementById('hp').value);
    // Valor das Habilidades
    var ab1_N = parseFloat(document.getElementById('ab_1_N').value);
    var ab2_N = parseFloat(document.getElementById('ab_2_N').value);
    var ab3_N = parseFloat(document.getElementById('ab_3_N').value);
    
    var _ab1 = document.getElementById('ab_1').value;
    var _ab2 = document.getElementById('ab_2').value;
    var _ab3 = document.getElementById('ab_3').value;
    
    var all_ab = document.querySelectorAll('#abilities option');
    var ab1, ab2, ab3;
    let found;
    
    // Ab 1
    found = false;
    for (var i of all_ab) {
        if (i.value === _ab1) {
            ab1 = parseFloat(i.getAttribute('data-exp')); 
            found = true;
            break;
        }
    }
    if (!found) { ab1 = 0}

    // Ab 2
    found = false;
    for (var i of all_ab) {
        if (i.value === _ab2) {
            ab2 = parseFloat(i.getAttribute('data-exp')); 
            found = true;
            break;
        }
    }
    if (!found) { ab2 = 0}

    // Ab 3
    found = false;
    for (var i of all_ab) {
        if (i.value === _ab3) {
            ab3 = parseFloat(i.getAttribute('data-exp')); 
            found = true;
            break;
        }
    }
    if (!found) { ab3 = 0}

    // Modificador
    var modfy = parseFloat(document.getElementById('exp_modfy').value);

    // Calculo
    var stats = (atk + hp)/2;
    var abilities = (ab1 + ab2 + ab3) + (ab1_N + ab2_N + ab3_N);

    var total_exp = (stats + abilities + modfy);
    var result = Math.round(total_exp/2)

    document.getElementById('lvl').textContent = ("Level: " + result);
    document.getElementById('exp').textContent = ("Exp: " + total_exp);
    }   