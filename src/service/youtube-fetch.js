export class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: "GET",
            redirect: "follow",
        };
    }

    async mostPopular() {
        console.log("get api mostPopular list");
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=20&chart=mostPopular&regionCode=KR&key=${this.key}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.items;
    }

    async search(query) {
        console.log("get api query search list");
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&key=${this.key}`,
            this.requestOptions
        );
        const result = await response.json();
        const items = result.items.map((item) => ({
            ...item,
            id: item.id.videoId,
        }));
        return items;
    }
}

export default Youtube;
