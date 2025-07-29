<script>
    let menu_open = false;

    function toggle_menu() {
        menu_open = !menu_open;
    }
</script>

<div class="main_container">
    <nav class="navbar">
        <div class="nav_left">
            <button class="hamburger" on:click={toggle_menu}>
                &#9776;
            </button>
            <span class="search_icon"><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>

        <div class="nav_center {menu_open ? 'show_menu' : ''}">
            <a class="inactive" href="#">Home</a>
            <a href="#">Spaces</a>
            <a href="#">Products & Services</a>
            <a href="#">Showrooms</a>
            <a href="#">Company</a>
            <a href="#">Media</a>
            <a href="#">Contact</a>
        </div>

        <div class="nav_right">
            <span class="icon" title="Cart"><i class="fa-solid fa-cart-shopping"></i></span>
            <span class="icon" title="Wishlist"><i class="fa-regular fa-heart"></i></span>
            <span class="icon" title="Account"><i class="fa-solid fa-user"></i></span>
        </div>
    </nav>
</div>


<style>

    .main_container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navbar {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem 1rem;
        background-color: white;
        border-bottom: 1px solid #eee;
        font-family: sans-serif;
        position: relative;
        z-index: 100;
    }

    .nav_left {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .hamburger {
        font-size: 1.6rem;
        background: none;
        border: none;
        cursor: pointer;
        display: none;
    }

    .search_icon {
        font-size: 1.2rem;
        cursor: pointer;
    }

    .nav_center {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav_center a {
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        color: black;
        transition: color 0.2s ease;
    }

    .nav_center a:hover {
        color: #888;
    }

    .nav_center .inactive {
        color: #aaa;
        font-weight: 500;
    }

    .nav_right {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }

    .icon {
        font-size: 1.3rem;
        cursor: pointer;
    }

    @media (max-width: 768px) {

        .navbar{
            width: 90%;
        }

        .hamburger {
            display: block;
        }

        .nav_center {
            width: 100%;
            position: absolute;
            top: 100%;
            left: -10px;
            right: 0;
            background: white;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            display: none;
            border-top: 1px solid #eee;
        }

        .nav_center.show_menu {
            display: flex;
        }

        .nav_right {
            display: flex;
        }
    }
</style>
