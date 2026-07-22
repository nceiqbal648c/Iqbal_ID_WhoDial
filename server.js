const express = code => require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// স্ট্যাটিক ফাইলগুলো ব্যবহারের জন্য
app.use(express.static(__dirname));

// রুট ইউআরএলে index.html পাঠানোর জন্য
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
