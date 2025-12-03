export default function About() {
    return (
        <section style={{ textAlign: "center" }}>
            <h1>About Us</h1>

            <p
                style={{
                    maxWidth: "850px",
                    margin: "0 auto",
                    opacity: 0.85,
                    lineHeight: "1.8",
                    marginTop: "20px"
                }}
            >
                Founded within the vibrant campus of Bangalore Institute of Technology,
                the Rotaract Club of BIT stands as a dynamic platform for young
                changemakers committed to service, leadership, and personal growth. As a
                proud member of Rotary International District 3191 and sponsored by a
                supporting Rotary Club, we channel the energy of youth into impactful
                initiatives that strengthen communities and empower individuals.
                <br /><br />
                Our club brings together students from diverse backgrounds who share a
                passion for learning, collaborating, and creating sustainable change.
                Throughout the year, we curate a wide spectrum of projects—ranging from
                community outreach and educational support to professional development
                sessions, creative campus events, and skill-building workshops. Each
                initiative is designed to cultivate confidence, teamwork, and a spirit
                of responsibility among our members.
            </p>

            <div
                className="card"
                style={{
                    margin: "50px auto 0",
                    padding: "40px",
                    borderRadius: "20px",
                    maxWidth: "800px",
                    textAlign: "center"
                }}
            >
                <h2>Our Guiding Principles</h2>

                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "20px auto 0",
                        opacity: 0.8,
                        lineHeight: "2",
                        maxWidth: "550px",
                        textAlign: "center",
                        fontSize: "1.05rem"
                    }}
                >
                    <li>
                        Encouraging members to develop their professional and interpersonal
                        skills.
                    </li>
                    <li>
                        Providing leadership experiences through planning and executing
                        meaningful projects.
                    </li>
                    <li>
                        Inspiring creativity, innovation, and personal excellence.
                    </li>
                    <li>
                        Upholding values of integrity, respect, and service in everything we
                        undertake.
                    </li>
                    <li>
                        Creating opportunities that foster cultural exchange, teamwork, and
                        a deeper sense of global understanding.
                    </li>
                </ul>
            </div>

            <p
                style={{
                    maxWidth: "850px",
                    margin: "60px auto 0",
                    opacity: 0.85,
                    lineHeight: "1.8"
                }}
            >
                Driven by enthusiasm and purpose, we strive to create an environment
                where young leaders can explore their potential, contribute to society,
                and grow into individuals capable of transforming ideas into real impact.
            </p>
        </section>
    );
}
