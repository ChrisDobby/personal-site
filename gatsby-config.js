module.exports = {
    siteMetadata: {
        title: "ChrisDobby dot dev",
        author: "Chris Dobson",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "chris-dobby-dev",
                short_name: "chrisdobby",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/assets/images/profile.jpg", // This path is relative to the root of the site.
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-offline",
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "chris-dobby-dev",
                region: "eu-west-2",
                protocol: "https",
                hostname: "chrisdobby.dev",
            },
        },
    ],
};
