type UnityPackage = {
    assetUrl: string;
    assetVersion: number;
    created_at: string;
    id: string;
    platform: string;
    unitySortNumber: number;
    unityVersion: string;
    worldSignature: string;
};

type VRCListWorld = {
    id: number;
    world_id: string;
    name: string;
    description: string;
    authorId: string;
    authorName: string;
    capacity: string;
    imageUrl: string;
    thumbnailImageUrl: string;
    tags: string[];
    publicationDate: string;
    unityPackages: string[]; // parse as UnityPackage[]
    votes: string;
    deleted_votes: string;
    error_votes: string;
    user_faves: string;
    previewYoutubeId: string | null;
    last_updated: string;
    created_at: string;
    updated_at: string;
    vrchat_faves: string;
    vrchat_visits: number | null;
    filesize: number | null;
    filesize_mb: number | null;
    filesize_description_checked: number;
    deleted: number;
    faved: number;
    visited: number;
    vote: number | null;
    community_tags: string | null;
};

export type WorldInfo = {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
}

export const searchVRCListWorld = async (): Promise<WorldInfo[]> => {
    const response = await fetch("https://api.vrclist.com/worlds/trending", {
        method: "POST", // なぜ GET じゃないんだ
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },       
    })

    const data: VRCListWorld[] = await response.json();

    return data.map((item) => {
        return {
            title: item.name || "error",
            description: item.description || "error",
            imageUrl: item.thumbnailImageUrl || "error",
            url: `https://vrchat.com/home/world/${item.world_id}`,
        } satisfies WorldInfo;
    })
}
