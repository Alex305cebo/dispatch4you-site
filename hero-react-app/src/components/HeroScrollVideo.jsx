import React from "react";
import MapCanvas from "./MapCanvas";
import "./HeroScrollVideo.css";

export const HeroScrollVideo = ({
    title = "Станьте профессиональным диспетчером",
    subtitle = "Полный курс обучения",
    meta = "2025",
    credits = (
        <>
            <p>Профессиональное обучение</p>
            <p>Dispatch Training</p>
        </>
    ),
    overlay = {
        caption: "КУРС • 2025",
        heading: "Практика на реальных кейсах",
        paragraphs: [
            "12 модулей обучения",
            "50+ реальных кейсов",
            "Сертификат по окончанию",
        ],
    },
    className,
    style,
}) => {
    return (
        <div
            className={["hsv-root", className].filter(Boolean).join(" ")}
            style={style}
        >
            <MapCanvas />

            <div className="hsv-container">
                <div className="hsv-headline">
                    <h1 className="hsv-title">{title}</h1>
                    {subtitle ? <h2 className="hsv-subtitle">{subtitle}</h2> : null}
                    {meta ? <div className="hsv-meta">{meta}</div> : null}
                    {credits ? <div className="hsv-credits">{credits}</div> : null}
                </div>
            </div>

            <div className="hsv-content-section">
                <div className="hsv-overlay-static">
                    {overlay?.caption ? (
                        <div className="hsv-caption">{overlay.caption}</div>
                    ) : null}
                    <div className="hsv-overlay-content">
                        {overlay?.heading ? <h3>{overlay.heading}</h3> : null}
                        {overlay?.paragraphs?.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroScrollVideo;
