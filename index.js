class Video {
  constructor(category) {
    this.category = category;
  }
}

class Thumbnail extends Video {
  constructor(category, title, thumbnail, author, authorAvatar, views, date) {
    super(category);
    this.title = title;
    this.thumbnail = thumbnail;
    this.author = author;
    this.authorAvatar = authorAvatar;
    this.views = views;
    this.date = date;
  }
}

const videos = [
  new Thumbnail("Music", "NEON STRING bass sounds FUNKY", "assets/1.png", "CharlesBerthoud", "assets/avatar1.png", "327K views •", "2 days ago"),
  new Thumbnail("Podcasts", "Learn Javascrypt basics", "assets/2.png", "Tony Alicea", "assets/avatar2.png", "2.1M views •", "3 years ago"),
  new Thumbnail("Animals", "How we feed our foster foxes", "assets/3.png", "SaveAFox", "assets/avatar3.png", "125K views •", "1 week ago"),
  new Thumbnail("Music", "VULFPECK /// Disco Ulysses (Instrumental)", "assets/4.png", "Vulf", "assets/avatar4.png", "3.6M views •", "3 years ago"),
  new Thumbnail("Animals", "Cute cat video", "assets/5.png", "CatOfTheInternet", "assets/avatar5.png", "2.4M views •", "2 years ago"),
  new Thumbnail("Music", "Slaughter To Prevail - DEMOLISHER", "assets/6.png", "Alex Terrible", "assets/avatar6.png", "15M views •", "2 years ago"),
  new Thumbnail(
    "Cooking shows",
    "Easy and quick VEGAN recipes",
    "assets/7.png",
    "Cheap Lazy Vegan",
    "assets/avatar7.png",
    "482K views •",
    "3 days ago"
  ),
  new Thumbnail("Animals", "FIREFOX", "assets/8.png", "TheRedPanda", "assets/avatar8.png", "5M views •", "4 years ago"),
  new Thumbnail(
    "Music",
    "Queen - Bohemian Rhapsody - Bass Tab",
    "assets/9.png",
    "CoverSolutions",
    "assets/avatar9.png",
    "460K views •",
    "2 years ago"
  ),
  new Thumbnail(
    "Music",
    "Arctic Monkeys - Do I Wanna Know (Official Video)",
    "assets/10.png",
    "Official Arctic Monkeys",
    "assets/avatar10.png",
    "1.3B views •",
    "8 years ago"
  ),
  new Thumbnail(
    "Music",
    "Cat dancing on wii shop music - 10Hours version",
    "assets/11.png",
    "sillyCat",
    "assets/avatar11.png",
    "2B views •",
    "1 year ago"
  ),
  new Thumbnail(
    "Music",
    "Billie Eilish - Happier Than Ever - (64th GRAMMY Awars Performance)",
    "assets/12.png",
    "Billie Eilish",
    "assets/avatar12.png",
    "8M views •",
    "1 month ago"
  ),
];

const chips = [
  new Video("All"),
  new Video("Bass"),
  new Video("TV shows"),
  new Video("Gaming"),
  new Video("Movies"),
  new Video("Podcasts"),
  new Video("Documentaries"),
  new Video("Animals"),
  new Video("Live"),
  new Video("Sports"),
  new Video("Cooking shows"),
  new Video("News"),
  new Video("Music"),
  new Video("Entertainment"),
  new Video("History"),
];

const videosContainer = document.querySelector("#videos-container");
const navigation = document.querySelector("#navigation");

function createDomElement(element, classname, parent, value) {
  const domElement = document.createElement(element);
  domElement.classList.add(classname);
  if (value && element === "img") {
    domElement.src = value;
  } else if (value && element === "p") {
    domElement.innerHTML = value;
  }
  parent.appendChild(domElement);
  return domElement;
}

function createThumbnailElement(parent, thumbnailUrl, avatar, title, author, views, date) {
  const thumbnail = createDomElement("div", "thumbnail", parent);
  const thumbnailImage = createDomElement("img", "thumbnail-image", thumbnail, thumbnailUrl);
  const thumbnailContainer = createDomElement("div", "thumbnail-container", thumbnail);
  const thumbnailAvatar = createDomElement("img", "thumbnail-avatar", thumbnailContainer, avatar);
  const thumbnailInfos = createDomElement("div", "thumbnail-infos", thumbnailContainer);
  const thumbnailTitle = createDomElement("p", "thumbnail-title", thumbnailInfos, title);
  const thumbnailAuthor = createDomElement("p", "thumbnail-author", thumbnailInfos, author);
  const viewsDateContainer = createDomElement("div", "views-date-container", thumbnailInfos);
  const thumbnailViews = createDomElement("p", "thumbnail-views", viewsDateContainer, views);
  const thumbnailDate = createDomElement("p", "thumbnail-date", viewsDateContainer, date);
}

function createChipElement(parent, category) {
  const chip = createDomElement("div", "chip", parent);
  const chipText = createDomElement("p", "chip-text", chip, category);
}

function injectThumbnailsWithData() {
  videos.map((video) => {
    const thumbnailUrl = video.thumbnail;
    const avatar = video.authorAvatar;
    const title = video.title;
    const author = video.author;
    const views = video.views;
    const date = video.date;
    createThumbnailElement(videosContainer, thumbnailUrl, avatar, title, author, views, date);
  });
}

function injectChipsWithData() {
  chips.map((chip) => {
    const category = chip.category;
    createChipElement(navigation, category);
  });
}

injectThumbnailsWithData();
injectChipsWithData();
