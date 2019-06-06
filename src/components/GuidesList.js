import PropTypes from "prop-types";
import React from "react";

const GuidesList = props => {
    const renderGuides = () => {
        const { guides } = props;

        if (!guides) return;

        const guidesList = guides.map((obj, i) => {
            return (
                <article className="12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={obj.img} alt={obj.description} />
                    </a>

                    <h3>{obj.caption}</h3>
                </article>
            );
        });

        return <div className="row">{guidesList}</div>;
    };

    return <div>{renderGuides()}</div>;
};

GuidesList.displayName = "PLuralsight Guides";
GuidesList.propTypes = {
    guides: PropTypes.array,
};

export default GuidesList;
