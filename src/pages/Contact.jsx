export default function Contact() {
    return (
        <section style={{ textAlign: "center" }}>
            <h1>Contact Us</h1>
            <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.8 }}>
                Reach out to us anytime. We actually read messages… most of the time.
            </p>

            <div
                className="card"
                style={{
                    margin: "40px auto 0",
                    padding: "35px",
                    borderRadius: "20px",
                    maxWidth: "600px",
                    textAlign: "center"
                }}
            >
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "22px",
                        alignItems: "center"
                    }}
                >
                    <div style={{ width: "100%", textAlign: "left" }}>
                        <label style={{ marginBottom: "6px", opacity: 0.8 }}>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                padding: "14px",
                                width: "100%",
                                borderRadius: "12px",
                                border: "1px solid rgba(255,255,255,0.12)",
                                background: "rgba(255,255,255,0.05)",
                                color: "white"
                            }}
                        />
                    </div>

                    <div style={{ width: "100%", textAlign: "left" }}>
                        <label style={{ marginBottom: "6px", opacity: 0.8 }}>Email</label>
                        <input
                            type="email"
                            placeholder="your@email"
                            style={{
                                padding: "14px",
                                width: "100%",
                                borderRadius: "12px",
                                border: "1px solid rgba(255,255,255,0.12)",
                                background: "rgba(255,255,255,0.05)",
                                color: "white"
                            }}
                        />
                    </div>

                    <div style={{ width: "100%", textAlign: "left" }}>
                        <label style={{ marginBottom: "6px", opacity: 0.8 }}>Message</label>
                        <textarea
                            rows={5}
                            placeholder="Type your message…"
                            style={{
                                padding: "14px",
                                width: "100%",
                                borderRadius: "12px",
                                border: "1px solid rgba(255,255,255,0.12)",
                                background: "rgba(255,255,255,0.05)",
                                color: "white",
                                resize: "none"
                            }}
                        />
                    </div>

                    <button className="btn" style={{ marginTop: "10px", width: "180px" }}>
                        Submit
                    </button>
                </form>
            </div>

            <div style={{ marginTop: "60px" }}>
                <h2>Other Ways to Reach Us</h2>
                <div style={{ marginTop: "15px", opacity: 0.75, lineHeight: "1.8" }}>
                    <div>Email: contact@rotaractbit.in</div>
                    <div>Location: BIT Campus</div>
                    <div>Instagram: @rotaractbit</div>
                </div>
            </div>
        </section>
    );
}
