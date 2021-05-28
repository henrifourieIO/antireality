const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI () {
    const headers = { 'Content-Type': 'application/json' }
    
    const fetchAPI = await fetch("https://backend.antireality.co.za/ql", {
        method: "POST",
        headers,
        body: JSON.stringify({
            query: 
            `
                query MyQuery {
                    page(id: "cG9zdDo2OQ==") {
                    seo {
                        metaDesc
                        focuskw
                        metaKeywords
                        title
                        twitterTitle
                        twitterDescription
                    }
                    slug
                    }
                }
            `
        })
    })

    const json = await fetchAPI.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return {
        props: {
            metaDesc: json.data.page.seo.metaDesc,
            focuskw: json.data.page.seo.focuskw,
            metaKeywords: json.data.page.seo.metaKeywords,
            title: json.data.page.seo.title,
            twitterTitle: json.data.page.seo.twitterTitle,
            twitterDescription: json.data.page.seo.twitterDescription,
            slug: json.data.page.slug,
        },
    }
}



export default async (req, res) => {
    const data = await fetchAPI()
    await res.status(200).json(data.props)
}