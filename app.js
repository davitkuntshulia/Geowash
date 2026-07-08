const fallbackLocations = [
  {
    "name": "თბილისი მოლი (Tbilisi Mall)",
    "address": "დავით აღმაშენებლის ხეივანი, მე-16 კმ",
    "category": "სავაჭრო ცენტრი - დახურული (მიწისქვეშა)",
    "capacity": "2700",
    "status": "უფასო",
    "potential": "Stay: 2.5 საათი; commercial potential: უმაღლესი; recommended wash: მშრალი (ეკო) / სტანდარტული.",
    "importance": "High",
    "lat": 41.81653,
    "lng": 44.772709
  },
  {
    "name": "ისთ ფოინთი (East Point)",
    "address": "ალექსანდრე თვალჭრელიძის ქუჩა #2",
    "category": "სავაჭრო ცენტრი - ღია / ნაწილობრივ დახურული",
    "capacity": "2000+",
    "status": "უფასო",
    "potential": "Stay: 3 საათი; commercial potential: უმაღლესი; recommended wash: სტანდარტული (ღია სივრცე).",
    "importance": "High",
    "lat": 41.68967,
    "lng": 44.896561
  },
  {
    "name": "სითი მოლი საბურთალო",
    "address": "ვაჟა-ფშაველას გამზირი #70",
    "category": "სავაჭრო ცენტრი - მრავალდონიანი მიწისქვეშა",
    "capacity": "1500",
    "status": "ფასიანი",
    "potential": "Stay: 2 საათი; commercial potential: უმაღლესი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "High",
    "lat": 41.724383,
    "lng": 44.735658
  },
  {
    "name": "გალერია თბილისი",
    "address": "შოთა რუსთაველის გამზირი #2-4",
    "category": "სავაჭრო ცენტრი - დახურული (მიწისქვეშა)",
    "capacity": "300+",
    "status": "ფასიანი",
    "potential": "Stay: 1.5 საათი; commercial potential: უმაღლესი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "High",
    "lat": 41.694964,
    "lng": 44.799834
  },
  {
    "name": "ლისის ტბის პარკინგი (Gymnasia)",
    "address": "ლისის ტბის გარშემო გზა",
    "category": "სპორტი / რეკრეაცია - ორგანიზებული ღია",
    "capacity": "200+",
    "status": "ფასიანი (3 ლარი)",
    "potential": "Stay: 2 საათი; commercial potential: იდეალური ნიშა; recommended wash: ორთქლის / მშრალი რეცხვა.",
    "importance": "High",
    "lat": 41.7417,
    "lng": 44.7389
  },
  {
    "name": "ოლიმპიური აუზი (Aqua Pura)",
    "address": "გიორგი ბალანჩინის ქუჩა (საელჩოსთან)",
    "category": "სპორტული კომპლექსი - დიდი ღია ეზო",
    "capacity": "150+",
    "status": "უფასო",
    "potential": "Stay: 2 საათი; commercial potential: იდეალური ნიშა; recommended wash: სტანდარტული / ეკო რეცხვა.",
    "importance": "High",
    "lat": 41.7662,
    "lng": 44.7698
  },
  {
    "name": "Oktopus Fitness Club",
    "address": "ნინო რამიშვილის ქუჩა #33",
    "category": "ფიტნეს ცენტრი - ორგანიზებული ღია",
    "capacity": "100+",
    "status": "უფასო",
    "potential": "Stay: 1.5 საათი; commercial potential: პრემიუმ სეგმენტი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "High",
    "lat": 41.711863,
    "lng": 44.767138
  },
  {
    "name": "კუს ტბის პარკინგი",
    "address": "კუს ტბის ქუჩა (ზედა პლატო)",
    "category": "სპორტი / რეკრეაცია - ორგანიზებული ღია",
    "capacity": "100+",
    "status": "ფასიანი",
    "potential": "Stay: 2 საათი; commercial potential: მაღალშემოსავლიანი; recommended wash: ორთქლის / მშრალი რეცხვა.",
    "importance": "High",
    "lat": 41.7028,
    "lng": 44.7515
  },
  {
    "name": "GymBreeze (ნინოშვილის ქუჩა)",
    "address": "ეგნატე ნინოშვილის ქუჩა #64",
    "category": "სპორტი (პადელი) - იზოლირებული შიდა ეზო",
    "capacity": "50+",
    "status": "უფასო / ფასიანი ეზო",
    "potential": "Stay: 1.5 საათი; commercial potential: მაღალი აქტივობა; recommended wash: მშრალი / ეკო რეცხვა.",
    "importance": "High",
    "lat": 41.717672,
    "lng": 44.796783
  },
  {
    "name": "Fit Club by ARTHOUSE",
    "address": "ლადო გუდიაშვილის ქუჩა #18",
    "category": "ფიტნეს / აუზი - დახურული (მიწისქვეშა)",
    "capacity": "50+",
    "status": "ფასიანი",
    "potential": "Stay: 2 საათი; commercial potential: Luxury სეგმენტი; recommended wash: პრემიუმ მშრალი დეტეილინგი.",
    "importance": "High",
    "lat": 41.697087,
    "lng": 44.800111
  },
  {
    "name": "ოლიმპიური სასახლე",
    "address": "უნივერსიტეტის ქუჩა #15ა",
    "category": "სპორტული კომპლექსი - დაცული გარე ეზო",
    "capacity": "100+",
    "status": "ფასიანი",
    "potential": "Stay: 1.5 საათი; commercial potential: მაღალი; recommended wash: სტანდარტული / ეკო რეცხვა.",
    "importance": "High",
    "lat": 41.718045,
    "lng": 44.726769
  },
  {
    "name": "GYM13",
    "address": "ნიკიფორე ირბახის ქუჩა #17",
    "category": "ფიტნეს ცენტრი - საკუთარი ღია პარკინგი",
    "capacity": "80+",
    "status": "უფასო",
    "potential": "Stay: 1.5 საათი; commercial potential: მაღალი; recommended wash: სტანდარტული (გარე).",
    "importance": "High",
    "lat": 41.692904,
    "lng": 44.820569
  },
  {
    "name": "GOLD'S GYM",
    "address": "აკაკი ბელიაშვილის ქუჩა #1",
    "category": "ფიტნეს ცენტრი - საკუთარი ღია ეზო",
    "capacity": "70+",
    "status": "უფასო",
    "potential": "Stay: 1.5 საათი; commercial potential: მაღალი; recommended wash: სტანდარტული / ეკო რეცხვა.",
    "importance": "High",
    "lat": 41.754613,
    "lng": 44.777454
  },
  {
    "name": "Go Fitness",
    "address": "დავით გურამიშვილის გამზირი #15",
    "category": "ფიტნეს ცენტრი - მიწისზედა / მიწისქვეშა",
    "capacity": "70+",
    "status": "უფასო",
    "potential": "Stay: 1.5 საათი; commercial potential: მაღალი; recommended wash: მშრალი / ეკო რეცხვა.",
    "importance": "High",
    "lat": 41.756453,
    "lng": 44.78834
  },
  {
    "name": "ფაბრიკა (Fabrika)",
    "address": "ეგნატე ნინოშვილის ქუჩა #8",
    "category": "კულტურული სივრცე - შიდა ეზო / ქუჩა",
    "capacity": "60+",
    "status": "ფასიანი / უფასო",
    "potential": "Stay: 2 საათი; commercial potential: მაღალი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "High",
    "lat": 41.709559,
    "lng": 44.802776
  },
  {
    "name": "რიყის პარკის პარკინგი",
    "address": "მტკვრის მარცხენა სანაპირო",
    "category": "მუნიციპალური - დახურული (მიწისქვეშა)",
    "capacity": "350",
    "status": "ფასიანი",
    "potential": "Stay: 1.5 საათი; commercial potential: სტაბილური ნაკადი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "High",
    "lat": 41.6926,
    "lng": 44.8103
  },
  {
    "name": "თბილისი ცენტრალი",
    "address": "სადგურის მოედანი #2",
    "category": "სავაჭრო ცენტრი - დახურული მრავალდონიანი",
    "capacity": "250+",
    "status": "ფასიანი",
    "potential": "Stay: 1 საათი; commercial potential: სტაბილური ნაკადი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "Medium",
    "lat": 41.722578,
    "lng": 44.796442
  },
  {
    "name": "ორბელიანის მოედნის პარკინგი",
    "address": "ალექსანდრე პუშკინის ქუჩა",
    "category": "მუნიციპალური - მრავალდონიანი მიწისქვეშა",
    "capacity": "230+",
    "status": "ფასიანი",
    "potential": "Stay: 1 საათი; commercial potential: სტაბილური ნაკადი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "Medium",
    "lat": 41.694937,
    "lng": 44.802241
  },
  {
    "name": "ისანი მოლი / კარფური",
    "address": "ნავთლუღის ქუჩა #8ა",
    "category": "სავაჭრო ცენტრი - მიწისზედა / მიწისქვეშა",
    "capacity": "150+",
    "status": "უფასო (2 სთ)",
    "potential": "Stay: 50 წუთი; commercial potential: სწრაფი ბრუნვა; recommended wash: მშრალი / ეკო რეცხვა.",
    "importance": "Medium",
    "lat": 41.68301,
    "lng": 44.841121
  },
  {
    "name": "მთაწმინდის პარკის ავტოსადგომი",
    "address": "მთაწმინდის პლატო",
    "category": "რეკრეაცია - ღია მოედანი",
    "capacity": "150+",
    "status": "ფასიანი",
    "potential": "Stay: 3 საათი; commercial potential: სეზონური/შაბათ-კვირა; recommended wash: სტანდარტული (გარე).",
    "importance": "High",
    "lat": 41.6957,
    "lng": 44.7908
  },
  {
    "name": "დიდუბე პლაზა",
    "address": "აკაკი წერეთლის გამზირი #116",
    "category": "ბიზნეს ცენტრი - შიდა და გარე ეზო",
    "capacity": "150+",
    "status": "ფასიანი",
    "potential": "Stay: 2 საათი; commercial potential: კორპორატიული; recommended wash: მშრალი / ორთქლის რეცხვა.",
    "importance": "High",
    "lat": 41.73839,
    "lng": 44.780508
  },
  {
    "name": "აქსის თაუერსი (Axis Towers)",
    "address": "ილია ჭავჭავაძის გამზირი #37",
    "category": "ბიზნეს / მარკეტი - დახურული (მიწისქვეშა)",
    "capacity": "100+",
    "status": "ფასიანი",
    "potential": "Stay: 1 საათი; commercial potential: პრემიუმ კლიენტები; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "High",
    "lat": 41.711801,
    "lng": 44.758379
  },
  {
    "name": "Padel Island EXPO Park",
    "address": "აკაკი წერეთლის გამზირი #118",
    "category": "სპორტი (პადელი) - ექსპო ჯორჯიას ღია ეზო",
    "capacity": "100+",
    "status": "ფასიანი",
    "potential": "Stay: 1.5 საათი; commercial potential: სტაბილური; recommended wash: სტანდარტული (გარე).",
    "importance": "High",
    "lat": 41.73973,
    "lng": 44.778088
  },
  {
    "name": "სითი მოლი გლდანი",
    "address": "ომარ ხიზანიშვილის ქუჩა #1",
    "category": "სავაჭრო ცენტრი - მიწისზედა / მიწისქვეშა",
    "capacity": "100+",
    "status": "ფასიანი",
    "potential": "Stay: 1 საათი; commercial potential: სტაბილური; recommended wash: მშრალი / ეკო რეცხვა.",
    "importance": "Medium",
    "lat": 41.791617,
    "lng": 44.81546
  },
  {
    "name": "ჰიპერმარკეტი დომინო",
    "address": "ალექსანდრე თვალჭრელიძის ქუჩა",
    "category": "სამშენებლო მარკეტი - დიდია ღია მოედანი",
    "capacity": "100+",
    "status": "უფასო",
    "potential": "Stay: 1 საათი; commercial potential: სტაბილური; recommended wash: სტანდარტული (გარე).",
    "importance": "Medium",
    "lat": 41.693128,
    "lng": 44.900812
  },
  {
    "name": "სასტუმრო რედისონ ბლუ ივერია",
    "address": "პირველი რესპუბლიკის მოედანი #1",
    "category": "სასტუმრო - დაცული ღია მოედანი",
    "capacity": "90",
    "status": "ფასიანი",
    "potential": "Stay: 2 საათი; commercial potential: მაღალბიუჯეტიანი; recommended wash: პრემიუმ მშრალი რეცხვა.",
    "importance": "High",
    "lat": 41.703922,
    "lng": 44.793569
  },
  {
    "name": "თბილისის საერთაშორისო აეროპორტი",
    "address": "AeroPort T'rasa",
    "category": "ტრანსპორტი - ღია მოედნები (3 ზონა)",
    "capacity": "1000+",
    "status": "ფასიანი",
    "potential": "Stay: 24+ საათი; commercial potential: საშუალო; recommended wash: ხანგრძლივი დეტეილინგი.",
    "importance": "High",
    "lat": 41.668546,
    "lng": 44.955934
  },
  {
    "name": "პეკინისა და მიცკევიჩის კვეთა",
    "address": "პეკინის გამზირი (მიწისქვეშა)",
    "category": "მუნიციპალური - ავტომატიზებული მიწისქვეშა",
    "capacity": "200",
    "status": "ფასიანი",
    "potential": "Stay: 45 წუთი; commercial potential: საშუალო; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "Medium",
    "lat": 41.7251,
    "lng": 44.7727
  },
  {
    "name": "იუსტიციის სახლის პარკინგი",
    "address": "ზვიად გამსახურდიას სანაპირო #2",
    "category": "სახელმწიფო უწყება - ღია / მიწისქვეშა",
    "capacity": "200-მდე",
    "status": "ფასიანი",
    "potential": "Stay: 40 წუთი; commercial potential: დროში შეზღუდული; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "Light",
    "lat": 41.7002,
    "lng": 44.8062
  },
  {
    "name": "ბაქსვუდის სპორტული დარბაზი",
    "address": "მარშალ გელოვანის გამზირი #1",
    "category": "სპორტი (კალათბურთი) - ღია ეზო",
    "capacity": "50+",
    "status": "უფასო",
    "potential": "Stay: 1.2 საათი; commercial potential: საშუალო; recommended wash: სტანდარტული (გარე).",
    "importance": "Medium",
    "lat": 41.743337,
    "lng": 44.769601
  },
  {
    "name": "ნიუტონის თავისუფალი სკოლა",
    "address": "ანა პოლიტკოვსკაიას ქუჩა #30",
    "category": "სპორტი (კალათბურთი) - გარე საპარკინგე ზოლი",
    "capacity": "50+",
    "status": "უფასო",
    "potential": "Stay: 1.2 საათი; commercial potential: საშუალო; recommended wash: სტანდარტული (გარე).",
    "importance": "Medium",
    "lat": 41.720067,
    "lng": 44.708038
  },
  {
    "name": "სასტუმრო მოქსი (Moxy Hotel)",
    "address": "ზაარბრიუკენის მოედანი",
    "category": "სასტუმრო - დახურული (მიწისქვეშა)",
    "capacity": "55",
    "status": "ფასიანი",
    "potential": "Stay: 2 საათი; commercial potential: მცირე ფართობი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "Light",
    "lat": 41.702714,
    "lng": 44.804505
  },
  {
    "name": "დინამოს აკადემია (კალათბურთი)",
    "address": "ნოდარ ახალკაცის ქუჩა #38/3",
    "category": "სპორტი (კალათბურთი) - დაცული შიდა ეზო",
    "capacity": "~35",
    "status": "უფასო",
    "potential": "Stay: 1.5 საათი; commercial potential: ლოკალური; recommended wash: მშრალი / ეკო რეცხვა.",
    "importance": "Light",
    "lat": 41.759663,
    "lng": 44.774852
  },
  {
    "name": "Padel Academy (ქავთარაძე)",
    "address": "პეტრე ქავთარაძის ქუჩა #26",
    "category": "სპორტი (პადელი) - მცირე შიდა ეზო",
    "capacity": "~20",
    "status": "უფასო",
    "potential": "Stay: 1.5 საათი; commercial potential: მცირე ფართობი; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "Light",
    "lat": 41.721494,
    "lng": 44.732075
  },
  {
    "name": "ზაზა ფაჩულიას აკადემია",
    "address": "აკაკი წერეთლის გამზირი #105ა",
    "category": "სპორტი (კალათბურთი) - შეზღუდული შიდა ეზო",
    "capacity": "შეზღუდული",
    "status": "უფასო",
    "potential": "Stay: 1.5 საათი; commercial potential: ლოკალური; recommended wash: მშრალი (ეკო რეცხვა).",
    "importance": "Light",
    "lat": 41.742295,
    "lng": 44.780316
  }
];

