function ajouterEtudiant() {
    var isValid = true;

    var nom_c = document.getElementById("nom_c");
    var p_nom_c = document.getElementById("nom_c_e");
    var nom_c_patt = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;

    if (!nom_c_patt.test(nom_c.value)) {
        nom_c.style.borderColor = "red";
        p_nom_c.innerText = "Tapez votre nom complet au format valide(Prenom Nom)";
        nom_c.setCustomValidity("Tapez votre nom complet (Prenom Nom)");
        p_nom_c.style.color = "red";
        isValid = false;
    } else {
        nom_c.style.borderColor = "green";
        p_nom_c.innerText = "✓";
        p_nom_c.style.color = "green";
        nom_c.setCustomValidity("");
    }

    var email = document.getElementById("email");
    var p_email = document.getElementById("email_e");
    var email_patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (!email_patt.test(email.value)) {
        email.style.borderColor = "red";
        p_email.innerText = "Tapez votre email au format valide";
        email.setCustomValidity("Tapez votre email au format valide");
        p_email.style.color = "red";
        isValid = false;
    } else {
        email.style.borderColor = "green";
        p_email.innerText = "✓";
        p_email.style.color = "green";
        email.setCustomValidity("");
    }

    var nom_m = document.getElementById("nom_m");
    var p_nom_m = document.getElementById("nom_m_e");
    var nom_m_patt = /^[A-Za-z\s]+$/;

    if (!nom_m_patt.test(nom_m.value)) {
        nom_m.style.borderColor = "red";
        p_nom_m.innerText = "Tapez votre nom de la matiere au format valide";
        nom_m.setCustomValidity("Tapez votre nom de la matiere au format valide");
        p_nom_m.style.color = "red";
        isValid = false;
    } else {
        nom_m.style.borderColor = "green";
        p_nom_m.innerText = "✓";
        p_nom_m.style.color = "green";
        nom_m.setCustomValidity("");
    }

    var note_c1 = document.getElementById("note_c1");
    var p_note_c1 = document.getElementById("note_c1_e");
    var note_c_patt = /^(20(\.0{1,2})?|1?\d(\.\d{1,2})?)$/;

    if (!note_c_patt.test(parseInt(note_c1.value))) {
        note_c1.style.borderColor = "red";
        p_note_c1.innerText = "Note doit être entre 0 et 20";
        note_c1.setCustomValidity("Note doit être entre 0 et 20");
        p_note_c1.style.color = "red";
        isValid = false;
    } else {
        note_c1.style.borderColor = "green";
        p_note_c1.innerText = "✓";
        p_note_c1.style.color = "green";
        note_c1.setCustomValidity("");
    }

    var note_c2 = document.getElementById("note_c2");
    var p_note_c2 = document.getElementById("note_c2_e");

    if (!note_c_patt.test(parseInt(note_c2.value))) {
        note_c2.style.borderColor = "red";
        p_note_c2.innerText = "Note doit être entre 0 et 20";
        note_c2.setCustomValidity("Note doit être entre 0 et 20");
        p_note_c2.style.color = "red";
        isValid = false;
    } else {
        note_c2.style.borderColor = "green";
        p_note_c2.innerText = "✓";
        p_note_c2.style.color = "green";
        note_c2.setCustomValidity("");
    }

    var coe = document.getElementById("coe");
    var p_coe = document.getElementById("coe_e");
    var coe_patt = /^[1-9]\d*$/;

    if (!coe_patt.test(parseFloat(coe.value))) {
        coe.style.borderColor = "red";
        p_coe.innerText = "coefficient doit être un nombre entier positif";
        coe.setCustomValidity("coefficient doit être un nombre entier positif");
        p_coe.style.color = "red";
        isValid = false;
    } else {
        coe.style.borderColor = "green";
        p_coe.innerText = "✓";
        p_coe.style.color = "green";
        coe.setCustomValidity("");
    }

    if (isValid) {
        var table = document.getElementById("table");

        var newRow = document.createElement("tr");

        var cell1 = document.createElement("td");
        cell1.innerText = nom_c.value;
        newRow.appendChild(cell1);

        var cell2 = document.createElement("td");
        cell2.innerText = email.value;
        newRow.appendChild(cell2);

        var cell3 = document.createElement("td");
        cell3.innerText = nom_m.value;
        newRow.appendChild(cell3);

        var cell4 = document.createElement("td");
        cell4.innerText = note_c1.value;
        newRow.appendChild(cell4);

        var cell5 = document.createElement("td");
        cell5.innerText = note_c2.value;
        newRow.appendChild(cell5);

        var cell6 = document.createElement("td");
        cell6.innerText = coe.value;
        newRow.appendChild(cell6);

        var cell7 = document.createElement("td");
        var moy = (parseFloat(note_c1.value) + parseFloat(note_c2.value))/2;
        cell7.innerText = moy;
        newRow.appendChild(cell7);

        table.appendChild(newRow);
        
        document.getElementById("form").reset();

        nom_c.style.borderColor = "";
        p_nom_c.innerText = "";

        email.style.borderColor = "";
        p_email.innerText = "";

        nom_m.style.borderColor = "";
        p_nom_m.innerText = "";

        note_c1.style.borderColor = "";
        p_note_c1.innerText = "";

        note_c2.style.borderColor = "";
        p_note_c2.innerText = "";

        coe.style.borderColor = "";
        p_coe.innerText = "";
    }
}