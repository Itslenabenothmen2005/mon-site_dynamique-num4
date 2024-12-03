function verif1() {
  let tel = document.getElementById("tel").value;
  if (tel.length != 8 || chiffre(tel) == false) {
    alert("erreur tel");
    return false;
  }
  let cat = document.getElementById("cat").selectedIndex;
  if (cat < 1) {
    alert("erreur cat");
    return false;
  }
  let desc = document.getElementById("desc").value;
  if (desc == "" && cat == 4) {
    alert("erreur desc");
    return false;
  }
}
function chiffre(ch) {
  let nb = 0;
  for (i = 0; i < ch.length; i++) {
    if (ch.charAt(i) >= "0" && ch.charAt(i) <= "9") nb++;
  }
  return nb == ch.length;
}
