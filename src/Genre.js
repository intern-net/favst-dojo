class Genre {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

const Genres = [
    new Genre('all', 'ALL', '#E54D42'),
    new Genre('entertainment', 'エンタメ', '#39C973'),
    new Genre('it', 'IT', '#A841B3'),
    new Genre('fashion', 'ファッション', '#F09A2C'),
    new Genre('news', 'ニュース', '#34495E'),
    new Genre('gourmet', 'グルメ', '#F45B69'),
    new Genre('sports', 'スポーツ', '#0094DE'),
    new Genre('hobby', 'ホビー', '#06AED5'),
];

export default Genres
