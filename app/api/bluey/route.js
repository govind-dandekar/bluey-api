export async function GET() {
  // For example, fetch data from your DB here
  const users = [
    {
      id: 1,
      name: "Winton",
      photoSource: "/winton.png",
      breed: "English Bulldog",
      quote: "Am I a space invader?",
    },
    {
      id: 2,
      name: "Rusty",
      photoSource: "/rusty.png",
      breed: "Red Kelpie",
      quote: "Hello Doctor Ladies, do you sell crutches?",
    },
    {
      id: 3,
      name: "Indy",
      photoSource: "/indy.png",
      breed: "Afghan Hound",
      quote: "Have these got wheat, sugar, gluten or dairy in them?",
    },
    {
      id: 4,
      name: "Jack",
      photoSource: "/jack.png",
      breed: "Jack Russel Terrier",
      quote: "One thing I can do is run, Im a Jack Russell!",
    },
    {
      id: 5,
      name: "Coco",
      photoSource: "/coco.png",
      breed: "Poodle",
      quote: "Husband, be kind to your lion",
    },
    {
      id: 6,
      name: "Honey",
      photoSource: "/honey.png",
      breed: "Beagle",
      quote: "Ohh! Everyones problem is a real pickle, except mine",
    },
    {
      id: 7,
      name: "Mackenzie",
      photoSource: "/mackenzie.png",
      breed: "Border Collie",
      quote: "Come out here at once you cheeky lion!",
    },
    {
      id: 8,
      name: "Chloe",
      photoSource: "/chloe.png",
      breed: "Dalmatian",
      quote: "You have the heart of a hero, my princess!",
    },
  ];

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
