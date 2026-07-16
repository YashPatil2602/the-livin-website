import { useEffect, useState } from "react";

const galleryImages = [
    {
        id: 1,
        src: "/images/banners/hero-desktop.jpg",
        title: "The Livin",
        category: "Project View",
    },
    {
        id: 2,
        src: "/images/amenities/gym.jpg",
        title: "Fitness Centre",
        category: "Amenities",
    },
    {
        id: 3,
        src: "/images/amenities/yoga-deck.jpg",
        title: "Yoga Deck",
        category: "Amenities",
    },
    {
        id: 4,
        src: "/images/amenities/rooftop.jpg",
        title: "Rooftop Recreation",
        category: "Amenities",
    },
    {
        id: 5,
        src: "/images/amenities/kids-play-area.jpg",
        title: "Children's Play Area",
        category: "Amenities",
    },
    {
        id: 6,
        src: "/images/amenities/indoor-games.jpg",
        title: "Indoor Games",
        category: "Amenities",
    },
];

function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const selectedImage =
        selectedIndex !== null ? galleryImages[selectedIndex] : null;

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showPreviousImage = () => {
        setSelectedIndex((currentIndex) => {
            if (currentIndex === 0) {
                return galleryImages.length - 1;
            }

            return currentIndex - 1;
        });
    };

    const showNextImage = () => {
        setSelectedIndex((currentIndex) => {
            if (currentIndex === galleryImages.length - 1) {
                return 0;
            }

            return currentIndex + 1;
        });
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (selectedIndex === null) {
                return;
            }

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                showPreviousImage();
            }

            if (event.key === "ArrowRight") {
                showNextImage();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    return (
        <>
            <section id="gallery" className="gallery-section">
                <div className="gallery-container">
                    <div className="gallery-heading">
                        <p className="gallery-kicker">
                            Project Gallery
                        </p>

                        <h2>Experience The Livin</h2>

                        <p>
                            Explore the project architecture, lifestyle
                            amenities and thoughtfully designed recreational
                            spaces.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <button
                                key={image.id}
                                type="button"
                                className={
                                    "gallery-item gallery-item-" +
                                    (index + 1)
                                }
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="gallery-image"
                                />

                                <span className="gallery-overlay">
                                    <span className="gallery-category">
                                        {image.category}
                                    </span>

                                    <strong>{image.title}</strong>

                                    <span className="gallery-view-text">
                                        View Image
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div
                    className="gallery-lightbox"
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        className="gallery-lightbox-close"
                        onClick={closeLightbox}
                    >
                        ×
                    </button>

                    <button
                        type="button"
                        className="gallery-lightbox-arrow gallery-lightbox-previous"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPreviousImage();
                        }}
                    >
                        ‹
                    </button>

                    <div
                        className="gallery-lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                        />

                        <div className="gallery-lightbox-caption">
                            <span>{selectedImage.category}</span>
                            <h3>{selectedImage.title}</h3>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="gallery-lightbox-arrow gallery-lightbox-next"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNextImage();
                        }}
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
}

export default Gallery;
