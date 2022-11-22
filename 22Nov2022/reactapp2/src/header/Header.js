function Header(head) {
    return (
        <div class="p-5 bg-primary text-white text-center">
            <h1>{head.brand}</h1>
            <p>{head.slogan}</p>
        </div>
    )
}

export default Header;