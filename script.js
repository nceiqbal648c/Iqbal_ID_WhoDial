async function searchNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    const resultCard = document.getElementById('resultCard');
    const resName = document.getElementById('resName');
    const resPhone = document.getElementById('resPhone');
    const resTag = document.getElementById('resTag');

    if (!phoneNumber) {
        alert('আরে বস, আগে একটা নম্বর তো লিখুন!');
        return;
    }

    resultCard.classList.remove('hidden');
    resName.innerText = "Name: Searching...";
    resPhone.innerText = "Phone: " + phoneNumber;
    resTag.innerText = "Tag: Fetching from server...";

    try {
        // রেন্ডার লাইভ ব্যাকএন্ড সার্ভার কানেকশন
        const response = await fetch(`https://iqbal-id-whodial.onrender.com/search?phone=${encodeURIComponent(phoneNumber)}`);

        if (!response.ok) {
            throw new Error('API connection failed');
        }

        const data = await response.json();

        resName.innerText = "Name: " + (data.name || "Unknown Caller");
        resPhone.innerText = "Phone: " + (data.phone || phoneNumber);
        resTag.innerText = "Tag: " + (data.tag || "Safe / Verified");

    } catch (error) {
        // ব্যাকএন্ড অফলাইন থাকলে ফলব্যাক হ্যান্ডলিং
        if (phoneNumber.includes("01700000000")) {
            resName.innerText = "Name: Iqbal Ahmed (Boss 👑)";
            resPhone.innerText = "Phone: " + phoneNumber;
            resTag.innerText = "Tag: Project Director";
        } else {
            resName.innerText = "Name: Server Offline / Local Mode";
            resPhone.innerText = "Phone: " + phoneNumber;
            resTag.innerText = "Tag: Unverified Number";
        }
    }
}
