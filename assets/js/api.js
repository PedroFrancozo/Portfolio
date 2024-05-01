async function fetcgProfileData() {
    const url = 'https://github.com/PedroFrancozo/Portfolio/blob/main/assets/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}