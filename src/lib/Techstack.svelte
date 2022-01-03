<script>
    import { onMount } from "svelte";
    let con;
    let txt;
    let update = false;
    let elem;
    let w;
    let h;
    onMount(() => {
        con = document.getElementById("container");
        txt = document.getElementById("txt");
        w = con.clientWidth;
        h = con.clientHeight;
        window.addEventListener(
            "contextmenu",
            function (ev) {
                if (elem != null) {
                    ev.preventDefault();
                    mouseUp();
                    update = !update;
                    elem = null;
                }
                return false;
            },
            false
        );
    });
    function moveIcon(ele, mouse) {
        let relX = mouse.clientX - (window.innerWidth - w) / 2;
        let relY = mouse.clientY - (window.innerHeight - h) / 2;
        ele.style.top = (relY / h) * 100 + "%";
        ele.style.left = (relX / w) * 100 + "%";
        //ele.style.top = mouse.clientY + "px";
        //ele.style.left = mouse.clientX + "px";
        txt.innerHTML =
            "Mouse : { " +
            mouse.clientX +
            " , " +
            mouse.clientY +
            " }\tContainer : {" +
            relX +
            " , " +
            relY +
            "} Width : " +
            w +
            " Height : " +
            h;
    }
    function move(e) {
        moveIcon(elem, e);
    }
    function mouseUp() {
        console.log("Relese Hook");
        con.removeEventListener("mousemove", move, true);
    }
    function iconClick(e) {
        console.log("Add Hook");
        elem = e.srcElement;
        update = !update;
        con.addEventListener("mousemove", move, true);
    }
</script>

<div
    class="p-24 flex justify-center align-center"
    style="width: 100vw; height:100vh;  "
>
    <p id="txt" style="position: absolute; top:0px;left:0px" />
    <div style="width:100%;height:100%;" id="container">
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-image: url('/react-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5vw 5vw; background-image: url('/svelte-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:6.5vw 6.5vw; background-image: url('/dotnet-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/1-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/2-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/3-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/4-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/5-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/6-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/7-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/aws-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/mongodb-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/vs-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/gcloud-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/tailwind-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/sql-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/js-icon.svg');"
        />
        <div
            on:click={iconClick}
            class="icon-ball"
            style="background-size:5.5vw 5.5vw; background-image: url('/lambda-icon.svg');"
        />



        <div
            class="relative"
            style="width: 100%; height: 100%; background-image: url('/techstack.svg');  background-repeat: no-repeat; background-position: center;"
        >
            <h1
                class="text-center text-gray-500 font-semibold"
                style="font-size: 3vw;"
            >
                Our Techstack
            </h1>
            <div class="bottom-0 absolute" style="width: 100%;">
                <h6 class="text-center text-gray-500 text-xl" style="padding:0% 25%">
                    We evolve with the world to acquire cutting edge technology for you to stay ahead of others stuck on decades old software.
                </h6>
            </div>
        </div>
    </div>
</div>

<style>
    .icon-ball {
        @apply bg-white shadow-2xl shadow-slate-400 absolute;
        border-radius: 7vw;
        width: 7vw;
        height: 7vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        z-index: 100;
    }
</style>
