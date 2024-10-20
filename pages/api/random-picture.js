export default function handler(req, res) {
  // Array of picture URLs (replace these with your actual image links)
  const pictures = [
    '"https://drive.google.com/file/d/1ZmxZ0-rU0edjWiPJWFz-U9-AC_Uss836/view?usp=drive_link',
    'https://drive.google.com/file/d/1ZmxZ0-rU0edjWiPJWFz-U9-AC_Uss836/view?usp=drive_link',
    'https://drive.google.com/file/d/1uMIGxyzYeEldqIoaM1xatj4Kklex8qXD/view?usp=drive_link'
  ];

  // Select a random picture from the array
  const randomPicture = pictures[Math.floor(Math.random() * pictures.length)];

  // Return the random picture in JSON format
  res.status(200).json({ picture: randomPicture });
}
