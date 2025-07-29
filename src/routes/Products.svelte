<script>

</script>

<div class="main_container">
    <div class="content_container">
        <div class="text_container">
            <h2>Products</h2>
            <div class="divider"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div class="cards_container">
            <div class="first_cards_section">
                <div class="card" id="card_1">
<!--                    <img src="/assets/products/card_1.png" alt="">-->
                </div>
                <div class="card" id="card_2">
<!--                    <img src="/assets/products/card_2.png" alt="">-->
                </div>
            </div>
            <div class="second_cards_section">
<!--                <div class="card" id="card_3">-->
<!--&lt;!&ndash;                    <img src="/assets/products/card_3.png" alt="">&ndash;&gt;-->
<!--                </div>-->
<!--                <div class="card" id="card_4">-->
<!--&lt;!&ndash;                    <img src="/assets/products/card_4.png" alt="">&ndash;&gt;-->
<!--                </div>-->
            </div>
        </div>
    </div>
</div>

<style>

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

    .cards_container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding-block: 50px;
    }

    .first_cards_section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 70%;
    }

    .second_cards_section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 30%;
    }

    #card_1{
        width: 70%;
        background-image: url(/assets/products/card_1.png);
        height: 577px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    #card_1 img{
        width: 100%;
    }

    #card_2{
        width: 30%;
        background-image: url(/assets/products/card_2.png);
        height: 577px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    #card_2 img{
        width: 100%;
    }

    #card_3, #card_4 {

    }

    #card_1 img{

    }

</style>