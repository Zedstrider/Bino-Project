// Function to handle link generation
function generate() {
    const query = document.getElementById('query').value;
    
    // Check if input is empty
    if(!query) {
        alert("Please enter a query!");
        return;
    }

    // Placeholder number for Bino. 
    const binoNumber = "919999999999"; 
    
    // Encode the query so it works in a URL
    const encodedQuery = encodeURIComponent(query);
    
    // Create the WhatsApp deep link
    const waLink = `https://wa.me/${binoNumber}?text=${encodedQuery}`;
    
    // Show the output section
    const outputDiv = document.getElementById('output');
    outputDiv.style.display = 'block';
    
    // Update the link text and href
    const linkEl = document.getElementById('link');
    linkEl.href = waLink;
    linkEl.innerText = waLink;
    
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = "";
    
    // Generate new QR code
    new QRCode(document.getElementById("qrcode"), {
        text: waLink,
        width: 150,
        height: 150,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

// Add event listener to the button
document.getElementById('generateBtn').addEventListener('click', generate);