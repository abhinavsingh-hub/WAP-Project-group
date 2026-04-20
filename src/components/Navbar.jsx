function Navbar() {
    return (
        <div style={{ display: "flex", padding: "10px", background: "#111", color: "#fff" }}>
            <h2>BookMyShow</h2>
            <input placeholder="Search movie..." style={{ marginLeft: "20px" }} />
        </div>
    );
}

export default Navbar;