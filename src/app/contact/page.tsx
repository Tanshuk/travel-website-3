"use client";
import React, { useState, useEffect } from "react";
import "./contact.css";

// Reusing the same places array as in Place.tsx and Book.tsx
const places = [
  {
    country: "India",
    name: "Taj Mahal",
    images: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564507592333-cde813829a11?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A symbol of love and one of the most visited monuments in the world.",
    short: "Iconic marble mausoleum.",
    avgRating: 4.8,
    visitors: "7M+",
    ticketPrice: "INR 1100 (Foreigners), INR 50 (Indians)",
    specialThing: "Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal; changes color with sunlight.",
    bookingUrl: "https://www.tajmahal.gov.in/ticketing.aspx"
  },
  {
    country: "India",
    name: "Goa Beaches",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1f5d14e1a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-5e03a8336da4?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Famous for its vibrant nightlife, golden sands, and blue waters.",
    short: "Golden sand & nightlife.",
    avgRating: 4.7,
    visitors: "6M+",
    ticketPrice: "Free (activities vary)",
    specialThing: "Home to over 40 beaches; known for water sports and Portuguese influence.",
    bookingUrl: "https://www.goatourism.gov.in/"
  },
  {
    country: "France",
    name: "Eiffel Tower",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509477887414-75d1cdae8b75?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511739006586-ad6395c72a9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Iconic Paris landmark with stunning city views.",
    short: "Paris symbol & city view.",
    avgRating: 4.9,
    visitors: "7M+",
    ticketPrice: "€29.40 (Summit), €11.80 (Stairs)",
    specialThing: "Originally temporary for 1889 World's Fair; now lights up with 20,000 bulbs nightly.",
    bookingUrl: "https://www.toureiffel.paris/en"
  },
  {
    country: "USA",
    name: "Grand Canyon",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472396961751-0a325b3d765f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505852679233-d9ab4fbc12b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539185441755-769cead8e1a8?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A natural wonder with breathtaking views and hiking trails.",
    short: "Natural wonder, great hikes.",
    avgRating: 4.95,
    visitors: "5M+",
    ticketPrice: "$35 (Vehicle), $20 (Person)",
    specialThing: "Carved by Colorado River over 6 million years; spans 277 miles.",
    bookingUrl: "https://www.nps.gov/grca/planyourvisit/fees.htm"
  },
  {
    country: "Italy",
    name: "Colosseum",
    images: [
      "https://images.unsplash.com/photo-1525874684015-58382d44dea8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552832230-c5457b1949c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511527661048-7fe73d8e477e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552832230-c5457b1949c7?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ancient Roman amphitheater, a marvel of engineering.",
    short: "Roman amphitheater.",
    avgRating: 4.8,
    visitors: "7M+",
    ticketPrice: "€18-€24",
    specialThing: "Hosted gladiator battles for 50,000 spectators; underground tunnels for animals.",
    bookingUrl: "https://colosseo.it/en/opening-times-and-tickets/"
  },
  {
    country: "Japan",
    name: "Mount Fuji",
    images: [
      "https://images.unsplash.com/photo-1570452188943-8d99d11a0db0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542044896530-6d6f58918d7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578271887552-5ac3a1ad0ed8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610970878459-8f2263d822d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604754742629-0ca721c2c6d4?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Japan’s iconic sacred mountain with stunning views.",
    short: "Sacred mountain.",
    avgRating: 4.9,
    visitors: "2M+",
    ticketPrice: "¥4000 (Climbing Fee)",
    specialThing: "Active volcano; inspires art and literature; perfect cone shape.",
    bookingUrl: "https://www.fujisan-climb.jp/en/"
  },
  {
    country: "Egypt",
    name: "Great Pyramids of Giza",
    images: [
      "https://images.unsplash.com/photo-1530126483408-5d1b1f0c3b7d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547395358-3884c4b9b867?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501436513145-30f24e7f78b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549894233-1c79d9525b6a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ancient wonders of the world, steeped in history.",
    short: "Ancient pyramids.",
    avgRating: 4.85,
    visitors: "4M+",
    ticketPrice: "700 EGP",
    specialThing: "Aligned with Orion's Belt; built with 2.3 million blocks.",
    bookingUrl: "https://egymonuments.com/details/Pyramids"
  },
  {
    country: "Brazil",
    name: "Christ the Redeemer",
    images: [
      "https://images.unsplash.com/photo-1516306971842-5a00d16c33ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516306589127-6b99918d3e0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516306971842-5a00d16c33ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516306589127-6b99918d3e0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Iconic statue overlooking Rio de Janeiro.",
    short: "Iconic Rio statue.",
    avgRating: 4.7,
    visitors: "2M+",
    ticketPrice: "R$24 ($5 USD)",
    specialThing: "Made from soapstone; arms span 28 meters.",
    bookingUrl: "https://paineirascorcovado.com.br/questions/?lang=en"
  },
  {
    country: "China",
    name: "Great Wall of China",
    images: [
      "https://images.unsplash.com/photo-1508711046474-2f4c2d3d6458?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581006851367-3a50ac6a6f6f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544181717-1b2e7ab3c8ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508711046474-2f4c2d3d6458?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Massive ancient wall stretching across northern China.",
    short: "Ancient wall marvel.",
    avgRating: 4.9,
    visitors: "10M+",
    ticketPrice: "CNY 40-60",
    specialThing: "Visible from space (myth, but longest man-made structure).",
    bookingUrl: "https://en.mutianyugreatwall.com/reservation-center/tickets"
  },
  {
    country: "Australia",
    name: "Sydney Opera House",
    images: [
      "https://images.unsplash.com/photo-1519209184-4d686c6b2b1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524820197278-54091683c996?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519209184-4d686c6b2b1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524820197278-54091683c996?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Iconic performing arts center with unique architecture.",
    short: "Unique opera house.",
    avgRating: 4.8,
    visitors: "8M+",
    ticketPrice: "AUD 43 (Tour)",
    specialThing: "Sails designed to resemble ship sails; took 14 years to build.",
    bookingUrl: "https://www.sydneyoperahouse.com/visit"
  },
  {
    country: "Peru",
    name: "Machu Picchu",
    images: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505498733773-4b6d1b80f8b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505498733773-4b6d1b80f8b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ancient Incan city set high in the Andes Mountains.",
    short: "Incan mountain city.",
    avgRating: 4.95,
    visitors: "1M+",
    ticketPrice: "152 PEN",
    specialThing: "Built without mortar; rediscovered in 1911.",
    bookingUrl: "https://www.machupicchu.gob.pe/"
  },
  {
    country: "UK",
    name: "Stonehenge",
    images: [
      "https://images.unsplash.com/photo-1508247967583-7d98236f8b2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504019347908-b45f9b88b63b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508247967583-7d98236f8b2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504019347908-b45f9b88b63b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Prehistoric monument with mysterious stone circles.",
    short: "Mysterious stone circles.",
    avgRating: 4.6,
    visitors: "1M+",
    ticketPrice: "£22-£70",
    specialThing: "Aligned with solstices; stones from 150 miles away.",
    bookingUrl: "https://www.english-heritage.org.uk/visit/places/stonehenge/book-tickets/"
  },
  {
    country: "India",
    name: "Jaipur Amber Fort",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Majestic hilltop fort with intricate architecture.",
    short: "Majestic hilltop fort.",
    avgRating: 4.7,
    visitors: "2M+",
    ticketPrice: "INR 500 (Foreigners)",
    specialThing: "Features mirror palace; elephant rides to entrance.",
    bookingUrl: "https://obms-tourist.rajasthan.gov.in/"
  },
  {
    country: "France",
    name: "Louvre Museum",
    images: [
      "https://images.unsplash.com/photo-1544894076-9e8f27d1b6b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544967082-7b258bcb4e5b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544894076-9e8f27d1b6b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544967082-7b258bcb4e5b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "World’s largest art museum, home to the Mona Lisa.",
    short: "World-class art museum.",
    avgRating: 4.8,
    visitors: "9M+",
    ticketPrice: "€18-€22",
    specialThing: "Houses 380,000 objects; former royal palace.",
    bookingUrl: "https://ticket.louvre.fr/en"
  },
  {
    country: "USA",
    name: "Statue of Liberty",
    images: [
      "https://images.unsplash.com/photo-1507668077129-3e773b5d72a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543862509-86ea32a54781?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507668077129-3e773b5d72a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543862509-86ea32a54781?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507668077129-3e773b5d72a8?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Symbol of freedom and democracy in New York.",
    short: "Symbol of freedom.",
    avgRating: 4.7,
    visitors: "4M+",
    ticketPrice: "$25 (Ferry + Grounds)",
    specialThing: "Gift from France; interior torch replaced in 1986.",
    bookingUrl: "https://www.statueoflibertytickets.com/"
  },
  {
    country: "Spain",
    name: "Sagrada Familia",
    images: [
      "https://images.unsplash.com/photo-1506459225024-1428096450?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519642918688-7e2a9d02b232?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506459225024-1428096450?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519642918688-7e2a9d02b232?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506459225024-1428096450?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Gaudi’s unfinished masterpiece in Barcelona.",
    short: "Gaudi’s masterpiece.",
    avgRating: 4.9,
    visitors: "3M+",
    ticketPrice: "€18-€33",
    specialThing: "Construction ongoing since 1882; funded by donations.",
    bookingUrl: "https://sagradafamilia.org/en/tickets"
  },
  {
    country: "Thailand",
    name: "Wat Arun",
    images: [
      "https://images.unsplash.com/photo-1563492065599-3520f7754524?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563492065599-3520f7754524?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563492065599-3520f7754524?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563492065599-3520f7754524?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Stunning riverside temple in Bangkok.",
    short: "Riverside temple.",
    avgRating: 4.8,
    visitors: "2M+",
    ticketPrice: "200 THB",
    specialThing: "Decorated with seashells and porcelain; glows at dawn.",
    bookingUrl: "https://www.watarunbangkok.com/"
  },
  {
    country: "Turkey",
    name: "Hagia Sophia",
    images: [
      "https://images.unsplash.com/photo-1593604340847-4d1b3d7e9b9f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593604340847-4d1b3d7e9b9f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593604340847-4d1b3d7e9b9f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593604340847-4d1b3d7e9b9f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593604340847-4d1b3d7e9b9f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Historic mosque and former cathedral in Istanbul.",
    short: "Historic mosque.",
    avgRating: 4.8,
    visitors: "3M+",
    ticketPrice: "€25",
    specialThing: "Built in 537 AD; features largest dome of its time.",
    bookingUrl: "https://getyourguide.com/istanbul-l56/istanbul-hagia-sophia-skip-the-line-ticket-museum-option-t709111/"
  },
  {
    country: "Greece",
    name: "Santorini",
    images: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd792e3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd792e3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Picturesque island with whitewashed buildings and blue domes.",
    short: "Picturesque island.",
    avgRating: 4.9,
    visitors: "2M+",
    ticketPrice: "Free (sites vary)",
    specialThing: "Volcanic caldera; famous for sunsets and beaches.",
    bookingUrl: "https://www.santorini.gr/en/"
  },
  {
    country: "Mexico",
    name: "Chichen Itza",
    images: [
      "https://images.unsplash.com/photo-1515586838455-8f8f59fb0bd5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515586838455-8f8f59fb0bd5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515586838455-8f8f59fb0bd5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515586838455-8f8f59fb0bd5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515586838455-8f8f59fb0bd5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ancient Mayan city with iconic pyramids.",
    short: "Mayan pyramid city.",
    avgRating: 4.8,
    visitors: "2M+",
    ticketPrice: "648 MXN",
    specialThing: "Equinox shadow creates serpent illusion.",
    bookingUrl: "https://www.chichenitza.com/tickets"
  },
  {
    country: "Canada",
    name: "Banff National Park",
    images: [
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1466873767530-f9ce91bcb30d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1466873767530-f9ce91bcb30d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Stunning national park with lakes and mountains.",
    short: "Scenic lakes & mountains.",
    avgRating: 4.9,
    visitors: "4M+",
    ticketPrice: "CAD 11 (Adult)",
    specialThing: "Home to Lake Louise; oldest national park in Canada.",
    bookingUrl: "https://parks.canada.ca/pn-np/ab/banff/visit/passer-passes"
  },
  {
    country: "South Africa",
    name: "Table Mountain",
    images: [
      "https://images.unsplash.com/photo-1516683087865-58a7f1116a9a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516683087865-58a7f1116a9a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516683087865-58a7f1116a9a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516683087865-58a7f1116a9a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516683087865-58a7f1116a9a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Iconic flat-topped mountain overlooking Cape Town.",
    short: "Flat-topped mountain.",
    avgRating: 4.7,
    visitors: "3M+",
    ticketPrice: "ZAR 435 (Cable Car)",
    specialThing: "Aerial cableway rotates 360 degrees; biodiversity hotspot.",
    bookingUrl: "https://www.tablemountain.net/plan-your-visit/buy-tickets"
  },
  {
    country: "Russia",
    name: "Red Square",
    images: [
      "https://images.unsplash.com/photo-1513326738556-79d3b4e0115d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513326738556-79d3b4e0115d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513326738556-79d3b4e0115d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513326738556-79d3b4e0115d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Historic square in Moscow with Saint Basil’s Cathedral.",
    short: "Historic Moscow square.",
    avgRating: 4.8,
    visitors: "5M+",
    ticketPrice: "Free (sites vary)",
    specialThing: "Site of military parades; Lenin's Mausoleum.",
    bookingUrl: "https://www.moscow.info/red-square/"
  },
  {
    country: "India",
    name: "Kerala Backwaters",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c3b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c3b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c3b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c3b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c3b7a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Serene waterways with houseboat cruises.",
    short: "Serene backwaters.",
    avgRating: 4.7,
    visitors: "1M+",
    ticketPrice: "Varies (Boat tours $50+)",
    specialThing: "Largest backwater system in India; houseboat living.",
    bookingUrl: "https://www.keralatourism.org/"
  },
  {
    country: "New Zealand",
    name: "Milford Sound",
    images: [
      "https://images.unsplash.com/photo-1516826957135-2357ed601b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-2357ed601b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-2357ed601b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-2357ed601b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-2357ed601b7a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Dramatic fjord with waterfalls and marine life.",
    short: "Dramatic fjord.",
    avgRating: 4.95,
    visitors: "1M+",
    ticketPrice: "NZD 100+ (Cruise)",
    specialThing: "Deeper than surrounding mountains are tall; underwater observatory.",
    bookingUrl: "https://www.milford-sound.co.nz/milford-sound-cruises/"
  }
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [relatedDestination, setRelatedDestination] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [contactResult, setContactResult] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";
    if (!inquiryType) newErrors.inquiryType = "Please select an inquiry type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    // Reset errors when user starts typing
    setErrors({});
  }, [name, email, subject, message, inquiryType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Mock support ticket number
    const ticketNumber = `SUP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    let result = `Thank you, ${name}! Your inquiry has been submitted. Support Ticket: ${ticketNumber}. `;
    result += `We'll contact you via ${contactMethod} within 24-48 hours. `;
    if (relatedDestination) {
      const selectedPlace = places.find(
        (place) => `${place.country} - ${place.name}` === relatedDestination
      );
      if (selectedPlace) {
        result += `Regarding: ${relatedDestination}. Special: ${selectedPlace.specialThing}. `;
      }
    }
    setContactResult(result);

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setInquiryType("");
    setRelatedDestination("");
    setContactMethod("email");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        {/* Contact Info Section */}
        <div className="contact-info-card">
          <h3 className="contact-section-title">Contact Information</h3>
          <div className="contact-info">
            <p><span className="contact-icon">📧</span> Email: support@luxurytravel.com</p>
            <p><span className="contact-icon">📞</span> Phone: +1-800-TRAVEL (872-835)</p>
            <p><span className="contact-icon">📍</span> Address: 123 Wanderlust Ave, Globe City, World</p>
            <p><span className="contact-icon">⏰</span> Hours: 24/7 Customer Support</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-card">
          <h3 className="contact-section-title">Send Us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name" className="contact-label">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className={`contact-input ${errors.name ? "contact-input-error" : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="contact-error">{errors.name}</span>}
            </div>
            <div className="contact-field">
              <label htmlFor="email" className="contact-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`contact-input ${errors.email ? "contact-input-error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <span className="contact-error">{errors.email}</span>}
            </div>
            <div className="contact-field">
              <label htmlFor="phone" className="contact-label">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                className="contact-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="contact-field">
              <label htmlFor="subject" className="contact-label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className={`contact-input ${errors.subject ? "contact-input-error" : ""}`}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter the subject of your inquiry"
              />
              {errors.subject && <span className="contact-error">{errors.subject}</span>}
            </div>
            <div className="contact-field">
              <label htmlFor="inquiryType" className="contact-label">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                className={`contact-input ${errors.inquiryType ? "contact-input-error" : ""}`}
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
              >
                <option value="" disabled>
                  Select inquiry type
                </option>
                <option value="General">General Inquiry</option>
                <option value="Booking Support">Booking Support</option>
                <option value="Custom Tour">Custom Tour Request</option>
              </select>
              {errors.inquiryType && <span className="contact-error">{errors.inquiryType}</span>}
            </div>
            <div className="contact-field">
              <label htmlFor="relatedDestination" className="contact-label">
                Related Destination (Optional)
              </label>
              <select
                id="relatedDestination"
                className="contact-input"
                value={relatedDestination}
                onChange={(e) => setRelatedDestination(e.target.value)}
              >
                <option value="">Select a destination (optional)</option>
                {places.map((place) => (
                  <option key={`${place.country}-${place.name}`} value={`${place.country} - ${place.name}`}>
                    {place.country} - {place.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="contact-field">
              <label className="contact-label">Preferred Contact Method</label>
              <div className="contact-radio-group">
                <label className="contact-radio">
                  <input
                    type="radio"
                    value="email"
                    checked={contactMethod === "email"}
                    onChange={(e) => setContactMethod(e.target.value)}
                  />
                  Email
                </label>
                <label className="contact-radio">
                  <input
                    type="radio"
                    value="phone"
                    checked={contactMethod === "phone"}
                    onChange={(e) => setContactMethod(e.target.value)}
                  />
                  Phone
                </label>
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="message" className="contact-label">
                Message
              </label>
              <textarea
                id="message"
                className={`contact-input contact-textarea ${errors.message ? "contact-input-error" : ""}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message or inquiry details"
                rows={5}
              />
              {errors.message && <span className="contact-error">{errors.message}</span>}
            </div>
            <button type="submit" className="contact-btn">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Confirmation Section */}
        {contactResult && (
          <div className="contact-result">
            <h3 className="contact-section-title">Inquiry Submitted</h3>
            <p>{contactResult}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;