const hotels = [
  {
    name: "Hôtel La Palmeraie - Bouznika",
    image: "/images/hotel1.jpeg", // Remplace avec l'URL réelle
    rooms: [
      { type: "1 CHAMBRE + SALON", price: "850 MAD / nuit", button: "Réserver" },
      { type: "2 CHAMBRES + SALON", price: "1300 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Les Dunes - Cabo Negro",
    image: "/images/hotel2.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1100 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1700 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Royal Beach - Cabo Negro",
    image: "/images/hotel3.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1150 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1800 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Marina Vista - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1050 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1750 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Océane - Cabo Negro",
    image: "/images/hotel5.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1000 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1600 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Lagon Bleu - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "980 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1550 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Soleil Levant - Cabo Negro",
    image: "/images/hotel7.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1020 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1650 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Les Jardins de la Mer - Cabo Negro",
    image: "/images/hotel8.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "990 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1500 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel La Palmeraie - Bouznika",
    image: "/images/hotel9.jpeg", // Remplace avec l'URL réelle
    rooms: [
      { type: "1 CHAMBRE + SALON", price: "850 MAD / nuit", button: "Réserver" },
      { type: "2 CHAMBRES + SALON", price: "1300 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Les Dunes - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1100 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1700 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Royal Beach - Cabo Negro",
    image: "/images/hotel1.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1150 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1800 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Marina Vista - Cabo Negro",
    image: "/images/hotel2.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1050 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1750 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Océane - Cabo Negro",
    image: "/images/hotel3.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1000 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1600 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Lagon Bleu - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "980 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1550 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Soleil Levant - Cabo Negro",
    image: "/images/hotel5.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1020 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1650 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Les Jardins de la Mer - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "990 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1500 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel La Palmeraie - Bouznika",
    image: "/images/hotel7.jpeg", // Remplace avec l'URL réelle
    rooms: [
      { type: "1 CHAMBRE + SALON", price: "850 MAD / nuit", button: "Réserver" },
      { type: "2 CHAMBRES + SALON", price: "1300 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Les Dunes - Cabo Negro",
    image: "/images/hotel8.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1100 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1700 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Royal Beach - Cabo Negro",
    image: "/images/hotel9.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1150 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1800 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Marina Vista - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1050 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1750 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Les Dunes - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1100 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1700 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Royal Beach - Cabo Negro",
    image: "/images/hotel1.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1150 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1800 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Marina Vista - Cabo Negro",
    image: "/images/hotel2.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1050 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1750 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Océane - Cabo Negro",
    image: "/images/hotel3.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1000 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1600 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Lagon Bleu - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "980 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1550 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Soleil Levant - Cabo Negro",
    image: "/images/hotel5.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1020 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1650 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Les Jardins de la Mer - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "990 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1500 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel La Palmeraie - Bouznika",
    image: "/images/hotel7.jpeg", // Remplace avec l'URL réelle
    rooms: [
      { type: "1 CHAMBRE + SALON", price: "850 MAD / nuit", button: "Réserver" },
      { type: "2 CHAMBRES + SALON", price: "1300 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Les Dunes - Cabo Negro",
    image: "/images/hotel8.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1100 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1700 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Royal Beach - Cabo Negro",
    image: "/images/hotel9.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1150 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1800 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Marina Vista - Cabo Negro",
    image: "/images/hotel6.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1050 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1750 MAD / nuit", button: "Réserver" }
    ]
  },
  /*{
    name: "Résidence Océane - Cabo Negro",
    image: "téléchargement (5).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1000 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1600 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Lagon Bleu - Cabo Negro",
    image: "téléchargement (6).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "980 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1550 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Soleil Levant - Cabo Negro",
    image: "téléchargement (7).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1020 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1650 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Les Jardins de la Mer - Cabo Negro",
    image: "téléchargement.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "990 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1500 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel La Palmeraie - Bouznika",
    image: "téléchargement (1).jpeg", // Remplace avec l'URL réelle
    rooms: [
      { type: "1 CHAMBRE + SALON", price: "850 MAD / nuit", button: "Réserver" },
      { type: "2 CHAMBRES + SALON", price: "1300 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Les Dunes - Cabo Negro",
    image: "téléchargement (2).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1100 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1700 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Royal Beach - Cabo Negro",
    image: "téléchargement (3).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1150 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1800 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Marina Vista - Cabo Negro",
    image: "téléchargement (4).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1050 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1750 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Océane - Cabo Negro",
    image: "téléchargement (5).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1000 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1600 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Lagon Bleu - Cabo Negro",
    image: "téléchargement (6).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "980 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1550 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Résidence Soleil Levant - Cabo Negro",
    image: "téléchargement (7).jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "1020 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1650 MAD / nuit", button: "Réserver" }
    ]
  },
  {
    name: "Hôtel Les Jardins de la Mer - Cabo Negro",
    image: "téléchargement.jpeg",
    rooms: [
      { type: "2 CHAMBRES + SALON", price: "990 MAD / nuit", button: "Réserver" },
      { type: "3 CHAMBRES + 2 SALONS", price: "1500 MAD / nuit", button: "Réserver" }
    ]
  }*/
];

export default hotels;