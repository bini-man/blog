const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1 className="links">The Dojo Blog</h1>
            <div className="content">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        
        
        </nav>
    );
}
 
export default Navbar;