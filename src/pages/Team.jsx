export default function Team() {
    return (
        <section style={{ textAlign: "center" }}>
            <h1>Team Introduction</h1>
            <p
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    opacity: 0.85,
                    lineHeight: "1.8"
                }}
            >
                Meet the people who somehow manage to organize events, run projects,
                and still pretend they get enough sleep. Replace the placeholders with
                your actual club members.
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
                <div className="card" style={{ width: "260px", padding: "25px" }}>
                    <h3>Name 1</h3>
                    <p style={{ opacity: 0.7 }}>Position</p>
                </div>

                <div className="card" style={{ width: "260px", padding: "25px" }}>
                    <h3>Name 2</h3>
                    <p style={{ opacity: 0.7 }}>Position</p>
                </div>

                <div className="card" style={{ width: "260px", padding: "25px" }}>
                    <h3>Name 3</h3>
                    <p style={{ opacity: 0.7 }}>Position</p>
                </div>
            </div>
        </section>
    );
}