const markerColors = {
  High: "marker-high",
  Medium: "marker-medium",
  Light: "marker-light"
};

let map;
let locations = [];
let markers = new Map();
let activeFilter = "All";
let activeLocationName = "";

const listElement = document.getElementById("locationList");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const filterButtons = document.querySelectorAll(".filter-button");
const sidebar = document.querySelector(".sidebar");

if (window.L) {
  initialize();
} else {
  document.getElementById("map").innerHTML = `
    <div class="map-fallback">
      <h2>Map library unavailable</h2>
      <p>Connect to the internet and reopen this file so Leaflet and OpenStreetMap tiles can load.</p>
    </div>
  `;
}

async function initialize() {
  map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([41.7151, 44.8271], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  locations = await loadLocations();
  addMarkers(locations);
  bindControls();
  renderLocations();
}

async function loadLocations() {
  try {
    const response = await fetch("data/locations.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Location JSON was not available.");
    }
    return await response.json();
  } catch (error) {
    return fallbackLocations;
  }
}

function addMarkers(items) {
  items.forEach((location) => {
    if (!Number.isFinite(location.lat) || !Number.isFinite(location.lng) || location.lat === 0 || location.lng === 0) {
      return;
    }

    const marker = L.marker([location.lat, location.lng], {
      icon: createMarkerIcon(location.importance),
      zIndexOffset: getMarkerZIndex(location.importance)
    }).addTo(map);

    marker.bindPopup(createPopup(location), { maxWidth: 330 });
    marker.on("click", () => setActiveLocation(location.name));
    markers.set(location.name, marker);
  });

  const markerGroup = L.featureGroup(Array.from(markers.values()));
  if (markers.size > 0) {
    map.fitBounds(markerGroup.getBounds().pad(0.14));
  }
}

