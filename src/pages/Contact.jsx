import ContactCard from "../components/ContactCard";

export default function Contact() {
    const contacts = [
        {
            role: "President",
            name: "Name Here",
            phone: "+91 98765 43210",
            email: "president@rotaractbit.in",
        },
        {
            role: "Secretary",
            name: "Name Here",
            phone: "+91 98765 43211",
            email: "secretary@rotaractbit.in",
        },
        {
            role: "Club Advisor",
            name: "Name Here",
            phone: "+91 98765 43212",
            email: "advisor@rotaractbit.in",
        },
    ];

    return (
        <section style={{ textAlign: "center" }}>
            <h1>Contact Us</h1>

            <p
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    opacity: 0.85,
                    lineHeight: "1.8",
                    marginTop: "20px",
                }}
            >
                Reach out directly to our club leadership for queries, collaborations,
                or information about ongoing and upcoming initiatives.
            </p>

            <div
                style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "35px",
                    flexWrap: "wrap",
                }}
            >
                {contacts.map((person) => (
                    <ContactCard
                        key={person.role}
                        role={person.role}
                        name={person.name}
                        phone={person.phone}
                        email={person.email}
                    />
                ))}
            </div>
        </section>
    );
}
