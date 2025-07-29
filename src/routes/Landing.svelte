<script>
    // You can add interactivity if needed
</script>

<div class="main_container">
    <div class="content_container">
        <div class="blank_container"></div>

        <div class="text_container">
            <div class="heading">
                <h2>New generation Ceramic Tile</h2>
            </div>
            <div class="description">
                <p>
                    Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
                </p>
            </div>
            <div class="button_container">
                <button>learn more</button>
            </div>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: ProximaNova;
        src: url(/assets/common/Proxima_Nova_2.otf);
    }

    h2, p {
        font-family: ProximaNova;
        color: white;
    }

    .main_container {
        width: 100%;
        min-height: 425px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block: 50px;
        background-image: url("/assets/landing/landing_background.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .content_container {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .blank_container {
        width: 50%;
        height: 100%;
    }

    .text_container {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 30px;
        backdrop-filter: blur(34px);
        background: #0000005C;
    }

    .button_container button {
        text-transform: uppercase;
        border: none;
        background: white;
        width: 180px;
        height: 52px;
        font-size: 18px;
        font-weight: 700;
    }

    /* 🔽 Responsive styles */
    @media (max-width: 1024px) {
        .content_container {
            width: 90%;
        }
    }

    @media (max-width: 768px) {
        .content_container {
            flex-direction: column;
            gap: 20px;
        }

        .blank_container {
            display: none;
        }

        .text_container {
            width: 90%;
            padding: 20px;
            backdrop-filter: blur(2px);
        }

        .button_container button {
            width: 100%;
            max-width: 200px;
            height: 48px;
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        .main_container {
            padding-block: 30px;
        }

        .text_container {
            padding: 15px;
            gap: 15px;
            width: 90%;
            backdrop-filter: blur(2px);
        }

    }
</style>
