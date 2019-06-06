module.exports = {
    siteMetadata: {
        title: "Gatsby Starter - Strata by HTML5 UP",
        author: "Hunter Chang",
        description: "A Gatsby.js Starter based on Strata by HTML5 UP",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
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