function createMarkerIcon(importance) {
  const className = markerColors[importance] || markerColors.Light;
  return L.divIcon({
    className: "",
    html: `<span class="custom-marker ${className}" aria-label="${escapeAttribute(importance)} importance marker"></span>`,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -38]
  });
}

function getMarkerZIndex(importance) {
  if (importance === "High") {
    return 300;
  }
  if (importance === "Medium") {
    return 200;
  }
  return 100;
}

function createPopup(location) {
  return `
    <article class="popup">
      <h2>${escapeHtml(location.name)}</h2>
      <div class="popup-row"><strong>Address:</strong> ${escapeHtml(location.address)}</div>
      <div class="popup-row"><strong>Category:</strong> ${escapeHtml(location.category)}</div>
      <div class="popup-row"><strong>Parking capacity:</strong> ${escapeHtml(location.capacity)}</div>
      <div class="popup-row"><strong>Paid/free status:</strong> ${escapeHtml(location.status)}</div>
      <div class="popup-row"><strong>Potential / stay:</strong> ${escapeHtml(location.potential)}</div>
      <div class="popup-row"><strong>Importance:</strong> ${escapeHtml(location.importance)}</div>
      <div class="popup-recommendation">${escapeHtml(getRecommendation(location))}</div>
    </article>
  `;
}

