
telephony = {
  'A': "Alfa",
  'B': "Brava",
  'C': "Charlie",
  'D': "Delta",
  'E': "Echo",
  'F': "Foxtrot",
  'G': "Golf",
  'H': "Hotel",
  'I': "India",
  'J': "Juliett",
  'K': "Kilo",
  'L': "Lima",
  'M': "Mike",
  'N': "November",
  'O': "Oscar",
  'P': "Papa",
  'Q': "Quebec",
  'R': "Romeo",
  'S': "Sierra",
  'T': "Tango",
  'U': "Uniform",
  'V': "Victor",
  'W': "Whiskey",
  'X': "Xray",
  'Y': "Yankee",
  'Z': "Zulu",
  '1': "One",
  '2': "Two",
  '3': "Three",
  '4': "Four",
  '5': "Five",
  '6': "Six",
  '7': "Seven",
  '8': "Eight",
  '9': "Nine",
  '0': "Zero",
  ' ': 'space', 
  '\n': 'new-line'
};

phonic = {
  'A': "AL-FHA",
  'B': "BRAH-VOH",
  'C': "CHAR-LEE",
  'D': "DELL-TAH",
  'E': "ECK-OH",
  'F': "FOKS-TROT",
  'G': "GOLD",
  'H': "HOH-TEL",
  'I': "IN-DEE-AH",
  'J': "JEW-LEE-ETT",
  'K': "KEY-LOH",
  'L': "LEE-MAH",
  'M': "MIKE",
  'N': "NO-VEM-BER",
  'O': "OSS-CAH",
  'P': "PAH-PAH",
  'Q': "KEH-BECK",
  'R': "ROW-ME-OH",
  'S': "SEE-AIR-RAH",
  'T': "TANG-GO",
  'U': "YOU-NEE-FORM",
  'V': "VIK-TAH",
  'W': "WISS-KEY",
  'X': "ECKS-RAY",
  'Y': "YANG-KEY",
  'Z': "ZOO-LOO",
  '1': "WUN",
  '2': "TOO",
  '3': "TREE",
  '4': "FOW-ER",
  '5': "FIFE",
  '6': "SIX",
  '7': "SEV-EN",
  '8': "AIT",
  '9': "NIN-ER",
  '0': "ZEE-RO",
  ' ': ' ', 
  '\n': ' '
};




function solve() {
  var textInput = document.getElementById('textInput').value
  var result = document.getElementById('result');
  result.innerHTML = ""

  result.innerHTML += `<table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">CHARACTER</th>
        <th scope="col">TELEPHONY</th>
        <th scope="col">PHONIC (PRONUNCIATION)</th>
      </tr>
    </thead>
    <tbody id="tableRows">
    </tbody>
  </table>`

  tableRows = document.getElementById('tableRows');

  for (var i = 0; i < textInput.length; i++) {
    tableRows.innerHTML += `<tr>
        <th scope="row">` + textInput.charAt(i) + `</th>
        <td>` + telephony[textInput.charAt(i).toUpperCase()] + `</td>
        <td>` + phonic[textInput.charAt(i).toUpperCase()] + `</td>
      </tr>`
  }
}

function resetResult() {
  // const myNode = document.getElementById('listResult');
  document.getElementById("result").innerHTML = "";
  document.getElementById("textInput").value = "";

}