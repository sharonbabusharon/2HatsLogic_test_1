<script>

</script>

<div class="main_container">
    <div class="content_container">
        <div class="logo_container">
            <img src="/assets/common/logo.png" alt="">
            <div class="social_media_icons_container">

            </div>
        </div>
        <div class="links_container">
            <div class="links">
                <div class="first_part">
                    <p>Products</p>
                    <ul>
                        <li>Sand Stone</li>
                        <li>Stone</li>
                        <li>Cement</li>
                        <li>Soft Stone</li>
                    </ul>
                </div>
                <div class="second_part">
                    <p>Services</p>
                    <ul>
                        <li>Measurement Service</li>
                        <li>Product Advice</li>
                        <li>Interior Design</li>
                    </ul>
                </div>
                <div class="third_part">
                    <p>Contact information</p>
                    <ul>
                        <li>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, </li>
                        <li>An Nuzhah, Riyadh 12474, </li>
                        <li>Saudi Arabia</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</div>

<style>

    li{
        font-family: Poppins;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        text-transform: capitalize;
        color: #A4A4A4;
        text-decoration: none;
        list-style: none;
    }

    p{
        font-family: Poppins;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        text-transform: capitalize;
        color: #ffff !important;
        margin-bottom: 10px;
    }

    .main_container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-block: 90px;
        background-color: black;
    }

    .content_container{
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo_container {
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .links_container{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .links{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    @media (max-width: 768px) {

        .content_container{
            flex-direction: column;
            width: 90%;
            gap: 30px;
        }

        .links{
            flex-wrap: wrap;
            gap: 30px;
        }

        .logo_container,.links_container {
            width: 100%;
        }

    }


</style>