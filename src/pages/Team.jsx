import TeamCard from "../components/TeamCard";

export default function Team() {
    const members = [
        {
            designation: "President",
            name: "Name Here",
            logo_path: "/src/test",
        },
    ];

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
                {members.map((member, idx) =>
                (<TeamCard
                    key={idx} name={member.name} designation={member.designation} logo_path={member.logo_path} />))
                }
            </div>
        </section>
    );
}
