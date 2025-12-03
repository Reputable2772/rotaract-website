export default function Publications() {
    return (
        <section style={{ textAlign: "center" }}>
            <h1>Publications</h1>
            <p
                style={{
                    maxWidth: "750px",
                    margin: "0 auto",
                    opacity: 0.85,
                    lineHeight: "1.8"
                }}
            >
                Articles, reports, newsletters, or whatever your club decides to
                publish. At least it’ll look good when you paste the content here.
            </p>

            <div
                style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    flexWrap: "wrap"
                }}
            >
                <div className="card" style={{ width: "300px", padding: "25px" }}>
                    <h3>Publication Title</h3>
                    <p style={{ opacity: 0.7 }}>Short description</p>
                </div>

                <div className="card" style={{ width: "300px", padding: "25px" }}>
                    <h3>Publication Title</h3>
                    <p style={{ opacity: 0.7 }}>Short description</p>
                </div>
            </div>
        </section>
    );
}
