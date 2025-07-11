async function api(url, key, endpoint) {
  const response = await fetch(`${url}/v1/${endpoint}`, {
    headers: { "X-Auth-Token": key },
  })
  return response.json()
}

window.onload = async function run() {
  const params = new URLSearchParams(window.location.search)
  const url = `https://${params.get("url")}`
  const key = params.get("key")

  const link = document.createElement("a")
  link.href = url
  document.body.appendChild(link)

  const counters = await api(url, key, 'feeds/counters')
  const unreads = Object.entries(counters.unreads).sort(([,a],[,b]) => b-a)

  for (const [id, count] of unreads) {
    const icon = await api(url, key, `feeds/${id}/icon`)
    const container = document.createElement("div")
    const feedLink = document.createElement("a")
    feedLink.href = `${url}/feed/${id}/entries`
    const img = document.createElement("img")
    const num = document.createElement("b")
    img.src = `data:${icon.data}`
    if (count < 10) { num.textContent = count }
    else { num.textContent = String.fromCharCode(count + 55) }
    feedLink.appendChild(img)
    feedLink.appendChild(num)
    container.appendChild(feedLink)
    link.appendChild(container)
  }
}
