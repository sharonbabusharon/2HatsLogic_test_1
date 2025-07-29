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
            <div class="card" id="card_2">
                <img src="/assets/projects/image_1.png" alt="">
                <h4>Kingdom Tower</h4>
                <span>Marble Flooring</span>
            </div>
            <div class="card" id="card_2">
                <img src="/assets/projects/image_2.png" alt="">
                <h4>Dubai Mall</h4>
                <span>Wood Flooring</span>
            </div>
            <div class="card" id="card_2">
                <img src="/assets/projects/image_3.png" alt="">
                <h4>King Road Offices</h4>
                <span>Outdoor Flooring</span>
            </div>
            <div class="card" id="card_2">
                <img src="/assets/projects/image_4.png" alt="">
                <h4>Beach Tower Alupang</h4>
                <span>Wood Flooring</span>
            </div>
        </div>
        <div class="button_container">
            <button>View All</button>
        </div>
    </div>
</div>

<style>

    @font-face {
        font-family: ProximaNova;
        src: url(/assets/common/Proxima_Nova_2.otf);
    }

    p{
        color: #616161;
    }

    h4,span,h2,p{
        font-family: ProximaNova;
    }

    img{
        width: 100%;
        margin-bottom: 20px;
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

    .cards_container{
        width: 100%;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: space-between;
        padding-block: 50px;
    }

    .card{
        text-align: center;
    }

    .button_container button{
        text-transform: uppercase;
        border: none;
        color: white;
        background: black;
        width: 180px;
        height: 52px;
        font-size: 18px;
        font-weight: 700;
    }

    @media (max-width: 768px) {

        .content_container{
            width: 90%;
        }

        .text_container{
            width: 100%;
        }

        .cards_container{
            flex-wrap: wrap;
            gap: 20px;
        }

        .card{
            width: 47%;
        }
    }

</style>