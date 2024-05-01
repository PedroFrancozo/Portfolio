function updateProfileInfo(profileData) {
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const location = document.getElementById('proofile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

(async () => {

    const profileData = await fetchProfileData()
    console.log(profileData)
})()