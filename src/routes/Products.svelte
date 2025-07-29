<script>

</script>

<div class="main_container">
    <div class="content_container">
        <div class="text_container">
            <h2>Products</h2>
            <div class="divider"></div>
            <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
        </div>
        <div class="cards_container">
            <div class="first_cards_section">
                <div class="card" id="card_1" >
                    <div class="card_details_container">
                        <h4>Bathroom Tiles</h4>
                        <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
                    </div>
                </div>
                <div class="card" id="card_2">
                    <div class="card_details_container">
                        <h4>Marble</h4>
                        <p>Ante mus blandit sapien sociosqu</p>
                    </div>
                </div>
            </div>
            <div class="second_cards_section">
                <div class="card" id="card_3">
                    <div class="card_details_container">
                        <h4>Outdoor Flooring</h4>
                        <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
                    </div>
                </div>
                <div class="card" id="card_4">
                    <div class="card_details_container">
                        <h4>Kitchen Interior</h4>
                        <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

    @font-face {
        font-family: ProximaNova;
        src: url(/assets/common/Proxima_Nova_2.otf);
    }

    h4, p {
        font-family: ProximaNova;
        color: white;
    }

    h2{
        font-family: ProximaNova;
    }

    h4{
        font-size: 18px;
        margin-bottom: 5px;
    }

    p{
        font-size: 14px;
        margin: 0;
        line-height: 20px;
    }

    .main_container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-block: 50px;
    }

    .content_container{
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .text_container {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    .divider{
        width: 120px;
        height: 3px;
        background: #C4C4C4;
    }

    .description{
        color: black !important;
    }

    .cards_container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding-block: 50px;
    }

    .first_cards_section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 70%;
        gap: 20px;
    }

    .second_cards_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 30%;
        height: 520px;
    }

    .card{
        position: relative;
    }

    #card_1{
        width: 65%;
        background-image: url(/assets/products/card_1.png);
        height: 520px;
        background-size: cover;
        background-repeat: no-repeat;
    }

    #card_2{
        width: 35%;
        background-image: url(/assets/products/card_2.png);
        height: 520px;
        background-size: cover;
        background-repeat: no-repeat;
    }

    #card_3{
        width: 100%;
        background-image: url(/assets/products/card_3.png);
        height: 250px;
        background-size: cover;
        background-repeat: no-repeat;
    }

    #card_4{
        width: 100%;
        background-image: url(/assets/products/card_4.png);
        height: 250px;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .card_details_container{
        position: absolute;
        color: white;
        width: 90%;
        bottom: -10px;
        background: black;
        right: 5%;
        text-align: center;
        padding-block: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #ccc;
    }

    .card_details_container p,.card_details_container h4{
        width: 90%;
    }

    @media (max-width: 768px) {

        .main_container{
            padding-block: 0;
            padding-top: 20px;
        }

        .text_container{
            width: 100%;
        }

        .content_container{
            width: 90%;
        }

        .cards_container,.first_cards_section {
            flex-direction: column;
            gap: 40px;
        }

        .first_cards_section,.second_cards_section{
            width: 100%;
            gap: 40px;
        }

        #card_1{
            width: 100%;
        }

        #card_2{
            width: 100%;
            height: 520px;
        }

    }

</style>