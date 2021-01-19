class Youtube {
    constructor(httpClient) {
        this.client = httpClient;
    }

    async mostPopular() {
        const response = await this.client.get("videos", {
            params: {
                part: "snippet",
                chart: "mostPopular",
                maxResults: 25,
            },
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.client.get("search", {
            params: {
                part: "snippet",
                type: "video",
                maxResults: 25,
                q: query,
            },
        });
        return response.items.map((item) => ({
            ...item,
            id: item.id.videoId,
        }));
    }
}

export default Youtube;