function getRecommendation(location) {
  if (location.importance === "High") {
    return "GeoWash recommendation: prioritize partnership outreach and pilot service scheduling.";
  }
  if (location.importance === "Medium") {
    return "GeoWash recommendation: qualify operator access, peak hours, and customer permission flow.";
  }
  return "GeoWash recommendation: keep as a secondary opportunity or test only with low setup effort.";
}

function bindControls() {
  searchInput.addEventListener("input", renderLocations);

  sidebar.addEventListener("wheel", (event) => {
    if (window.matchMedia("(min-width: 821px)").matches) {
      listElement.scrollTop += event.deltaY;
      event.preventDefault();
    }
  }, { passive: false });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderLocations();
    });
  });
}

function renderLocations() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = locations.filter((location) => {
    const matchesFilter = activeFilter === "All" || location.importance === activeFilter;
    const searchable = `${location.name} ${location.address} ${location.category} ${location.status} ${location.potential}`.toLowerCase();
    return matchesFilter && searchable.includes(query);
  });

  markers.forEach((marker, name) => {
    const isVisible = filtered.some((location) => location.name === name);
    if (isVisible && !map.hasLayer(marker)) {
      marker.addTo(map);
    }
    if (!isVisible && map.hasLayer(marker)) {
      marker.removeFrom(map);
    }
  });

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "location" : "locations"}`;

  if (filtered.length === 0) {
    listElement.innerHTML = '<div class="empty-state">No locations match this search.</div>';
    return;
  }

  listElement.innerHTML = filtered.map((location) => `
    <button class="location-card ${location.name === activeLocationName ? "active" : ""}" type="button" data-name="${escapeAttribute(location.name)}">
      <span class="location-card-title">
        <span class="importance-dot ${escapeAttribute(location.importance)}"></span>
        <span>${escapeHtml(location.name)}</span>
      </span>
      <span class="location-meta">${escapeHtml(location.category)} · ${escapeHtml(location.capacity)} · ${escapeHtml(location.importance)}</span>
    </button>
  `).join("");

  listElement.querySelectorAll(".location-card").forEach((card) => {
    card.addEventListener("click", () => {
      const location = locations.find((item) => item.name === card.dataset.name);
      if (location) {
        focusLocation(location);
      }
    });
  });
}

function focusLocation(location) {
  const marker = markers.get(location.name);
  if (!marker) {
    return;
  }
  setActiveLocation(location.name);
  map.setView(marker.getLatLng(), 15, { animate: true });
  marker.openPopup();
}

function setActiveLocation(name) {
  activeLocationName = name;
  listElement.querySelectorAll(".location-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.name === name);
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
