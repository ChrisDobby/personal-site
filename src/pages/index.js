import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import GuidesList from "../components/GuidesList";

import cricket_scorer from "../assets/images/cricket-scorer.png";
import guide_1 from "../assets/images/guide-1.png";
import guide_2 from "../assets/images/guide-2.png";
import guide_3 from "../assets/images/guide-3.png";
import guide_4 from "../assets/images/guide-4.png";
import guide_5 from "../assets/images/guide-5.png";
import guide_6 from "../assets/images/guide-6.png";
import guide_7 from "../assets/images/guide-7.png";
import guide_8 from "../assets/images/guide-8.png";
import guide_9 from "../assets/images/guide-9.png";
import author from "../assets/images/author.png";

const GUIDES = [
    {
        img: guide_8,
        url:
            "https://www.pluralsight.com/guides/drag-and-drop-react-components",
        description: "Drag and Drop in React Components",
    },
    {
        img: guide_7,
        url: "https://www.pluralsight.com/guides/using-react-refs-typescript",
        description: "Using React Refs in Typescript",
    },
    {
        img: guide_9,
        url:
            "https://www.pluralsight.com/guides/testing-asynchronous-functionality-react-component",
        description: "Testing Asynchronous Functionality in a React Component",
    },
    {
        img: guide_6,
        url: "https://www.pluralsight.com/guides/render-window-resize-react",
        description: "Render on Window Resize in React",
    },
    {
        img: guide_4,
        url: "https://www.pluralsight.com/guides/react-component-composition/",
        description: "Component Composition in React",
    },
    {
        img: guide_1,
        url:
            "https://www.pluralsight.com/guides/prop-changes-in-react-component",
        description: "Reacting to Prop Changes in a React Component",
    },
    {
        img: guide_2,
        url:
            "https://www.pluralsight.com/guides/higher-order-composition-typescript-react",
        description: "Higher Order Composition with Typescript for React",
    },
    {
        img: guide_5,
        url: "https://www.pluralsight.com/guides/react-todo-list-part-1/",
        description: "React Todo List",
    },
    {
        img: guide_3,
        url: "https://www.pluralsight.com/guides/react-context-api",
        description: "Using the React Context API",
    },
];

export default () => {
    const siteTitle = "ChrisDobby.dev";
    const siteDescription = "Proud Data, average cricket, software developer";

    return (
        <Layout>
            <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
                <script src="https://kit.fontawesome.com/40393b60d6.js" />
            </Helmet>

            <div id="main">
                <section id="one">
                    <header className="major">
                        <h2>
                            <span className="image avatar">
                                <img src={cricket_scorer} alt="" />
                            </span>
                            Cricket Scorer
                        </h2>
                    </header>
                    <p>
                        Cricket Scorer is a free and open source online cricket
                        scoring application. Users are able to create matches
                        and score them, the scores and scorecards will be
                        updated in real time in the match centre for anyone to
                        view. The application can run without an internet
                        connection (although live updates cannot be done with no
                        connection) and can be installed onto devices.{" "}
                        <a
                            href="https://github.com/chrisdobby/cricket-scorer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The source for the client is here
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://github.com/chrisdobby/cricket-scores-live-api"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            for the api here
                        </a>
                    </p>
                    <ul className="actions">
                        <li>
                            <a
                                href="https://cricket-scorer.chrisdobby.dev"
                                className="button"
                            >
                                Go to Cricket Scorer
                            </a>
                        </li>
                    </ul>
                </section>

                <section id="two">
                    <header className="major" style={{ paddingTop: "1em" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                            }}
                        >
                            <a
                                className="image thumb"
                                href="https://app.pluralsight.com/profile/author/chris-dobsone"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginRight: "30px" }}
                            >
                                <img
                                    src={author}
                                    alt="Pluralsight author profile"
                                />
                            </a>

                            <h2>Pluralsight Guides</h2>
                        </div>
                    </header>
                    <GuidesList guides={GUIDES} />
                </section>
            </div>
        </Layout>
    );
};
