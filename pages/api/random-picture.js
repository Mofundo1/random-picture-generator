export default function handler(req, res) {
  // Array of picture URLs (replace these with your actual image links)
  const pictures = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  // Select a random picture from the array
  const randomPicture = pictures[Math.floor(Math.random() * pictures.length)];

  // Return the random picture in JSON format
  res.status(200).json({ picture: randomPicture });
}
