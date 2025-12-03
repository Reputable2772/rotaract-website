function TeamCard({ name, designation, logo_path }) {
    return (<div
        className="card"
        style={{
            width: "260px",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
        }}
    >
        <img
            src={logo_path}
            alt={designation}
            style={{
                height: "120px",
                width: "120px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "18px",
                border: "3px solid rgba(255,255,255,0.25)",
            }}
        />
        <h3 style={{ marginBottom: "6px" }}>{name}</h3>
        <p style={{ opacity: 0.7 }}>{designation}</p>
    </div>);
}

export default function Team() {
    return (
        <section style={{ textAlign: "center" }}>
            <h1>Team Introduction</h1>
            <p
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    opacity: 0.85,
                    lineHeight: "1.8",
                }}
            >
                Meet the individuals who keep the club running, planning, organizing,
                and occasionally stressing over events so everything looks effortless.
            </p>

            <div
                style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    flexWrap: "wrap",
                }}
            >
                <TeamCard name="Team Member 1" designation="Designation" logo_path="logo_path.png" />
                <TeamCard name="Team Member 2" designation="Designation" logo_path="logo_path.png" />
                <TeamCard name="Team Member 3" designation="Designation" logo_path="logo_path.png" />
            </div>
        </section>
    );
}
