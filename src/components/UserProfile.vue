<script>
    export default {
    props: {
        name: {
        type: String,
        required: true
        },
        picture: {
        type: String,
        required: true
        }
    }
    };
</script>


<template>
    <article class="main-card rounded">
        <section class="profile-card rounded">
            <picture class="profile-card__picture">
                <img :src="picture" alt="profile picture">
            </picture>
            <h4 class="profile-card__subtitle">Report for</h4>
            <h2 class="profile-card__title">{{ name }}</h2>        
        </section>
        <section class="type-report-card">
            <ul>
                <li><a href="/daily">Daily</a></li>
                <li><a href="/weekly">Weekly</a></li>
                <li><a href="/monthly">Monthly</a></li>
            </ul>
        </section>
        </article>
</template>

<style scoped>

    .main-card{
        background-color: var(--Dark-blue);
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .profile-card{
        background-color: var(--Blue);
        padding: 2rem;
    }

    .profile-card__picture img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        border: solid 2px;
        border-color: white;
        margin-bottom: 2rem;
    }

    .profile-card__title{
        font-size: 45px;
        margin-bottom: 1.5rem;
    }

    .type-report-card{
        padding: 1rem 2rem 0.5rem 2rem;
    }

    .type-report-card ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .type-report-card ul li{
        margin-bottom: 1rem;
    }

    .type-report-card ul li a{
        color:var(--Desaturated-blue);
        font-weight: 400;
    }

    .type-report-card ul li a:hover{
        color: white;
    }

</style>
