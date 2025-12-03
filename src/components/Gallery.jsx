import "./gallery.css";

export default function Gallery() {
  return (
    <section style={{ textAlign: "center" }}>
      <h2>Gallery</h2>

      <div className="gallery-wrapper">
        <div className="gallery-scroll">
          <img src="/src/assets/img1.jpg" className="g-img" />
          <img src="/src/assets/img2.jpg" className="g-img" />
          <img src="/src/assets/img3.jpg" className="g-img" />
          <img src="/src/assets/img4.jpg" className="g-img" />
          <img src="/src/assets/img5.jpg" className="g-img" />

          {/* duplicate set for seamless loop */}
          <img src="/src/assets/img1.jpg" className="g-img" />
          <img src="/src/assets/img2.jpg" className="g-img" />
          <img src="/src/assets/img3.jpg" className="g-img" />
          <img src="/src/assets/img4.jpg" className="g-img" />
          <img src="/src/assets/img5.jpg" className="g-img" />
        </div>
      </div>
    </section>
  );
}
